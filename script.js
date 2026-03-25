// ===================================
// IMPORT CONFIGURATION
// ===================================

// Load configuration from separate file
// This allows easy sharing of contact data with friends
// while keeping the main application code separate

// ===================================
// APPLICATION STATE
// ===================================

let selectedLocation = null;
let selectedRecipient = null;
let selectedConcern = null;

// ===================================
// DOM ELEMENTS
// ===================================

const elements = {
    // Buttons
    emailAlbaneseBtn: document.getElementById('email-albanese-btn'),
    emailMinnsBtn: document.getElementById('email-minns-btn'),
    emailActionBtn: document.getElementById('email-action-btn'),
    openEmailBtn: document.getElementById('open-email-btn'),
    
    // Sections
    locationSection: document.getElementById('location-section'),
    concernSection: document.getElementById('concern-section'),
    emailSection: document.getElementById('email-section'),
    
    // Location inputs
    suburbSelect: document.getElementById('suburb-select'),
    locationResults: document.getElementById('location-results'),
    
    // Email preview
    previewRecipient: document.getElementById('preview-recipient'),
    previewSubject: document.getElementById('preview-subject'),
    previewContent: document.getElementById('preview-content')
};

// ===================================
// INITIALIZATION
// ===================================

function init() {
    populatePageContent();
    populateSuburbDropdown();
    setupEventListeners();
}

function populatePageContent() {
    console.log('Populating page content...');
    console.log('PAGE_CONTENT.title:', PAGE_CONTENT.title);
    
    // Update page title
    const pageTitleElement = document.getElementById('page-title');
    if (pageTitleElement) {
        pageTitleElement.textContent = PAGE_CONTENT.title;
        console.log('Updated page title element');
    } else {
        console.error('page-title element not found');
    }
    
    document.title = PAGE_CONTENT.title;
    console.log('Updated document title');
    
    // Update hero intro
    const heroIntroElement = document.getElementById('hero-intro');
    if (heroIntroElement) {
        heroIntroElement.textContent = PAGE_CONTENT.heroIntro;
        console.log('Updated hero intro');
    } else {
        console.error('hero-intro element not found');
    }
    
    // Update deadline
    const deadlineElement = document.getElementById('deadline');
    if (deadlineElement) {
        deadlineElement.textContent = PAGE_CONTENT.deadline;
        console.log('Updated deadline');
    } else {
        console.error('deadline element not found');
    }
    
    // Update disclaimer
    const disclaimerElement = document.getElementById('disclaimer');
    if (disclaimerElement) {
        disclaimerElement.innerHTML = `<em>${PAGE_CONTENT.disclaimer}</em>`;
        console.log('Updated disclaimer');
    } else {
        console.error('disclaimer element not found');
    }
    
    // Update location intro
    const locationIntroElement = document.getElementById('location-intro');
    if (locationIntroElement) {
        locationIntroElement.textContent = PAGE_CONTENT.locationIntro;
        console.log('Updated location intro');
    } else {
        console.error('location-intro element not found');
    }
    
    console.log('Page content population complete');
}

function populateSuburbDropdown() {
    const suburbs = [...new Set(LOCATION_DATA.map(loc => loc.suburb))].sort();
    suburbs.forEach(suburb => {
        const option = document.createElement('option');
        option.value = suburb;
        option.textContent = suburb;
        elements.suburbSelect.appendChild(option);
    });
}

function setupEventListeners() {
    // Primary action buttons
    elements.emailAlbaneseBtn.addEventListener('click', handleEmailAlbanese);
    elements.emailMinnsBtn.addEventListener('click', handleEmailMinns);
    elements.emailActionBtn.addEventListener('click', handleEmailAction);
    
    // Location inputs
    elements.suburbSelect.addEventListener('change', handleSuburbSelect);
    
    // Email button
    elements.openEmailBtn.addEventListener('click', handleOpenEmail);
    
    // Concern buttons
    document.querySelectorAll('.concern-button').forEach(button => {
        button.addEventListener('click', handleConcernSelect);
    });
}

// ===================================
// EVENT HANDLERS
// ===================================

