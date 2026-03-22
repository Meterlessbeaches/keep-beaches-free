// ===================================
// EMAIL TEMPLATES AND CONTENT - EDIT THIS
// ===================================

// Email section headings and blurbs
const EMAIL_UI = {
    sections: {
        email: 'Ready to send your email?',
        preview: 'Email Preview'
    },
    
    preview: {
        to: 'To:',
        subject: 'Subject:',
        body: 'Message:'
    },
    
    buttons: {
        openEmail: 'Open email draft'
    },
    
    placeholders: {
        noEmail: 'No email address',
        noContent: '-'
    }
};

// Email content for each concern
const EMAIL_TEMPLATES = {
    // Custom subjects for each concern
    subjects: {
        access: 'Keep our beaches accessible for all Sydneysiders',
        families: 'Beach parking meters hurt Sydney families',
        streets: 'Beach parking meters will flood our streets',
        business: 'Beach parking meters threaten local businesses',
        alternatives: 'Better solutions than beach parking meters'
    },
    
    // Email greeting options
    greetings: {
        default: 'Dear {name},',
        formal: 'Dear {name},',
        friendly: 'Hi {name},'
    },
    
    // Email body content for each concern
    bodies: {
        access: `I am writing to express my strong opposition to the proposal to introduce paid parking meters at our beautiful eastern suburbs beaches.

These beaches should remain accessible and affordable for everyone - local residents and visitors from across Sydney alike. Our beaches are natural treasures that belong to the entire community. Introducing parking meters would create a significant barrier for families, seniors, and casual visitors who enjoy these public spaces, regardless of where they live in Sydney.

I urge you to reject this proposal and explore alternative solutions that maintain free beach access for all Sydneysiders.`,
        
        families: `I am writing to oppose the proposed beach parking meters, which would unfairly affect families and casual visitors from across Sydney.

Many families throughout Sydney rely on free beach parking for regular outings and recreational activities. The introduction of parking meters would place an unnecessary financial burden on households, potentially preventing children and families from enjoying these beautiful eastern suburbs beaches.

This proposal would disproportionately impact young families and those on fixed incomes, undermining the inclusive nature of our public beaches for all Sydneysiders.`,
        
        streets: `I am writing to express concerns about the proposed beach parking meters and their potential impact on nearby residential streets.

Rather than solving parking issues, this proposal may simply push parking pressure into surrounding residential streets, creating new problems for local residents. This could lead to increased congestion, reduced street parking availability, and tensions between beach visitors and residents.

I urge you to consider the broader community impact and explore solutions that don't displace parking problems into our neighborhoods.`,
        
        business: `I am writing to oppose the proposed beach parking meters due to concerns about their impact on local businesses and community use.

Our local cafes, restaurants, and shops rely on beach visitors for business. Introducing parking meters could deter visitors and negatively impact the local economy. Additionally, community groups, sports clubs, and regular beach users may be discouraged from using these important community spaces.

The long-term economic and social costs to our community could outweigh any short-term revenue gains.`,
        
        alternatives: `I am writing to oppose the current beach parking meter proposal and to express support for exploring alternative solutions.

While I understand parking management may be needed, I believe there are better approaches than introducing paid parking. I support exploring alternatives such as improved public transport options, timed parking restrictions, shuttle services, or other solutions that maintain beach accessibility.

I urge you to engage with the community to develop solutions that balance parking needs with keeping our beaches free and accessible for everyone.`
    },
    
    // Email closing options
    closings: {
        default: 'Kind regards,',
        formal: 'Yours sincerely,',
        friendly: 'Best regards,'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EMAIL_UI,
        EMAIL_TEMPLATES
    };
}
