// ===================================
// PROCESS FEDERAL ELECTORATE DATA
// ===================================

// Federal MP mapping (current as of 2024)
const FEDERAL_MP_MAPPING = {
    'Bennelong': { name: 'Jerome Laxale', email: 'jerome.laxale.mp@aph.gov.au', party: 'Labor' },
    'Banks': { name: 'David Coleman', email: 'david.coleman.mp@aph.gov.au', party: 'Liberal' },
    'Barton': { name: 'Anne Stanley', email: 'anne.stanley.mp@aph.gov.au', party: 'Labor' },
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

// Function to parse CSV and create postcode to electorate mapping
function parseCSVData(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const postcodeToElectorate = new Map();
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Handle CSV with quoted fields
        const fields = [];
        let current = '';
        let inQuotes = false;
        
        for (let char of line) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                fields.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        fields.push(current.trim());
        
        if (fields[0] === 'NSW') {
            const postcode = fields[2];
            const electorate = fields[4] || fields[3]; // Use redistributed if available
            if (postcode && electorate) {
                postcodeToElectorate.set(postcode, electorate);
            }
        }
    }
    
    return postcodeToElectorate;
}

// Function to update federal MPs in LOCATION_DATA
function updateFederalMPs() {
    // Read the CSV file (this would need to be done server-side or with a file input)
    fetch('aec_postcode_electorate_data.csv')
        .then(response => response.text())
        .then(csvText => {
            const postcodeToElectorate = parseCSVData(csvText);
            console.log(`Processed ${postcodeToElectorate.size} NSW postcodes`);
            
            // Update LOCATION_DATA with correct federal MPs
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
            
            // Log some examples
            console.log('Updated federal MP examples:');
            updatedLocations
                .filter(loc => ['2035', '2026', '2095', '2000'].includes(loc.postcode))
                .forEach(loc => {
                    console.log(`${loc.suburb} (${loc.postcode}): ${loc.federalMP.name}`);
                });
            
            return updatedLocations;
        })
        .catch(error => console.error('Error processing CSV:', error));
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateFederalMPs, FEDERAL_MP_MAPPING };
}
