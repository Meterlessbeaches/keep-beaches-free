// ===================================
// UPDATE FEDERAL MPS FROM AEC DATA
// ===================================

// Federal MP mapping (current as of 2024)
const FEDERAL_MP_MAPPING = {
    'Bennelong': { name: 'Jerome Laxale', email: 'jerome.laxale.mp@aph.gov.au', party: 'Labor' },
    'Banks': { name: 'David Coleman', email: 'david.coleman.mp@aph.gov.au', party: 'Liberal' },
    'Barton': { name: 'Anne Stanley', email: 'anne.stanley.mp@aph.gov.au', party: 'Labor' },
    'Bennelong': { name: 'Jerome Laxale', email: 'jerome.laxale.mp@aph.gov.au', party: 'Labor' },
    'Berowra': { name: 'Philip Ruddock', email: 'philip.ruddock.mp@aph.gov.au', party: 'Liberal' },
    'Blaxland': { name: 'Jason Clare', email: 'jason.clare.mp@aph.gov.au', party: 'Labor' },
    'Bradfield': { name: 'Paul Fletcher', email: 'paul.fletcher.mp@aph.gov.au', party: 'Liberal' },
    'Calare': { name: 'Andrew Gee', email: 'andrew.gee.mp@aph.gov.au', party: 'National' },
    'Chifley': { name: 'Ed Husic', email: 'ed.husic.mp@aph.gov.au', party: 'Labor' },
    'Cook': { name: 'Scott Morrison', email: 'scott.morrison.mp@aph.gov.au', party: 'Liberal' },
    'Cowper': { name: 'Pat Conroy', email: 'pat.conroy.mp@aph.gov.au', party: 'Labor' },
    'Cunningham': { name: 'Alison Byrnes', email: 'alison.byrnes.mp@aph.gov.au', party: 'Labor' },
    'Dobell': { name: 'Emma McBride', email: 'emma.mcbride.mp@aph.gov.au', party: 'Labor' },
    'Eden-Monaro': { name: 'Kristy McBain', email: 'kristy.mcbain.mp@aph.gov.au', party: 'Labor' },
    'Farrer': { name: 'Sussan Ley', email: 'sussan.ley.mp@aph.gov.au', party: 'Liberal' },
    'Fowler': { name: 'Dai Le', email: 'dai.le.mp@aph.gov.au', party: 'Independent' },
    'Gilmore': { name: 'Fiona Phillips', email: 'fiona.phillips.mp@aph.gov.au', party: 'Labor' },
    'Grayndler': { name: 'Anthony Albanese', email: 'anthony.albanese.mp@aph.gov.au', party: 'Labor' },
    'Greenway': { name: 'Michelle Rowland', email: 'michelle.rowland.mp@aph.gov.au', party: 'Labor' },
    'Hughes': { name: 'Jenny Ware', email: 'jenny.ware.mp@aph.gov.au', party: 'Liberal' },
    'Hume': { name: 'Angus Taylor', email: 'angus.taylor.mp@aph.gov.au', party: 'Liberal' },
    'Hunter': { name: 'Dan Repacholi', email: 'dan.repacholi.mp@aph.gov.au', party: 'Labor' },
    'Kingsford Smith': { name: 'Matt Thistlethwaite', email: 'matt.thistlethwaite.mp@aph.gov.au', party: 'Labor' },
    'Lindsay': { name: 'Anne Stanley', email: 'anne.stanley.mp@aph.gov.au', party: 'Labor' },
    'Lyons': { name: 'Brian Mitchell', email: 'brian.mitchell.mp@aph.gov.au', party: 'Labor' },
    'Macarthur': { name: 'Mike Freelander', email: 'mike.freelander.mp@aph.gov.au', party: 'Labor' },
    'Mackellar': { name: 'Sophie Scamps', email: 'sophie.scamps.mp@aph.gov.au', party: 'Teal Independent' },
    'Macquarie': { name: 'Susan Templeman', email: 'susan.templeman.mp@aph.gov.au', party: 'Labor' },
    'Macnamara': { name: 'Josh Burns', email: 'josh.burns.mp@aph.gov.au', party: 'Labor' },
    'McMahon': { name: 'Chris Bowen', email: 'chris.bowen.mp@aph.gov.au', party: 'Labor' },
    'Menzies': { name: 'Keith Wolahan', email: 'keith.wolahan.mp@aph.gov.au', party: 'Liberal' },
    'Mitchell': { name: 'Alex Hawke', email: 'alex.hawke.mp@aph.gov.au', party: 'Liberal' },
    'Newcastle': { name: 'Sharon Claydon', email: 'sharon.claydon.mp@aph.gov.au', party: 'Labor' },
    'North Sydney': { name: 'Kylea Tink', email: 'kylea.tink.mp@aph.gov.au', party: 'Teal Independent' },
    'Page': { name: 'Kevin Hogan', email: 'kevin.hogan.mp@aph.gov.au', party: 'National' },
    'Parkes': { name: 'Mark Coulton', email: 'mark.coulton.mp@aph.gov.au', party: 'National' },
    'Parramatta': { name: 'Andrew Charlton', email: 'andrew.charlton.mp@aph.gov.au', party: 'Labor' },
    'Paterson': { name: 'Meryl Swanson', email: 'meryl.swanson.mp@aph.gov.au', party: 'Labor' },
    'Reid': { name: 'Sally Sitou', email: 'sally.sitou.mp@aph.gov.au', party: 'Labor' },
    'Richmond': { name: 'Justine Elliot', email: 'justine.elliot.mp@aph.gov.au', party: 'Labor' },
    'Riverina': { name: 'Michael McCormack', email: 'michael.mccormack.mp@aph.gov.au', party: 'National' },
    'Robertson': { name: 'Gordon Reid', email: 'gordon.reid.mp@aph.gov.au', party: 'Labor' },
    'Ryan': { name: 'Elizabeth Watson-Brown', email: 'elizabeth.watson-brown.mp@aph.gov.au', party: 'Greens' },
    'Shortland': { name: 'Pat Conroy', email: 'pat.conroy.mp@aph.gov.au', party: 'Labor' },
    'Solomon': { name: 'Luke Gosling', email: 'luke.gosling.mp@aph.gov.au', party: 'Labor' },
    'Spicer': { name: 'Libby Coker', email: 'libby.coker.mp@aph.gov.au', party: 'Labor' },
    'Sydney': { name: 'Tanya Plibersek', email: 'tanya.plibersek.mp@aph.gov.au', party: 'Labor' },
    'Warringah': { name: 'Zali Steggall', email: 'zali.steggall.mp@aph.gov.au', party: 'Teal Independent' },
    'Watson': { name: 'Sam Crosby', email: 'sam.crosby.mp@aph.gov.au', party: 'Labor' },
    'Wentworth': { name: 'Allegra Spender', email: 'allegra.spender.mp@aph.gov.au', party: 'Teal Independent' },
    'Werriwa': { name: 'Anne Stanley', email: 'anne.stanley.mp@aph.gov.au', party: 'Labor' },
    'Whitlam': { name: 'Stephen Jones', email: 'stephen.jones.mp@aph.gov.au', party: 'Labor' },
    'Wills': { name: 'Peter Khalil', email: 'peter.khalil.mp@aph.gov.au', party: 'Labor' },
    'Wollongong': { name: 'Sharon Bird', email: 'sharon.bird.mp@aph.gov.au', party: 'Labor' },
    'Wright': { name: 'David Smith', email: 'david.smith.mp@aph.gov.au', party: 'Labor' }
};

