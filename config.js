// ===================================
// CAMPAIGN CONFIGURATION
// ===================================

// Page content - EDIT THIS
const PAGE_CONTENT = {
    title: 'Keep Our Beaches Free',
    heroIntro: 'Parking meters are being proposed for our beautiful eastern suburbs beaches. This page helps everyone who loves these beaches - locals and visitors from across Sydney - respond to the proposal and contact decision makers.',
    deadline: '5pm, April 15, 2026',
    disclaimer: 'This is a community campaign page, not an official council page.',
    locationIntro: 'Whether you\'re a local resident or visiting from anywhere in Sydney, enter your postcode or select your suburb to see who you can contact:'
};

// Official submission URL - UPDATE THIS
const OFFICIAL_SUBMISSION_URL = 'https://www.yoursay.randwick.nsw.gov.au/visitorpayparking';

// Location data structure - EDIT THIS
const LOCATION_DATA = [
    // Eastern Suburbs (Beach areas)
    {
        suburb: 'Coogee',
        postcode: '2034',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Maroubra',
        postcode: '2035',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Michael Daley',
            email: 'maroubra@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Clovelly',
        postcode: '2031',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Randwick',
        postcode: '2031',
        ward: 'Central Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Ron Hoenig',
            email: 'heffron@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Kingsford',
        postcode: '2032',
        ward: 'Central Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Ron Hoenig',
            email: 'heffron@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Little Bay',
        postcode: '2036',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Malabar',
        postcode: '2036',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'La Perouse',
        postcode: '2036',
        ward: 'Bayside Ward',
        council: {
            name: 'Randwick City Council',
            email: 'council@randwick.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    
    // Inner West Sydney
    {
        suburb: 'Newtown',
        postcode: '2042',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Enmore',
        postcode: '2042',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Camperdown',
        postcode: '2050',
        ward: 'N/A',
        council: {
            name: 'City of Sydney',
            email: 'council@cityofsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Erskineville',
        postcode: '2043',
        ward: 'N/A',
        council: {
            name: 'City of Sydney',
            email: 'council@cityofsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Stanmore',
        postcode: '2048',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Petersham',
        postcode: '2049',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Lewisham',
        postcode: '2049',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Summer Hill',
        postcode: '2130',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jo Haylen',
            email: 'summerhill@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Balmain',
        postcode: '2041',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Kobi Shetty',
            email: 'balmain@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Rozelle',
        postcode: '2039',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Kobi Shetty',
            email: 'balmain@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Haberfield',
        postcode: '2045',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jo Haylen',
            email: 'summerhill@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Jason Clare',
            email: 'jason.clare.mp@aph.gov.au'
        }
    },
    
    // Sydney CBD and Surrounds
    {
        suburb: 'Sydney',
        postcode: '2000',
        ward: 'N/A',
        council: {
            name: 'City of Sydney',
            email: 'council@cityofsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Surry Hills',
        postcode: '2010',
        ward: 'N/A',
        council: {
            name: 'City of Sydney',
            email: 'council@cityofsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Darlinghurst',
        postcode: '2010',
        ward: 'N/A',
        council: {
            name: 'City of Sydney',
            email: 'council@cityofsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Paddington',
        postcode: '2021',
        ward: 'N/A',
        council: {
            name: 'Woollahra Municipal Council',
            email: 'council@woollahra.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Bondi',
        postcode: '2026',
        ward: 'N/A',
        council: {
            name: 'Waverley Council',
            email: 'council@waverley.nsw.gov.au'
        },
        stateMP: {
            name: 'Michael Daley',
            email: 'maroubra@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Bondi Junction',
        postcode: '2022',
        ward: 'N/A',
        council: {
            name: 'Waverley Council',
            email: 'council@waverley.nsw.gov.au'
        },
        stateMP: {
            name: 'Michael Daley',
            email: 'maroubra@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Rose Bay',
        postcode: '2029',
        ward: 'N/A',
        council: {
            name: 'Woollahra Municipal Council',
            email: 'council@woollahra.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Double Bay',
        postcode: '2028',
        ward: 'N/A',
        council: {
            name: 'Woollahra Municipal Council',
            email: 'council@woollahra.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Vaucluse',
        postcode: '2030',
        ward: 'N/A',
        council: {
            name: 'Woollahra Municipal Council',
            email: 'council@woollahra.nsw.gov.au'
        },
        stateMP: {
            name: 'Alex Greenwich',
            email: 'sydney@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    
    // Inner South Sydney
    {
        suburb: 'Marrickville',
        postcode: '2204',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Sophie Cotsis',
            email: 'canterbury@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Dulwich Hill',
        postcode: '2203',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Sophie Cotsis',
            email: 'canterbury@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Tempe',
        postcode: '2044',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Sydenham',
        postcode: '2044',
        ward: 'N/A',
        council: {
            name: 'Inner West Council',
            email: 'council@innerwest.nsw.gov.au'
        },
        stateMP: {
            name: 'Jenny Leong',
            email: 'newtown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anthony Albanese',
            email: 'anthony.albanese.mp@aph.gov.au'
        }
    },
    
    // Southern Sydney
    {
        suburb: 'Kogarah',
        postcode: '2217',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
        },
        stateMP: {
            name: 'Chris Minns',
            email: 'kogarah@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Rockdale',
        postcode: '2216',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
        },
        stateMP: {
            name: 'Chris Minns',
            email: 'kogarah@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Bexley',
        postcode: '2207',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
        },
        stateMP: {
            name: 'Chris Minns',
            email: 'kogarah@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Miranda',
        postcode: '2228',
        ward: 'N/A',
        council: {
            name: 'Sutherland Shire Council',
            email: 'council@sutherland.nsw.gov.au'
        },
        stateMP: {
            name: 'Mark Speakman',
            email: 'cronulla@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Cronulla',
        postcode: '2230',
        ward: 'N/A',
        council: {
            name: 'Sutherland Shire Council',
            email: 'council@sutherland.nsw.gov.au'
        },
        stateMP: {
            name: 'Mark Speakman',
            email: 'cronulla@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
        }
    },
    
    // Canterbury-Bankstown
    {
        suburb: 'Bankstown',
        postcode: '2200',
        ward: 'N/A',
        council: {
            name: 'Canterbury-Bankstown Council',
            email: 'council@cbcity.nsw.gov.au'
        },
        stateMP: {
            name: 'Jihad Dib',
            email: 'bankstown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Aly',
            email: 'anne.aly.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Lakemba',
        postcode: '2195',
        ward: 'N/A',
        council: {
            name: 'Canterbury-Bankstown Council',
            email: 'council@cbcity.nsw.gov.au'
        },
        stateMP: {
            name: 'Jihad Dib',
            email: 'bankstown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Aly',
            email: 'anne.aly.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Canterbury',
        postcode: '2193',
        ward: 'N/A',
        council: {
            name: 'Canterbury-Bankstown Council',
            email: 'council@cbcity.nsw.gov.au'
        },
        stateMP: {
            name: 'Sophie Cotsis',
            email: 'canterbury@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tony Burke',
            email: 'tony.burke.mp@aph.gov.au'
        }
    },
    
    // Northern Sydney
    {
        suburb: 'Chatswood',
        postcode: '2067',
        ward: 'N/A',
        council: {
            name: 'Willoughby City Council',
            email: 'council@willoughby.nsw.gov.au'
        },
        stateMP: {
            name: 'Tim James',
            email: 'willoughby@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'North Sydney',
        postcode: '2060',
        ward: 'N/A',
        council: {
            name: 'North Sydney Council',
            email: 'council@northsydney.nsw.gov.au'
        },
        stateMP: {
            name: 'Felicity Wilson',
            email: 'northshore@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Kylea Tink',
            email: 'kylea.tink.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Mosman',
        postcode: '2088',
        ward: 'N/A',
        council: {
            name: 'Mosman Council',
            email: 'council@mosman.nsw.gov.au'
        },
        stateMP: {
            name: 'Felicity Wilson',
            email: 'northshore@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Kylea Tink',
            email: 'kylea.tink.mp@aph.gov.au'
        }
    },
    
    // Northern Beaches
    {
        suburb: 'Manly',
        postcode: '2095',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'James Griffin',
            email: 'manly@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Dee Why',
        postcode: '2099',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'James Griffin',
            email: 'manly@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    
    // Western Sydney
    {
        suburb: 'Parramatta',
        postcode: '2150',
        ward: 'N/A',
        council: {
            name: 'City of Parramatta Council',
            email: 'council@parramatta.nsw.gov.au'
        },
        stateMP: {
            name: 'Donna Davis',
            email: 'parramatta@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Andrew Charlton',
            email: 'andrew.charlton.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Blacktown',
        postcode: '2148',
        ward: 'N/A',
        council: {
            name: 'Blacktown City Council',
            email: 'council@blacktown.nsw.gov.au'
        },
        stateMP: {
            name: 'Stephen Bali',
            email: 'blacktown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Michelle Rowland',
            email: 'michelle.rowland.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Liverpool',
        postcode: '2170',
        ward: 'N/A',
        council: {
            name: 'Liverpool City Council',
            email: 'council@liverpool.nsw.gov.au'
        },
        stateMP: {
            name: 'Warren Kirby',
            email: 'riverstone@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Stanley',
            email: 'anne.stanley.mp@aph.gov.au'
        }
    },
    
    // Hills District
    {
        suburb: 'Castle Hill',
        postcode: '2154',
        ward: 'N/A',
        council: {
            name: 'Hornsby Shire Council',
            email: 'council@hornsby.nsw.gov.au'
        },
        stateMP: {
            name: 'Ray Williams',
            email: 'castlehill@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Alex Hawke',
            email: 'alex.hawke.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Rouse Hill',
        postcode: '2155',
        ward: 'N/A',
        council: {
            name: 'The Hills Shire Council',
            email: 'council@thehills.nsw.gov.au'
        },
        stateMP: {
            name: 'Ray Williams',
            email: 'castlehill@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Alex Hawke',
            email: 'alex.hawke.mp@aph.gov.au'
        }
    },
    
    // Macarthur/Campbelltown
    {
        suburb: 'Campbelltown',
        postcode: '2560',
        ward: 'N/A',
        council: {
            name: 'Campbelltown City Council',
            email: 'council@campbelltown.nsw.gov.au'
        },
        stateMP: {
            name: 'Greg Warren',
            email: 'campbelltown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Mike Freelander',
            email: 'mike.freelander.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Narellan',
        postcode: '2567',
        ward: 'N/A',
        council: {
            name: 'Campbelltown City Council',
            email: 'council@campbelltown.nsw.gov.au'
        },
        stateMP: {
            name: 'Greg Warren',
            email: 'campbelltown@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Mike Freelander',
            email: 'mike.freelander.mp@aph.gov.au'
        }
    }
];

// Email templates - EDIT THIS
const EMAIL_TEMPLATES = {
    subject: 'Opposition to proposed beach parking meters',
    
    access: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong opposition to the proposal to introduce paid parking meters at our beautiful eastern suburbs beaches.

These beaches should remain accessible and affordable for everyone - local residents and visitors from across Sydney alike. Our beaches are natural treasures that belong to the entire community. Introducing parking meters would create a significant barrier for families, seniors, and casual visitors who enjoy these public spaces, regardless of where they live in Sydney.

I urge you to reject this proposal and explore alternative solutions that maintain free beach access for all Sydneysiders.`,
        closing: 'Kind regards,'
    },
    
    families: {
        greeting: 'Dear {name},',
        body: `I am writing to oppose the proposed beach parking meters, which would unfairly affect families and casual visitors from across Sydney.

Many families throughout Sydney rely on free beach parking for regular outings and recreational activities. The introduction of parking meters would place an unnecessary financial burden on households, potentially preventing children and families from enjoying these beautiful eastern suburbs beaches.

This proposal would disproportionately impact young families and those on fixed incomes, undermining the inclusive nature of our public beaches for all Sydneysiders.`,
        closing: 'Kind regards,'
    },
    
    streets: {
        greeting: 'Dear {name},',
        body: `I am writing to express concerns about the proposed beach parking meters and their potential impact on nearby residential streets.

Rather than solving parking issues, this proposal may simply push parking pressure into surrounding residential streets, creating new problems for local residents. This could lead to increased congestion, reduced street parking availability, and tensions between beach visitors and residents.

I urge you to consider the broader community impact and explore solutions that don't displace parking problems into our neighborhoods.`,
        closing: 'Kind regards,'
    },
    
    business: {
        greeting: 'Dear {name},',
        body: `I am writing to oppose the proposed beach parking meters due to concerns about their impact on local businesses and community use.

Our local cafes, restaurants, and shops rely on beach visitors for business. Introducing parking meters could deter visitors and negatively impact the local economy. Additionally, community groups, sports clubs, and regular beach users may be discouraged from using these important community spaces.

The long-term economic and social costs to our community could outweigh any short-term revenue gains.`,
        closing: 'Kind regards,'
    },
    
    alternatives: {
        greeting: 'Dear {name},',
        body: `I am writing to oppose the current beach parking meter proposal and to express support for exploring alternative solutions.

While I understand parking management may be needed, I believe there are better approaches than introducing paid parking. I support exploring alternatives such as improved public transport options, timed parking restrictions, shuttle services, or other solutions that maintain beach accessibility.

I urge you to engage with the community to develop solutions that balance parking needs with keeping our beaches free and accessible for everyone.`,
        closing: 'Kind regards,'
    }
};

