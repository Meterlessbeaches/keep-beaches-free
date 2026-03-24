// ===================================
// VERIFY FEDERAL MP MAPPINGS
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

// Key postcode to electorate mappings (from AEC data)
const POSTCODE_TO_ELECTORATE = {
    // Eastern Suburbs
    '2026': 'Wentworth',        // Bondi Beach, Bondi, North Bondi, Tamarama
    '2027': 'Sydney',           // Edgecliff, Darling Point
    '2034': 'Kingsford Smith',  // Coogee, South Coogee
    '2035': 'Kingsford Smith',  // Maroubra, Maroubra Beach, Maroubra Junction, Maroubra Bay
    '2036': 'Kingsford Smith',  // La Perouse, Chifley
    
    // Inner West
    '2040': 'Grayndler',        // Alexandria
    '2041': 'Grayndler',        // Balmain
    '2042': 'Grayndler',        // Newtown, Enmore
    '2043': 'Grayndler',        // Erskineville
    '2044': 'Grayndler',        // St Peters
    '2045': 'Reid',             // Tempe
    '2046': 'Reid',             // Five Dock
    '2047': 'Reid',             // Concord
    '2048': 'Reid',             // Cabarita
    '2049': 'Reid',             // Wareemba
    '2050': 'Bennelong',        // Homebush
    '2055': 'Grayndler',        // Camperdown
    '2006': 'Sydney',           // Redfern
    '2007': 'Sydney',           // Ultimo
    '2008': 'Sydney',           // Chippendale
    '2009': 'Sydney',           // Pyrmont
    '2010': 'Sydney',           // Surry Hills
    '2011': 'Sydney',           // Darlinghurst
    '2015': 'Sydney',           // Waterloo
    '2016': 'Sydney',           // Zetland
    '2017': 'Wentworth',        // Paddington
    '2018': 'Wentworth',        // Moore Park
    '2019': 'Kingsford Smith',  // Botany
    '2020': 'Kingsford Smith',  // Mascot
    '2021': 'Wentworth',        // Centennial Park
    '2022': 'Wentworth',        // Bondi Junction, Queens Park
    '2023': 'Wentworth',        // Bellevue Hill
    '2024': 'Wentworth',        // Bronte
    '2025': 'Wentworth',        // Woollahra
    
    // Northern Beaches
    '2090': 'Mackellar',        // Dee Why, Collaroy Plateau
    '2091': 'Mackellar',        // Cromer, Collaroy
    '2092': 'Mackellar',        // Narraweena
    '2093': 'Warringah',        // Balgowlah, Balgowlah Heights, Clontarf, Manly Vale, North Balgowlah
    '2094': 'Warringah',        // Fairlight
    '2095': 'Warringah',        // Manly, North Head
    '2096': 'Warringah',        // Curl Curl, Freshwater, Harbord
    '2097': 'Warringah',        // Dee Why
    '2098': 'Warringah',        // Brookvale
    '2099': 'Warringah',        // Frenchs Forest
    '2100': 'Mackellar',        // Collaroy, Narrabeen
    '2101': 'Mackellar',        // Mona Vale, Warriewood
    '2102': 'Mackellar',        // Bayview
    '2103': 'Mackellar',        // Church Point
    '2104': 'Mackellar',        // Elanora Heights
    '2105': 'Mackellar',        // Ingleside
    '2106': 'Mackellar',        // McCarrs Creek
    '2107': 'Mackellar',        // Scotland Island
    '2108': 'Mackellar',        // Newport
    '2109': 'Mackellar',        // Avalon Beach, Bilgola Plateau
    '2110': 'Mackellar',        // Palm Beach
    '2111': 'Mackellar',        // Whale Beach
    '2112': 'Mackellar',        // Careel Bay
    '2113': 'Mackellar',        // Palm Beach
    
    // Sydney CBD
    '2000': 'Sydney',           // Sydney CBD (also some Grayndler)
    '2001': 'Sydney',           // Sydney
    '2002': 'Sydney',           // Sydney
    '2003': 'Sydney',           // Sydney
    '2004': 'Sydney',           // Sydney
    
    // Western Sydney
    '2150': 'Parramatta',       // Parramatta
    '2151': 'Parramatta',       // North Parramatta
    '2152': 'Parramatta',       // Northmead
    '2153': 'Parramatta',       // Wentworthville
    '2154': 'Parramatta',       // Winston Hills
    '2155': 'Greenway',         // Guildford
    '2156': 'Greenway',         // Merrylands
    '2157': 'Greenway',         // Guildford West
    '2158': 'Greenway',         // Granville
    '2159': 'Greenway',         // Granville East
    '2160': 'Greenway',         // Clyde
    '2161': 'Greenway',         // Auburn
    '2162': 'Greenway',         // Auburn South
    '2163': 'Greenway',         // Regents Park
    '2164': 'Greenway',         // Berala
    '2165': 'Greenway',         // Lidcombe
    '2166': 'Greenway',         // Silverwater
    '2167': 'Greenway',         // Newington
    '2168': 'Greenway',         // Wentworth Point
    '2169': 'Greenway',         // Homebush West
    '2170': 'Greenway',         // Flemington
    '2171': 'Greenway',         // Lidcombe
    '2172': 'Greenway',         // Olympic Park
    '2173': 'Greenway',         // Sydney Olympic Park
    '2174': 'Greenway',         // Lidcombe
    '2175': 'Greenway',         // Lidcombe
    '2176': 'Greenway',         // Lidcombe
};