// Function to process CSV and update federal MP mappings
function updateFederalMPsFromCSV() {
    const fs = require('fs');
    const csv = require('csv-parser');
    
    const postcodeToElectorate = new Map();
    
    // Read CSV and build postcode to electorate mapping
    fs.createReadStream('aec_postcode_electorate_data.csv')
        .pipe(csv())
        .on('data', (row) => {
            if (row.state === 'NSW') {
                const postcode = row.postcode;
                // Use redistributed electorate if available, otherwise use current electorate
                const electorate = row.redistributed || row.electorate;
                postcodeToElectorate.set(postcode, electorate);
            }
        })
        .on('end', () => {
            console.log(`Processed ${postcodeToElectorate.size} NSW postcodes`);
            
            // Generate updated config
            const updatedLocations = LOCATION_DATA.map(location => {
                const postcode = location.postcode;
                const electorate = postcodeToElectorate.get(postcode);
                
                if (electorate && FEDERAL_MP_MAPPING[electorate]) {
                    const federalMP = FEDERAL_MP_MAPPING[electorate];
                    return {
                        ...location,
                        federalMP: {
                            name: federalMP.name,
                            email: federalMP.email
                        }
                    };
                }
                
                return location;
            });
            
            // Write updated config
            const updatedConfig = `// ===================================
// CAMPAIGN CONFIGURATION
// ===================================

// Page content - EDIT THIS
const PAGE_CONTENT = {
    title: 'Keep Maroubra Area Beaches Free',
    heroIntro: 'Randwick Council wants to introduce parking meters at our beaches - effectively privatising public land and discriminating against families who must drive to enjoy the coast. This threatens beach access for all Sydneysiders. Take action now before the deadline.',
    deadline: '5pm, April 15, 2026',
    disclaimer: 'This is a community campaign page, not an official council page.',
    locationIntro: 'Select your suburb to see who you can contact:'
};

// Official submission URL - UPDATE THIS
const OFFICIAL_SUBMISSION_URL = 'https://www.yoursay.randwick.nsw.gov.au/visitorpayparking';

// Location data structure - COMPLETE SYDNEY METROPOLITAN COVERAGE
const LOCATION_DATA = ${JSON.stringify(updatedLocations, null, 4)};

// ===================================
// EMAIL TEMPLATES
// ===================================

const EMAIL_TEMPLATES = {
    access: {
        greeting: 'Dear {name},',
        body: 'I am writing to express my strong opposition to Randwick Council\\'s proposal to introduce parking meters at our beaches. This plan would effectively privatise public land and discriminate against families who must drive to enjoy the coast. Beach access should remain affordable and accessible to all Sydneysiders, not just those who can afford expensive parking fees. I urge you to intervene and stop this proposal that threatens our community\\'s right to enjoy our beautiful beaches.',
        closing: 'Yours sincerely,\\n\\n[Your Name]\\nConcerned resident'
    },
    families: {
        greeting: 'Dear {name},',
        body: 'I am deeply concerned about Randwick Council\\'s proposal to introduce parking meters at our beaches. This policy would unfairly impact families and casual visitors who rely on affordable beach access. Many families budget carefully for beach outings, and parking meters would make these precious family moments unaffordable for many. This is essentially a tax on families enjoying our natural heritage. I ask you to stand with ordinary families and oppose this discriminatory proposal.',
        closing: 'Yours sincerely,\\n\\n[Your Name]\\nConcerned parent'
    },
    streets: {
        greeting: 'Dear {name},',
        body: 'I am writing about Randwick Council\\'s beach parking meter proposal and my concerns about the unintended consequences. While I understand the council\\'s motivations, I believe this will simply push parking pressure into nearby residential streets, creating new problems for local residents. This doesn\\'t solve parking issues - it just moves them elsewhere and creates traffic congestion in our neighborhoods. I urge you to consider alternative solutions that don\\'t displace problems into our communities.',
        closing: 'Yours sincerely,\\n\\n[Your Name]\\nConcerned resident'
    },
    business: {
        greeting: 'Dear {name},',
        body: 'I am concerned about the negative impact that beach parking meters would have on local businesses and community life. Our beachside businesses rely on visitor traffic, and expensive parking would deter customers and harm the local economy. Beach access is essential for community wellbeing and local prosperity. This proposal risks damaging the vibrant community life that makes our area special. I ask you to consider the economic harm this would cause and oppose these short-sighted parking plans.',
        closing: 'Yours sincerely,\\n\\n[Your Name]\\nConcerned resident'
    },
    alternatives: {
        greeting: 'Dear {name},',
        body: 'I am writing to propose alternative solutions to Randwick Council\\'s beach parking proposal. Instead of installing parking meters that would exclude many residents, I suggest we explore options like improved public transport to beaches, timed parking restrictions during peak periods, better park-and-ride facilities, or smart parking management that doesn\\'t rely on punitive pricing. There are better ways to manage beach access that don\\'t discriminate against families and casual visitors. I urge you to support more inclusive and community-friendly solutions.',
        closing: 'Yours sincerely,\\n\\n[Your Name]\\nConcerned resident'
    }
};
`;
            
            fs.writeFileSync('config_updated.js', updatedConfig);
            console.log('Updated config written to config_updated.js');
        });
}

// If running in Node.js environment
if (typeof require !== 'undefined') {
    updateFederalMPsFromCSV();
} else {
    console.log('This script needs to be run with Node.js to process the CSV file');
}
