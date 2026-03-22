// Coastal Postcodes within 10km of Sydney Coast
// Priority areas for beach parking campaign

const COASTAL_10KM_POSTCODES = {
    // Eastern Suburbs Beaches (0-5km from coast) - WE HAVE THESE
    '2031': { suburb: 'Randwick/Clovelly', status: 'COVERED', priority: 'HIGH' },
    '2032': { suburb: 'Kingsford', status: 'COVERED', priority: 'HIGH' },
    '2034': { suburb: 'Coogee', status: 'COVERED', priority: 'HIGH' },
    '2035': { suburb: 'Maroubra', status: 'COVERED', priority: 'HIGH' },
    '2036': { suburb: 'Little Bay/Malabar/La Perouse', status: 'COVERED', priority: 'HIGH' },
    
    // Eastern Suburbs Near Beach (5-10km) - WE HAVE THESE
    '2019': { suburb: 'Botany', status: 'COVERED', priority: 'HIGH' },
    '2020': { suburb: 'Mascot', status: 'MISSING', priority: 'HIGH' },
    '2021': { suburb: 'Paddington', status: 'COVERED', priority: 'HIGH' },
    '2022': { suburb: 'Bondi Junction', status: 'COVERED', priority: 'HIGH' },
    '2025': { suburb: 'Edgecliff', status: 'MISSING', priority: 'HIGH' },
    '2026': { suburb: 'Bondi', status: 'COVERED', priority: 'HIGH' },
    '2027': { suburb: 'Bondi Beach', status: 'MISSING', priority: 'HIGH' },
    '2028': { suburb: 'Double Bay', status: 'COVERED', priority: 'HIGH' },
    '2029': { suburb: 'Rose Bay', status: 'COVERED', priority: 'HIGH' },
    '2030': { suburb: 'Vaucluse', status: 'COVERED', priority: 'HIGH' },
    
    // Inner West Near Coast (5-10km) - PARTIALLY COVERED
    '2040': { suburb: 'Alexandria', status: 'MISSING', priority: 'MEDIUM' },
    '2041': { suburb: 'Balmain', status: 'COVERED', priority: 'HIGH' },
    '2042': { suburb: 'Newtown', status: 'COVERED', priority: 'MEDIUM' },
    '2043': { suburb: 'Erskineville', status: 'COVERED', priority: 'MEDIUM' },
    '2044': { suburb: 'Tempe/Sydenham', status: 'COVERED', priority: 'MEDIUM' },
    '2045': { suburb: 'Haberfield', status: 'COVERED', priority: 'MEDIUM' },
    '2046': { suburb: 'Five Dock', status: 'MISSING', priority: 'MEDIUM' },
    '2047': { suburb: 'Drummoyne', status: 'COVERED', priority: 'MEDIUM' },
    '2048': { suburb: 'Stanmore', status: 'COVERED', priority: 'MEDIUM' },
    '2049': { suburb: 'Petersham/Lewisham', status: 'COVERED', priority: 'MEDIUM' },
    '2050': { suburb: 'Camperdown', status: 'COVERED', priority: 'MEDIUM' },
    
    // Southern Sydney Coastal (0-10km) - PARTIALLY COVERED
    '2208': { suburb: 'Kogarah Bay', status: 'MISSING', priority: 'HIGH' },
    '2216': { suburb: 'Rockdale', status: 'COVERED', priority: 'HIGH' },
    '2217': { suburb: 'Kogarah', status: 'COVERED', priority: 'HIGH' },
    '2220': { suburb: 'Beverley Park', status: 'MISSING', priority: 'HIGH' },
    '2221': { suburb: 'Kogarah', status: 'MISSING', priority: 'HIGH' },
    '2222': { suburb: 'Allawah', status: 'MISSING', priority: 'HIGH' },
    '2223': { suburb: 'Carlton', status: 'MISSING', priority: 'HIGH' },
    '2224': { suburb: 'Blakehurst', status: 'MISSING', priority: 'HIGH' },
    '2225': { suburb: 'Carss Park', status: 'MISSING', priority: 'HIGH' },
    '2228': { suburb: 'Miranda', status: 'COVERED', priority: 'HIGH' },
    '2229': { suburb: 'Caringbah', status: 'COVERED', priority: 'HIGH' },
    '2230': { suburb: 'Cronulla', status: 'COVERED', priority: 'HIGH' },
    '2231': { suburb: 'Woolooware', status: 'MISSING', priority: 'HIGH' },
    '2232': { suburb: 'Gunnamatta', status: 'MISSING', priority: 'HIGH' },
    '2233': { suburb: 'Burraneer', status: 'MISSING', priority: 'HIGH' },
    '2234': { suburb: 'Bonnet Bay', status: 'MISSING', priority: 'HIGH' },
    
    // Northern Beaches (0-10km) - PARTIALLY COVERED
    '2090': { suburb: 'Manly', status: 'MISSING', priority: 'HIGH' },
    '2091': { suburb: 'Fairlight', status: 'MISSING', priority: 'HIGH' },
    '2092': { suburb: 'Manly', status: 'MISSING', priority: 'HIGH' },
    '2093': { suburb: 'Balgowlah', status: 'MISSING', priority: 'HIGH' },
    '2094': { suburb: 'Seaforth', status: 'MISSING', priority: 'HIGH' },
    '2095': { suburb: 'Manly', status: 'COVERED', priority: 'HIGH' },
    '2096': { suburb: 'Queenscliff', status: 'MISSING', priority: 'HIGH' },
    '2097': { suburb: 'North Manly', status: 'MISSING', priority: 'HIGH' },
    '2099': { suburb: 'Dee Why', status: 'COVERED', priority: 'HIGH' },
    '2100': { suburb: 'Collaroy', status: 'MISSING', priority: 'HIGH' },
    '2101': { suburb: 'Narrabeen', status: 'MISSING', priority: 'HIGH' },
    '2102': { suburb: 'Palm Beach', status: 'MISSING', priority: 'HIGH' },
    '2103': { suburb: 'Mona Vale', status: 'COVERED', priority: 'HIGH' },
    '2104': { suburb: 'Warriewood', status: 'MISSING', priority: 'HIGH' },
    '2105': { suburb: 'Elanora', status: 'MISSING', priority: 'HIGH' },
    '2106': { suburb: 'Clareville', status: 'MISSING', priority: 'HIGH' },
    '2107': { suburb: 'Avalon', status: 'MISSING', priority: 'HIGH' },
    '2108': { suburb: 'Newport', status: 'MISSING', priority: 'HIGH' },
    '2109': { suburb: 'Bilgola', status: 'MISSING', priority: 'HIGH' },
    
    // CBD/Harbour (0-10km) - COVERED
    '2000': { suburb: 'Sydney', status: 'COVERED', priority: 'HIGH' },
    '2007': { suburb: 'Darling Harbour', status: 'MISSING', priority: 'MEDIUM' },
    '2009': { suburb: 'Pyrmont', status: 'MISSING', priority: 'MEDIUM' },
    '2010': { suburb: 'Surry Hills/Darlinghurst', status: 'COVERED', priority: 'HIGH' },
    '2015': { suburb: 'Woolloomooloo', status: 'MISSING', priority: 'MEDIUM' },
    '2016': { suburb: 'Ultimo', status: 'MISSING', priority: 'MEDIUM' },
    '2017': { suburb: 'Darlinghurst', status: 'MISSING', priority: 'MEDIUM' },
    '2018': { suburb: 'Rosebery', status: 'MISSING', priority: 'MEDIUM' }
};

console.log('=== COASTAL 10KM ANALYSIS ===');
console.log('Total postcodes within 10km of coast:', Object.keys(COASTAL_10KM_POSTCODES).length);

const covered = Object.values(COASTAL_10KM_POSTCODES).filter(p => p.status === 'COVERED').length;
const missing = Object.values(COASTAL_10KM_POSTCODES).filter(p => p.status === 'MISSING').length;
const highPriority = Object.values(COASTAL_10KM_POSTCODES).filter(p => p.priority === 'HIGH').length;

console.log('Covered:', covered);
console.log('Missing:', missing);
console.log('High priority:', highPriority);
console.log('Coverage percentage:', Math.round((covered / (covered + missing)) * 100) + '%');