// Function to verify federal MP mappings
function verifyFederalMPs() {
    console.log('=== FEDERAL MP VERIFICATION ===\n');
    
    const corrections = [];
    const verified = [];
    const errors = [];
    
    LOCATION_DATA.forEach(location => {
        const postcode = location.postcode;
        const suburb = location.suburb;
        const currentFederalMP = location.federalMP;
        
        // Get correct electorate from AEC data
        const correctElectorate = POSTCODE_TO_ELECTORATE[postcode];
        
        if (correctElectorate && FEDERAL_MP_MAPPING[correctElectorate]) {
            const correctMP = FEDERAL_MP_MAPPING[correctElectorate];
            
            // Check if current mapping is correct
            const isCorrect = currentFederalMP.name === correctMP.name;
            
            if (isCorrect) {
                verified.push({
                    suburb,
                    postcode,
                    electorate: correctElectorate,
                    current: currentFederalMP.name,
                    correct: correctMP.name,
                    status: 'CORRECT'
                });
            } else {
                corrections.push({
                    suburb,
                    postcode,
                    electorate: correctElectorate,
                    current: currentFederalMP.name,
                    correct: correctMP.name,
                    correctEmail: correctMP.email,
                    status: 'NEEDS CORRECTION'
                });
            }
        } else {
            errors.push({
                suburb,
                postcode,
                current: currentFederalMP.name,
                status: 'NO AEC DATA FOUND'
            });
        }
    });
    
    // Display results
    console.log('CORRECTIONS NEEDED:');
    corrections.forEach(item => {
        console.log(`${item.status} ${item.suburb} (${item.postcode})`);
        console.log(`  Current: ${item.current}`);
        console.log(`  Should be: ${item.correct} (${item.electorate})`);
        console.log(`  Email: ${item.correctEmail}\n`);
    });
    
    console.log('VERIFIED CORRECT:');
    verified.forEach(item => {
        console.log(`${item.status} ${item.suburb} (${item.postcode})`);
        console.log(`  ${item.current} (${item.electorate})\n`);
    });
    
    console.log('ERRORS:');
    errors.forEach(item => {
        console.log(`${item.status} ${item.suburb} (${item.postcode})`);
        console.log(`  ${item.current}\n`);
    });
    
    console.log(`SUMMARY:`);
    console.log(`- Total locations: ${LOCATION_DATA.length}`);
    console.log(`- Correct: ${verified.length}`);
    console.log(`- Need correction: ${corrections.length}`);
    console.log(`- Errors: ${errors.length}`);
    
    return { corrections, verified, errors };
}

// Run verification
if (typeof LOCATION_DATA !== 'undefined') {
    const results = verifyFederalMPs();
    
    // Generate corrected config if needed
    if (results.corrections.length > 0) {
        console.log('\n=== GENERATING CORRECTED CONFIG ===');
        
        const correctedLocations = LOCATION_DATA.map(location => {
            const postcode = location.postcode;
            const correctElectorate = POSTCODE_TO_ELECTORATE[postcode];
            
            if (correctElectorate && FEDERAL_MP_MAPPING[correctElectorate]) {
                const correctMP = FEDERAL_MP_MAPPING[correctElectorate];
                
                // Check if correction is needed
                if (location.federalMP.name !== correctMP.name) {
                    return {
                        ...location,
                        federalMP: {
                            name: correctMP.name,
                            email: correctMP.email
                        }
                    };
                }
            }
            
            return location;
        });
        
        console.log('Corrected locations generated. Update config.js with these mappings.');
    }
} else {
    console.log('LOCATION_DATA not available. Run this after loading config.js');
}
