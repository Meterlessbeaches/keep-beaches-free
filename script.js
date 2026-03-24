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
    officialSubmissionBtn: document.getElementById('official-submission-btn'),
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
    // Update page title
    document.getElementById('page-title').textContent = PAGE_CONTENT.title;
    document.title = PAGE_CONTENT.title;
    
    // Update hero intro
    document.getElementById('hero-intro').textContent = PAGE_CONTENT.heroIntro;
    
    // Update deadline
    document.getElementById('deadline').textContent = PAGE_CONTENT.deadline;
    
    // Update disclaimer
    document.getElementById('disclaimer').innerHTML = `<em>${PAGE_CONTENT.disclaimer}</em>`;
    
    // Update location intro
    document.getElementById('location-intro').textContent = PAGE_CONTENT.locationIntro;
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
    elements.officialSubmissionBtn.addEventListener('click', handleOfficialSubmission);
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

function handleOfficialSubmission() {
    window.open(OFFICIAL_SUBMISSION_URL, '_blank');
}

function handleEmailAction() {
    // Hide official submission button during email workflow
    const officialSubmissionBtn = document.getElementById('official-submission-btn');
    if (officialSubmissionBtn) {
        officialSubmissionBtn.classList.add('hide-official-submission');
    }
    
    // Show location section
    elements.locationSection.style.display = 'block';
    elements.emailActionBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
}

function handleOpenEmail() {
    if (!selectedRecipient || !selectedConcern) {
        alert('Please select a recipient and concern first.');
        return;
    }
    
    const emailData = generateEmail();
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    
    window.location.href = mailtoLink;
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
        <div class="result-card" data-recipient="council">
            <div class="result-title">🏢 ${location.council.name}</div>
        </div>
        <div class="result-card" data-recipient="state">
            <div class="result-title">🏛️ State MP: ${location.stateMP.name}</div>
        </div>
        <div class="result-card" data-recipient="federal">
            <div class="result-title">🏛️ Federal MP: ${location.federalMP.name}</div>
        </div>
    `;
    
    elements.locationResults.innerHTML = resultsHTML;
    elements.locationResults.style.display = 'block';
    
    // Add click handlers to result cards
    elements.locationResults.querySelectorAll('.result-card').forEach(card => {
        card.addEventListener('click', handleRecipientSelect);
    });
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
    
    // Show concern section
    elements.concernSection.style.display = 'block';
    elements.concernSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===================================
// EMAIL GENERATION
// ===================================

function generateEmail() {
    const template = EMAIL_TEMPLATES[selectedConcern];
    let recipientEmail = '';
    let recipientName = '';
    
    switch (selectedRecipient) {
        case 'council':
            recipientEmail = selectedLocation.council.email;
            recipientName = 'Randwick City Council';
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
