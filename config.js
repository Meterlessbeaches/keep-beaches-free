// ===================================
// CAMPAIGN CONFIGURATION
// ===================================

// Page content - EDIT THIS
const PAGE_CONTENT = {
    title: 'Keep Our Beaches Free',
    heroIntro: 'Randwick Council wants to introduce parking meters at our beaches - effectively privatising public land and discriminating against families who must drive to enjoy the coast. This threatens beach access for all Sydneysiders. Take action now before the deadline.',
    deadline: '5pm, April 15, 2026',
    disclaimer: 'This is a community campaign page, not an official council page.',
    locationIntro: 'Whether you\'re a local resident or visiting from anywhere in Sydney, enter your postcode or select your suburb to see who you can contact:'
};

// Official submission URL - UPDATE THIS
const OFFICIAL_SUBMISSION_URL = 'https://www.yoursay.randwick.nsw.gov.au/visitorpayparking';

// Location data structure - COMPLETE SYDNEY METROPOLITAN COVERAGE
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
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
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
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
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
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
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
    {
        suburb: 'Botany',
        postcode: '2019',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
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
        suburb: 'Mascot',
        postcode: '2020',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
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
        suburb: 'Edgecliff',
        postcode: '2025',
        ward: 'N/A',
        council: {
            name: 'Woollahra Municipal Council',
            email: 'council@woollahra.nsw.gov.au'
        },
        stateMP: {
            name: 'Kellie Sloane',
            email: 'vaucluse@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
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
        suburb: 'Alexandria',
        postcode: '2040',
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
        suburb: 'Five Dock',
        postcode: '2046',
        ward: 'N/A',
        council: {
            name: 'City of Canada Bay Council',
            email: 'council@canadabay.nsw.gov.au'
        },
        stateMP: {
            name: 'Stephanie Di Pasqua',
            email: 'drummoyne@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Sally Sitou',
            email: 'sally.sitou.mp@aph.gov.au'
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
        suburb: 'Marrickville',
        postcode: '2204',
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
        suburb: 'Dulwich Hill',
        postcode: '2203',
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
        suburb: 'Tempe',
        postcode: '2044',
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
        suburb: 'Sydenham',
        postcode: '2044',
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
        suburb: 'Burwood',
        postcode: '2134',
        ward: 'N/A',
        council: {
            name: 'Burwood Council',
            email: 'council@burwood.nsw.gov.au'
        },
        stateMP: {
            name: 'Jason Yat-Sen Li',
            email: 'strathfield@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Sally Sitou',
            email: 'sally.sitou.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Strathfield',
        postcode: '2135',
        ward: 'N/A',
        council: {
            name: 'Strathfield Council',
            email: 'council@strathfield.nsw.gov.au'
        },
        stateMP: {
            name: 'Jason Yat-Sen Li',
            email: 'strathfield@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Jason Clare',
            email: 'jason.clare.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Ryde',
        postcode: '2112',
        ward: 'N/A',
        council: {
            name: 'City of Ryde',
            email: 'council@ryde.nsw.gov.au'
        },
        stateMP: {
            name: 'Jordan Lane',
            email: 'ryde@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Jerome Laxale',
            email: 'jerome.laxale.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Drummoyne',
        postcode: '2047',
        ward: 'N/A',
        council: {
            name: 'City of Canada Bay Council',
            email: 'council@canadabay.nsw.gov.au'
        },
        stateMP: {
            name: 'Stephanie Di Pasqua',
            email: 'drummoyne@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Sally Sitou',
            email: 'sally.sitou.mp@aph.gov.au'
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
            name: 'Ron Hoenig',
            email: 'heffron@parliament.nsw.gov.au'
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
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Tanya Plibersek',
            email: 'tanya.plibersek.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Bondi Beach',
        postcode: '2027',
        ward: 'N/A',
        council: {
            name: 'Waverley Council',
            email: 'council@waverley.nsw.gov.au'
        },
        stateMP: {
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
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
            name: 'Marjorie O\'Neill',
            email: 'coogee@parliament.nsw.gov.au'
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
            name: 'Kellie Sloane',
            email: 'vaucluse@parliament.nsw.gov.au'
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
            name: 'Kellie Sloane',
            email: 'vaucluse@parliament.nsw.gov.au'
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
            name: 'Kellie Sloane',
            email: 'vaucluse@parliament.nsw.gov.au'
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
        suburb: 'Kogarah Bay',
        postcode: '2208',
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
        suburb: 'Beverley Park',
        postcode: '2220',
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
        suburb: 'Allawah',
        postcode: '2222',
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
        suburb: 'Blakehurst',
        postcode: '2224',
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
        suburb: 'Carss Park',
        postcode: '2225',
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
        suburb: 'Caringbah',
        postcode: '2229',
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
        suburb: 'Woolooware',
        postcode: '2231',
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
        suburb: 'Gunnamatta',
        postcode: '2232',
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
        suburb: 'Burraneer',
        postcode: '2233',
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
        suburb: 'Bonnet Bay',
        postcode: '2234',
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
        suburb: 'Rockdale',
        postcode: '2216',
        ward: 'N/A',
        council: {
            name: 'Bayside Council',
            email: 'council@bayside.nsw.gov.au'
        },
        stateMP: {
            name: 'Stephen Kamper',
            email: 'rockdale@parliament.nsw.gov.au'
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
            name: 'Stephen Kamper',
            email: 'rockdale@parliament.nsw.gov.au'
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
            name: 'Eleni Petinos',
            email: 'miranda@parliament.nsw.gov.au'
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
            name: 'David Coleman',
            email: 'david.coleman.mp@aph.gov.au'
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
            name: 'David Coleman',
            email: 'david.coleman.mp@aph.gov.au'
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
            name: 'Matt Thistlethwaite',
            email: 'matt.thistlethwaite.mp@aph.gov.au'
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
            name: 'Kylea Tink',
            email: 'kylea.tink.mp@aph.gov.au'
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
        suburb: 'Lane Cove',
        postcode: '2066',
        ward: 'N/A',
        council: {
            name: 'Lane Cove Council',
            email: 'council@lanecove.nsw.gov.au'
        },
        stateMP: {
            name: 'Anthony Roberts',
            email: 'lanecove@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Kylea Tink',
            email: 'kylea.tink.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Hornsby',
        postcode: '2077',
        ward: 'N/A',
        council: {
            name: 'Hornsby Shire Council',
            email: 'council@hornsby.nsw.gov.au'
        },
        stateMP: {
            name: 'Matt Cross',
            email: 'davidson@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Julian Leeser',
            email: 'julian.leeser.mp@aph.gov.au'
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
        suburb: 'Fairlight',
        postcode: '2091',
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
        suburb: 'Balgowlah',
        postcode: '2093',
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
        suburb: 'Seaforth',
        postcode: '2094',
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
        suburb: 'Queenscliff',
        postcode: '2096',
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
        suburb: 'Collaroy',
        postcode: '2100',
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
        suburb: 'Narrabeen',
        postcode: '2101',
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
        suburb: 'Palm Beach',
        postcode: '2102',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Warriewood',
        postcode: '2104',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Elanora',
        postcode: '2105',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Newport',
        postcode: '2108',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Bilgola',
        postcode: '2109',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Pittwater',
        postcode: '2103',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Jacqui Scruby',
            email: 'pittwater@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Wakehurst',
        postcode: '2099',
        ward: 'N/A',
        council: {
            name: 'Northern Beaches Council',
            email: 'council@northernbeaches.nsw.gov.au'
        },
        stateMP: {
            name: 'Michael Regan',
            email: 'wakehurst@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Zali Steggall',
            email: 'zali.steggall.mp@aph.gov.au'
        }
    },
    
    // Western Sydney - Major Areas
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
            name: 'Alex Hawke',
            email: 'alex.hawke.mp@aph.gov.au'
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
            name: 'Charishma Kaliyanda',
            email: 'liverpool@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Stanley',
            email: 'anne.stanley.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Penrith',
        postcode: '2750',
        ward: 'N/A',
        council: {
            name: 'Penrith City Council',
            email: 'council@penrith.city'
        },
        stateMP: {
            name: 'Karen McKeown',
            email: 'penrith@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Marion Scrymgour',
            email: 'marion.scrymgour.mp@aph.gov.au'
        }
    },
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
    },
    
    // Hills District
    {
        suburb: 'Castle Hill',
        postcode: '2154',
        ward: 'N/A',
        council: {
            name: 'The Hills Shire Council',
            email: 'council@thehills.nsw.gov.au'
        },
        stateMP: {
            name: 'Mark Hodges',
            email: 'castlehill@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Michelle Rowland',
            email: 'michelle.rowland.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Winston Hills',
        postcode: '2153',
        ward: 'N/A',
        council: {
            name: 'The Hills Shire Council',
            email: 'council@thehills.nsw.gov.au'
        },
        stateMP: {
            name: 'Mark Taylor',
            email: 'winstonhills@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Michelle Rowland',
            email: 'michelle.rowland.mp@aph.gov.au'
        }
    },
    
    // Additional Key Sydney Areas
    {
        suburb: 'Prospect',
        postcode: '2148',
        ward: 'N/A',
        council: {
            name: 'Blacktown City Council',
            email: 'council@blacktown.nsw.gov.au'
        },
        stateMP: {
            name: 'Hugh McDermott',
            email: 'prospect@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Alex Hawke',
            email: 'alex.hawke.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Fairfield',
        postcode: '2165',
        ward: 'N/A',
        council: {
            name: 'Fairfield City Council',
            email: 'council@fairfield.nsw.gov.au'
        },
        stateMP: {
            name: 'David Saliba',
            email: 'fairfield@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Stanley',
            email: 'anne.stanley.mp@aph.gov.au'
        }
    },
    {
        suburb: 'Granville',
        postcode: '2142',
        ward: 'N/A',
        council: {
            name: 'Cumberland Council',
            email: 'council@cumberland.nsw.gov.au'
        },
        stateMP: {
            name: 'Julia Finn',
            email: 'granville@parliament.nsw.gov.au'
        },
        federalMP: {
            name: 'Anne Stanley',
            email: 'anne.stanley.mp@aph.gov.au'
        }
    }
];

// Email templates - EDIT THIS
const EMAIL_TEMPLATES = {
    subject: 'Concern Regarding Proposed Parking Meters at Randwick Beaches',
    
    access: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong concern regarding the proposal to introduce parking meters at Randwick's beaches.

Beaches belong to everyone, not just those privileged enough to live within walking distance of the coast. Introducing paid parking for access to beaches amounts to rent‑seeking on public land and represents, in effect, a further privatisation of a shared public asset.

Lower‑income earners will be disproportionately affected by this proposal. For many people, travelling to the beach already involves significant time and cost. Public transport is often impractical for beach use — carrying surfboards, wetsuits, towels, umbrellas, food, and the necessities required for small children is unrealistic. Returning home on public transport with wet gear is even more difficult. For many families and individuals, driving is not a luxury but the only viable option.

The proposal will also significantly reduce amenity for non‑local beach users. Even stopping briefly to check variable and sometimes dangerous water conditions would incur a fee. This may discourage people from reassessing conditions and could lead to poorer decision‑making around water activities, potentially increasing the risk of accidents and fatalities.

More broadly, imposing what is effectively an access tax on people who must travel long distances to enjoy the coast runs counter to the principles of social cohesion and fairness that are often articulated by the Labor Party. The policy risks being perceived as economic discrimination and exclusionary in its impact, particularly on communities who already face barriers to accessing public spaces.

I urge Council to reconsider this proposal and to pursue solutions that protect beach access as a genuinely shared public good.`,
        closing: 'Yours sincerely,'
    },
    
    families: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong concern regarding the proposal to introduce parking meters at Randwick's beaches.

For families with children, driving to the beach is not a luxury but the only viable option. Public transport is often impractical for beach use — carrying surfboards, wetsuits, towels, umbrellas, food, and the necessities required for small children is unrealistic. Returning home on public transport with wet gear and tired children is even more difficult.

Lower‑income families will be disproportionately affected by this proposal. Many families throughout Sydney rely on free beach parking for regular outings and recreational activities. The introduction of parking meters would place an unnecessary financial burden on households, potentially preventing children and families from enjoying these beautiful eastern suburbs beaches.

This proposal runs counter to the principles of social cohesion and fairness that are often articulated by the Labor Party. The policy risks being perceived as economic discrimination and exclusionary in its impact, particularly on families who already face barriers to accessing public spaces.

I am deeply disappointed that a Labor‑led council would pursue a policy that restricts equitable beach access for families through paid parking. This issue will weigh heavily on my considerations at all levels of voting in the future.

I urge Council to reconsider this proposal and to pursue solutions that protect beach access as a genuinely shared public good for all Sydney families.`,
        closing: 'Yours sincerely,'
    },
    
    streets: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong concern regarding the proposal to introduce parking meters at Randwick's beaches.

Rather than solving parking issues, this proposal may simply push parking pressure into surrounding residential streets, creating new problems for local residents. This could lead to increased congestion, reduced street parking availability, and tensions between beach visitors and residents.

The proposal will also significantly reduce amenity for non‑local beach users. Even stopping briefly to check variable and sometimes dangerous water conditions would incur a fee. This may discourage people from reassessing conditions and could lead to poorer decision‑making around water activities, potentially increasing the risk of accidents and fatalities.

More broadly, imposing what is effectively an access tax on people who must travel long distances to enjoy the coast runs counter to the principles of social cohesion and fairness that are often articulated by the Labor Party. The policy risks being perceived as economic discrimination and exclusionary in its impact, particularly on communities who already face barriers to accessing public spaces.

I am deeply disappointed that a Labor‑led council would pursue a policy that displaces parking problems into residential neighborhoods rather than solving them. This issue will weigh heavily on my considerations at all levels of voting in the future.

I urge Council to reconsider this proposal and to pursue solutions that don't displace parking problems into our neighborhoods while maintaining safe and accessible beach access for all Sydneysiders.`,
        closing: 'Yours sincerely,'
    },
    
    business: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong concern regarding the proposal to introduce parking meters at Randwick's beaches.

Our local cafes, restaurants, and shops rely on beach visitors for business. Introducing parking meters could deter visitors and negatively impact the local economy. The proposal amounts to rent‑seeking on public land and represents, in effect, a further privatisation of a shared public asset that supports local enterprise.

Additionally, community groups, sports clubs, and regular beach users may be discouraged from using these important community spaces. The long-term economic and social costs to our community could outweigh any short-term revenue gains from parking meters.

More broadly, imposing what is effectively an access tax on people who must travel long distances to enjoy the coast runs counter to the principles of social cohesion and fairness that are often articulated by the Labor Party. The policy risks being perceived as economic discrimination and exclusionary in its impact, particularly on communities who already face barriers to accessing public spaces that support local business activity.

I am deeply disappointed that a Labor‑led council would pursue a policy that threatens local businesses and community organisations through paid parking. This issue will weigh heavily on my considerations at all levels of voting in the future.

I urge Council to reconsider this proposal and to pursue solutions that maintain both beach accessibility and support for our local economy as a genuinely shared public good.`,
        closing: 'Yours sincerely,'
    },
    
    alternatives: {
        greeting: 'Dear {name},',
        body: `I am writing to express my strong concern regarding the proposal to introduce parking meters at Randwick's beaches.

While I understand parking management may be needed, introducing paid parking for access to beaches amounts to rent‑seeking on public land and represents, in effect, a further privatisation of a shared public asset. This approach runs counter to principles of social cohesion and fairness.

I support exploring alternatives such as improved public transport options, timed parking restrictions, shuttle services, or other solutions that maintain beach accessibility without creating economic barriers for lower‑income earners and families who must travel long distances.

More broadly, imposing what is effectively an access tax on people who must travel long distances to enjoy the coast runs counter to the principles of social cohesion and fairness that are often articulated by the Labor Party. The policy risks being perceived as economic discrimination and exclusionary in its impact, particularly on communities who already face barriers to accessing public spaces.

I am deeply disappointed that a Labor‑led council would pursue paid parking as the first resort rather than engaging with the community to develop better solutions. This issue will weigh heavily on my considerations at all levels of voting in the future.

I urge you to engage with the community to develop solutions that balance parking needs with keeping our beaches free and accessible for everyone as a genuinely shared public good.`,
        closing: 'Yours sincerely,'
    }
};