function handleEmailAlbanese() {
    // Set up for Anthony Albanese (contact form workflow)
    selectedRecipient = {
        name: 'Anthony Albanese',
        email: 'anthony.albanese.mp@aph.gov.au',
        type: 'federal',
        isContactForm: true // Flag for special handling
    };
    
    // Show concern selection
    showConcernSelection();
}

function handleEmailMinns() {
    // Set up for Chris Minns
    selectedRecipient = {
        name: 'Chris Minns',
        email: 'kogarah@parliament.nsw.gov.au',
        type: 'state'
    };
    
    // Show concern selection
    showConcernSelection();
}

function handleEmailAction() {
    // Show location section
    elements.locationSection.style.display = 'block';
    elements.emailActionBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showConcernSelection() {
    // Hide location section if visible
    elements.locationSection.style.display = 'none';
    
    // Show concern section
    elements.concernSection.style.display = 'block';
    elements.concernSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleSuburbSelect(event) {
    const suburb = event.target.value;
    if (suburb) {
        searchBySuburb(suburb);
    } else {
        hideLocationResults();
    }
}

function handleConcernSelect(event) {
    const concernButton = event.currentTarget;
    const concern = concernButton.dataset.concern;
    
    // Update selection
    document.querySelectorAll('.concern-button').forEach(btn => btn.classList.remove('selected'));
    concernButton.classList.add('selected');
    selectedConcern = concern;
    
    // Update email preview in real-time
    updateEmailPreview();
    
    // Show email section if not already visible
    if (elements.emailSection.style.display === 'none') {
        showEmailSection();
    }
    
    // Automatically scroll to email section
    setTimeout(() => {
        elements.emailSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
}

function handleOpenEmail() {
    if (!selectedRecipient || !selectedConcern) {
        alert('Please select a recipient and concern first.');
        return;
    }
    
    const emailData = generateEmail();
    
    // Check if this is Albanese contact form workflow
    if (selectedRecipient && selectedRecipient.isContactForm) {
        // Copy the message to clipboard
        const fullMessage = `Subject: ${emailData.subject}\n\n${emailData.body}`;
        
        navigator.clipboard.writeText(fullMessage).then(() => {
            // Show success feedback
            const originalText = elements.openEmailBtn.textContent;
            elements.openEmailBtn.textContent = '✅ Message copied! Opening form...';
            
            // Show instructional popup
            showAlbaneseInstructions();
            
            // Navigate to Albanese contact form after a short delay
            setTimeout(() => {
                window.location.href = 'https://www.pm.gov.au/contact#no-back';
            }, 2000); // Give more time to read instructions
        }).catch(() => {
            // Fallback if clipboard fails
            alert('Could not copy message. Please copy manually and then we\'ll open the contact form.');
            setTimeout(() => {
                window.location.href = 'https://www.pm.gov.au/contact#no-back';
            }, 1000);
        });
    } else {
        // Normal email workflow for other recipients
        const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
        window.location.href = mailtoLink;
    }
}

function showAlbaneseInstructions() {
    const instructions = `
📋 INSTRUCTIONS FOR ANTHONY ALBANESE'S CONTACT FORM

✅ Your message has been copied to clipboard!
🌐 This page will automatically navigate to the contact form in 2 seconds.

📝 HOW TO COMPLETE THE FORM:

1️⃣ PASTE YOUR MESSAGE:
   • Click in the "Message" field
   • Paste (Ctrl+V or Cmd+V) your copied message
   • Your subject and message will appear together

2️⃣ FILL YOUR DETAILS (Optional but recommended):
   • Name: Your full name
   • Email: Your email address
   • Phone: Your phone number
   • Postcode: Your postcode

3️⃣ SUBMIT:
   • Review your message
   • Click "Submit" button
   • Your message will be sent to Anthony Albanese

💡 TIP: Including your contact details helps them respond to you directly.

⏰ You'll be redirected to the contact form automatically.
`;
    
    alert(instructions);
}

// ===================================
// LOCATION SEARCH
// ===================================

function searchBySuburb(suburb) {
    const results = LOCATION_DATA.filter(loc => loc.suburb.toLowerCase() === suburb.toLowerCase());
    displayLocationResults(results);
}

function displayLocationResults(results) {
    if (results.length === 0) {
        showNoResults();
        return;
    }
    
    const location = results[0]; // Take first match
    selectedLocation = location;
    
    const resultsHTML = `
        <div class="result-card" data-recipient="state">
            <div class="result-title">�️ State MP: ${location.stateMP.name}</div>
        </div>
        <div class="result-card" data-recipient="federal">
            <div class="result-title">🏛️ Federal MP: ${location.federalMP.name}</div>
        </div>
        <div class="result-card" data-recipient="council">
            <div class="result-title">� ${location.council.name}</div>
        </div>
    `;
    
    elements.locationResults.innerHTML = resultsHTML;
    elements.locationResults.style.display = 'block';
    
    // Add click handlers to result cards
    elements.locationResults.querySelectorAll('.result-card').forEach(card => {
        card.addEventListener('click', handleRecipientSelect);
    });
    
    // Automatically scroll to contact selection
    setTimeout(() => {
        elements.locationResults.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
}

function showNoResults() {
    const resultsHTML = `
        <p>No representatives found for your location.</p>
        <p>You can still <a href="#" onclick="handleOfficialSubmission()">make an official submission</a> to have your say.</p>
    `;
    
    elements.locationResults.innerHTML = resultsHTML;
    elements.locationResults.style.display = 'block';
}

function hideLocationResults() {
    elements.locationResults.style.display = 'none';
    selectedLocation = null;
    selectedRecipient = null;
}

// ===================================
// RECIPIENT SELECTION
// ===================================

function handleRecipientSelect(event) {
    const card = event.currentTarget;
    const recipientType = card.dataset.recipient;
    
    // Update selection
    elements.locationResults.querySelectorAll('.result-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    selectedRecipient = recipientType;
    
    // Update email preview if email section is already visible
    if (elements.emailSection.style.display !== 'none' && selectedConcern) {
        updateEmailPreview();
    }
    
    // Show concern section
    elements.concernSection.style.display = 'block';
    
    // Automatically scroll to concern section
    setTimeout(() => {
        elements.concernSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
}

// ===================================
// EMAIL GENERATION
// ===================================

function generateEmail() {
    const template = EMAIL_TEMPLATES[selectedConcern];
    let recipientEmail = '';
    let recipientName = '';
    
    // Handle both string-based and object-based recipients
    if (typeof selectedRecipient === 'string') {
        // Legacy string-based (for local reps)
        switch (selectedRecipient) {
            case 'council':
                recipientEmail = selectedLocation.council.email;
                recipientName = selectedLocation.council.name;
                break;
            case 'state':
                recipientEmail = selectedLocation.stateMP.email;
                recipientName = selectedLocation.stateMP.name;
                break;
            case 'federal':
                recipientEmail = selectedLocation.federalMP.email;
                recipientName = selectedLocation.federalMP.name;
                break;
            default:
                recipientEmail = '';
                recipientName = 'Decision Maker';
        }
    } else if (typeof selectedRecipient === 'object' && selectedRecipient !== null) {
        // Object-based (for Albanese, Minns, etc.)
        recipientEmail = selectedRecipient.email;
        recipientName = selectedRecipient.name;
    } else {
        recipientEmail = '';
        recipientName = 'Decision Maker';
    }
    
    const emailBody = `${template.greeting.replace('{name}', recipientName)}

${template.body}

${template.closing}`;
    
    return {
        to: recipientEmail,
        subject: EMAIL_TEMPLATES.subject,
        body: emailBody
    };
}

function updateEmailPreview() {
    if (!selectedRecipient || !selectedConcern) {
        return;
    }
    
    const emailData = generateEmail();
    
    // Update preview
    elements.previewRecipient.textContent = emailData.to || 'No email address';
    elements.previewSubject.textContent = emailData.subject;
    elements.previewContent.textContent = emailData.body;
}

function showEmailSection() {
    // Update preview first
    updateEmailPreview();
    
    // Check if this is Albanese contact form workflow
    if (selectedRecipient && selectedRecipient.isContactForm) {
        // Update button text for Albanese contact form
        elements.openEmailBtn.textContent = 'Copy message and open the contact form';
    } else {
        // Reset to default text for other recipients
        elements.openEmailBtn.textContent = 'Open email draft';
    }
    
    // Show section
    elements.emailSection.style.display = 'block';
    elements.emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===================================
// START THE APP
// ===================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// SOCIAL MEDIA SHARING
// ===================================

// Primary: Native Share API (mobile-first)
async function shareCampaign() {
    const shareData = {
        title: "Keep Maroubra Area Beaches Free",
        text: "Randwick Council wants to introduce parking meters at our beaches - effectively privatising public land and discriminating against families. Take action now!",
        url: "https://meterlessbeaches.github.io/keep-beaches-free/"
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log("Share cancelled or failed");
        }
    } else {
        // Show fallback options for desktop
        document.getElementById("fallbackShare").style.display = "block";
    }
}

// Secondary: Copy Link
function copyLink() {
    const copyBtn = document.getElementById("copyLinkBtn");
    const originalText = copyBtn.innerHTML;
    
    navigator.clipboard.writeText("https://meterlessbeaches.github.io/keep-beaches-free/").then(() => {
        copyBtn.innerHTML = "✅ Link copied!";
        copyBtn.style.background = "#27ae60";
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = "";
        }, 2000);
    }).catch(() => {
        copyBtn.innerHTML = "❌ Failed";
        copyBtn.style.background = "#e74c3c";
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = "";
        }, 2000);
    });
}

// Tertiary: Download QR Code
function downloadQR() {
    const link = document.createElement("a");
    link.href = "Meterless-beaches.png";
    link.download = "keep-beaches-free-qr.png";
    link.click();
}

// Fallback: Social Media Instructions
function shareToSocial(platform) {
    const campaignUrl = 'https://meterlessbeaches.github.io/keep-beaches-free/';
    const campaignText = 'Randwick Council wants to introduce parking meters at our beaches - effectively privatising public land and discriminating against families. Take action now!';
    
    let instructions = '';
    
    switch(platform) {
        case 'facebook':
            instructions = `
📘 FACEBOOK SHARING:

📋 BEST METHOD (Copy & Paste):
1. Click "� Copy link" button above
2. Go to Facebook and paste in a new post
3. Add this text: "${campaignText} ${campaignUrl}"

📱 ALTERNATIVE (QR Code):
1. Download the QR code below
2. Go to Facebook and upload as photo
3. Add the same campaign text

💡 TIP: The link method is fastest and works great!
`;
            break;
        case 'twitter':
            instructions = `
🐦 TWITTER SHARING:

📋 BEST METHOD (Copy & Paste):
1. Click "� Copy link" button above
2. Go to Twitter and paste in a new tweet
3. Add this text: "${campaignText} ${campaignUrl}"

📱 ALTERNATIVE (QR Code):
1. Download the QR code below
2. Go to Twitter and upload as image
3. Add the same campaign text

💡 TIP: Links work great on Twitter!
`;
            break;
        case 'whatsapp':
            instructions = `
💬 WHATSAPP SHARING:

📋 BEST METHOD (Copy & Paste):
1. Click "� Copy link" button above
2. Open WhatsApp and select contacts/groups
3. Paste the link directly
4. Add this message: "${campaignText}"

📱 ALTERNATIVE (QR Code):
1. Download the QR code below
2. Share the image directly in WhatsApp

💡 TIP: Perfect for friends and community groups!
`;
            break;
        case 'telegram':
            instructions = `
✈️ TELEGRAM SHARING:

📋 BEST METHOD (Copy & Paste):
1. Click "� Copy link" button above
2. Open Telegram and select channels/chats
3. Paste the link directly
4. Add this message: "${campaignText}"

📱 ALTERNATIVE (QR Code):
1. Download the QR code below
2. Share the image directly in Telegram

💡 TIP: Great for community channels!
`;
            break;
    }
    
    alert(instructions);
}
