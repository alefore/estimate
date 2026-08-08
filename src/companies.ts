export interface Company {
  name: string;
  country: string;  // Country of founding
  year: number;     // Conventional founding year
  note?: string;    // Surprising original business or dating convention, where
                    // relevant
}

export const companies: Company[] = [
  {
    name: 'Kongo Gumi',
    country: 'Japan',
    year: 578,
    note:
        'Temple construction; world\'s oldest company (independent until 2006)'
  },
  {
    name: 'Stora Enso',
    country: 'Sweden',
    year: 1288,
    note: 'Started as a copper mine; oldest known joint-stock company'
  },
  {
    name: 'Monte dei Paschi di Siena',
    country: 'Italy',
    year: 1472,
    note: 'World\'s oldest bank still operating'
  },
  {name: 'Beretta', country: 'Italy', year: 1526},
  {
    name: 'Cambridge University Press',
    country: 'United Kingdom',
    year: 1534,
    note: 'Oldest university press'
  },
  {
    name: 'Zildjian',
    country: 'Turkey',
    year: 1623,
    note: 'Cymbal maker, founded in Constantinople'
  },
  {
    name: 'Hudson\'s Bay Company',
    country: 'Canada',
    year: 1670,
    note: 'Fur trading; chartered by the English crown'
  },
  {
    name: 'Lloyd\'s of London',
    country: 'United Kingdom',
    year: 1686,
    note: 'Started in a coffee house'
  },
  {name: 'Barclays', country: 'United Kingdom', year: 1690},
  {name: 'Twinings', country: 'United Kingdom', year: 1706},
  {name: 'Moët & Chandon', country: 'France', year: 1743},
  {name: 'Sotheby\'s', country: 'United Kingdom', year: 1744},
  {
    name: 'Guinness',
    country: 'Ireland',
    year: 1759,
    note: '9,000-year lease on the brewery signed in 1759'
  },
  {name: 'Faber-Castell', country: 'Germany', year: 1761, note: 'Pencils'},
  {name: 'Christie\'s', country: 'United Kingdom', year: 1766},
  {name: 'Encyclopædia Britannica', country: 'United Kingdom', year: 1768},
  {name: 'Veuve Clicquot', country: 'France', year: 1772},
  {name: 'Birkenstock', country: 'Germany', year: 1774},
  {name: 'The Times', country: 'United Kingdom', year: 1785},
  {name: 'Jim Beam', country: 'USA', year: 1795},
  {name: 'DuPont', country: 'USA', year: 1802, note: 'Gunpowder manufacturer'},
  {
    name: 'Colgate',
    country: 'USA',
    year: 1806,
    note: 'Starch, soap, and candles'
  },
  {
    name: 'Peugeot',
    country: 'France',
    year: 1810,
    note: 'Coffee grinders, saw blades, and bicycles before cars'
  },
  {name: 'Cadbury', country: 'United Kingdom', year: 1824},
  {
    name: 'Procter & Gamble',
    country: 'USA',
    year: 1837,
    note: 'Soap and candles'
  },
  {
    name: 'Hermès',
    country: 'France',
    year: 1837,
    note: 'Horse harnesses and saddles'
  },
  {name: 'Lindt', country: 'Switzerland', year: 1845},
  {name: 'Associated Press', country: 'USA', year: 1846},
  {name: 'Carlsberg', country: 'Denmark', year: 1847},
  {name: 'Siemens', country: 'Germany', year: 1847, note: 'Telegraph systems'},
  {name: 'Pfizer', country: 'USA', year: 1849},
  {
    name: 'American Express',
    country: 'USA',
    year: 1850,
    note: 'Freight and valuables courier'
  },
  {
    name: 'Western Union',
    country: 'USA',
    year: 1851,
    note: 'Telegraph company'
  },
  {
    name: 'Reuters',
    country: 'United Kingdom',
    year: 1851,
    note: 'Used carrier pigeons to bridge telegraph gaps'
  },
  {name: 'The New York Times', country: 'USA', year: 1851},
  {name: 'Wells Fargo', country: 'USA', year: 1852, note: 'Stagecoach express'},
  {
    name: 'Levi Strauss & Co.',
    country: 'USA',
    year: 1853,
    note: 'Dry goods; riveted jeans came in 1873'
  },
  {name: 'Louis Vuitton', country: 'France', year: 1854, note: 'Trunk maker'},
  {name: 'Burberry', country: 'United Kingdom', year: 1856},
  {
    name: 'Credit Suisse',
    country: 'Switzerland',
    year: 1856,
    note: 'Founded to finance the Swiss railway network'
  },
  {name: 'UBS', country: 'Switzerland', year: 1862},
  {name: 'Bacardi', country: 'Cuba', year: 1862},
  {name: 'Heineken', country: 'Netherlands', year: 1864},
  {
    name: 'Nokia',
    country: 'Finland',
    year: 1865,
    note: 'Started as a paper mill; later rubber boots and cables'
  },
  {name: 'Nestlé', country: 'Switzerland', year: 1866, note: 'Infant food'},
  {name: 'Jack Daniel\'s', country: 'USA', year: 1866},
  {name: 'Goldman Sachs', country: 'USA', year: 1869},
  {
    name: 'Heinz',
    country: 'USA',
    year: 1869,
    note: 'First product was horseradish, not ketchup'
  },
  {name: 'Mitsubishi', country: 'Japan', year: 1870, note: 'Shipping company'},
  {
    name: 'Ericsson',
    country: 'Sweden',
    year: 1876,
    note: 'Telegraph repair shop'
  },
  {
    name: 'Bell Telephone Company',
    country: 'USA',
    year: 1877,
    note: 'Ancestor of AT&T'
  },
  {
    name: 'Barilla',
    country: 'Italy',
    year: 1877,
    note: 'Bread and pasta shop in Parma'
  },
  {name: 'Nivea (Beiersdorf)', country: 'Germany', year: 1882},
  {
    name: 'Victorinox',
    country: 'Switzerland',
    year: 1884,
    note: 'Swiss Army knife maker'
  },
  {name: 'Bosch', country: 'Germany', year: 1886},
  {name: 'Johnson & Johnson', country: 'USA', year: 1886},
  {
    name: 'Coca-Cola',
    country: 'USA',
    year: 1886,
    note: 'The drink; the company incorporated in 1892'
  },
  {name: 'Kodak', country: 'USA', year: 1888},
  {
    name: 'Nintendo',
    country: 'Japan',
    year: 1889,
    note: 'Handmade hanafuda playing cards'
  },
  {name: 'Philips', country: 'Netherlands', year: 1891, note: 'Light bulbs'},
  {name: 'General Electric', country: 'USA', year: 1892},
  {name: 'Hershey', country: 'USA', year: 1894, note: 'Caramel company first'},
  {
    name: 'Pepsi',
    country: 'USA',
    year: 1898,
    note: 'Originally \'Brad\'s Drink\''
  },
  {name: 'Fiat', country: 'Italy', year: 1899},
  {name: 'Renault', country: 'France', year: 1899},
  {name: 'Ford', country: 'USA', year: 1903},
  {name: 'Harley-Davidson', country: 'USA', year: 1903},
  {name: 'Rolls-Royce', country: 'United Kingdom', year: 1904},
  {
    name: 'Rolex',
    country: 'United Kingdom',
    year: 1905,
    note: 'Founded in London; moved to Geneva in 1919'
  },
  {
    name: 'Kellogg\'s',
    country: 'USA',
    year: 1906,
    note: 'Born from a sanitarium\'s health-food experiments'
  },
  {name: 'General Motors', country: 'USA', year: 1908},
  {
    name: 'Converse',
    country: 'USA',
    year: 1908,
    note: 'Rubber galoshes before sneakers'
  },
  {name: 'L\'Oréal', country: 'France', year: 1909, note: 'Hair dye'},
  {name: 'Chanel', country: 'France', year: 1910, note: 'Hat shop'},
  {name: 'Mars', country: 'USA', year: 1911},
  {
    name: 'IBM',
    country: 'USA',
    year: 1911,
    note: 'Tabulating machines; named IBM in 1924'
  },
  {
    name: 'Sharp',
    country: 'Japan',
    year: 1912,
    note: 'Named after the Ever-Sharp mechanical pencil'
  },
  {
    name: 'Prada',
    country: 'Italy',
    year: 1913,
    note: 'Leather goods shop in Milan'
  },
  {
    name: 'BMW',
    country: 'Germany',
    year: 1916,
    note: 'Aircraft engines; the logo\'s propeller myth came later'
  },
  {name: 'Boeing', country: 'USA', year: 1916},
  {
    name: 'Nikon',
    country: 'Japan',
    year: 1917,
    note: 'Optical instruments for the military'
  },
  {
    name: 'Panasonic',
    country: 'Japan',
    year: 1918,
    note: 'Duplex lamp sockets'
  },
  {
    name: 'Avianca',
    country: 'Colombia',
    year: 1919,
    note: 'Second-oldest airline in the world still operating'
  },
  {
    name: 'KLM',
    country: 'Netherlands',
    year: 1919,
    note: 'Oldest airline still flying under its original name'
  },
  {
    name: 'Gucci',
    country: 'Italy',
    year: 1921,
    note: 'Luggage shop in Florence'
  },
  {name: 'BBC', country: 'United Kingdom', year: 1922},
  {name: 'Walt Disney Company', country: 'USA', year: 1923},
  {name: 'Warner Bros.', country: 'USA', year: 1923},
  {name: 'Motorola', country: 'USA', year: 1928, note: 'Car radios'},
  {
    name: 'Unilever',
    country: 'United Kingdom',
    year: 1929,
    note: 'Merger of Dutch margarine and British soap makers'
  },
  {
    name: 'Porsche',
    country: 'Germany',
    year: 1931,
    note: 'Design consultancy; first own car in 1948'
  },
  {
    name: 'LEGO',
    country: 'Denmark',
    year: 1932,
    note: 'Wooden toys; plastic bricks from 1949'
  },
  {name: 'Fujifilm', country: 'Japan', year: 1934},
  {
    name: 'Toyota',
    country: 'Japan',
    year: 1937,
    note: 'Spun off from a loom manufacturer'
  },
  {name: 'Volkswagen', country: 'Germany', year: 1937},
  {name: 'Canon', country: 'Japan', year: 1937},
  {
    name: 'Samsung',
    country: 'South Korea',
    year: 1938,
    note: 'Trading company selling dried fish and noodles'
  },
  {
    name: 'Hewlett-Packard',
    country: 'USA',
    year: 1939,
    note: 'Founded in the famous Palo Alto garage'
  },
  {
    name: 'McDonald\'s',
    country: 'USA',
    year: 1940,
    note: 'The brothers\' restaurant; Ray Kroc\'s corporation dates to 1955'
  },
  {
    name: 'IKEA',
    country: 'Sweden',
    year: 1943,
    note: 'Mail-order pens and wallets; furniture came in 1948'
  },
  {
    name: 'Mattel',
    country: 'USA',
    year: 1945,
    note: 'Picture frames; Barbie arrived in 1959'
  },
  {
    name: 'Sony',
    country: 'Japan',
    year: 1946,
    note: 'First product was a rice cooker (a failed one)'
  },
  {
    name: 'Ferrari',
    country: 'Italy',
    year: 1947,
    note: 'First car under the Ferrari name; racing team dates to 1929'
  },
  {name: 'H&M', country: 'Sweden', year: 1947},
  {name: 'Honda', country: 'Japan', year: 1948, note: 'Motorized bicycles'},
  {
    name: 'Puma',
    country: 'Germany',
    year: 1948,
    note: 'Born from the Dassler brothers\' feud'
  },
  {
    name: 'Adidas',
    country: 'Germany',
    year: 1949,
    note: 'The other Dassler brother'
  },
  {
    name: 'Kentucky Fried Chicken',
    country: 'USA',
    year: 1952,
    note: 'First franchise; Sanders\' original restaurant dates to 1930'
  },
  {name: 'Burger King', country: 'USA', year: 1954},
  {name: 'Visa', country: 'USA', year: 1958, note: 'Launched as BankAmericard'},
  {name: 'Walmart', country: 'USA', year: 1962},
  {
    name: 'Nike',
    country: 'USA',
    year: 1964,
    note: 'Founded as Blue Ribbon Sports; renamed in 1971'
  },
  {name: 'Subway', country: 'USA', year: 1965},
  {name: 'Mastercard', country: 'USA', year: 1966},
  {name: 'Intel', country: 'USA', year: 1968},
  {
    name: 'Starbucks',
    country: 'USA',
    year: 1971,
    note: 'Sold only coffee beans at first, no drinks'
  },
  {name: 'SAP', country: 'Germany', year: 1972},
  {name: 'Microsoft', country: 'USA', year: 1975},
  {name: 'Apple', country: 'USA', year: 1976},
  {name: 'Oracle', country: 'USA', year: 1977},
  {name: 'CNN', country: 'USA', year: 1980},
  {name: 'Adobe', country: 'USA', year: 1982},
  {name: 'Swatch', country: 'Switzerland', year: 1983},
  {
    name: 'Dell',
    country: 'USA',
    year: 1984,
    note: 'Started in a university dorm room'
  },
  {name: 'Cisco', country: 'USA', year: 1984},
  {name: 'Lenovo', country: 'China', year: 1984},
  {name: 'Huawei', country: 'China', year: 1987},
  {name: 'Nvidia', country: 'USA', year: 1993},
  {name: 'Amazon', country: 'USA', year: 1994, note: 'Online bookstore'},
  {name: 'Yahoo', country: 'USA', year: 1994},
  {name: 'eBay', country: 'USA', year: 1995},
  {name: 'Netflix', country: 'USA', year: 1997, note: 'DVD rental by mail'},
  {name: 'Google', country: 'USA', year: 1998},
  {name: 'PayPal', country: 'USA', year: 1998, note: 'Founded as Confinity'},
  {name: 'Tencent', country: 'China', year: 1998},
  {name: 'Alibaba', country: 'China', year: 1999},
  {name: 'SpaceX', country: 'USA', year: 2002},
  {name: 'Tesla', country: 'USA', year: 2003},
  {name: 'Facebook', country: 'USA', year: 2004},
  {name: 'YouTube', country: 'USA', year: 2005},
  {name: 'Spotify', country: 'Sweden', year: 2006},
  {
    name: 'Airbnb',
    country: 'USA',
    year: 2008,
    note: 'Air mattresses in the founders\' apartment'
  },
  {name: 'Uber', country: 'USA', year: 2009},
  {name: 'WhatsApp', country: 'USA', year: 2009},
  {
    name: 'Instagram',
    country: 'USA',
    year: 2010,
    note: 'Started as check-in app Burbn'
  },
  {name: 'Zoom', country: 'USA', year: 2011},
  {name: 'ByteDance (TikTok)', country: 'China', year: 2012},
  {name: 'OpenAI', country: 'USA', year: 2015},
];
