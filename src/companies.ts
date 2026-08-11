import {type Difficulty} from './difficulty.js';

export interface Company {
  name: string;
  country: string;  // Country of founding
  year: number;     // Conventional founding year
  note?: string;    // Surprising original business or dating convention, where
                    // relevant
  difficulty: Difficulty;
}

export const companies: Company[] = [
  {
    name: 'Kongo Gumi',
    country: 'Japan',
    year: 578,
    note:
        'Temple construction; world\'s oldest company (independent until 2006)',
    difficulty: 'hard'
  },
  {
    name: 'Stora Enso',
    country: 'Sweden',
    year: 1288,
    note: 'Started as a copper mine; oldest known joint-stock company',
    difficulty: 'hard'
  },
  {
    name: 'Monte dei Paschi di Siena',
    country: 'Italy',
    year: 1472,
    note: 'World\'s oldest bank still operating',
    difficulty: 'hard'
  },
  {name: 'Beretta', country: 'Italy', year: 1526, difficulty: 'hard'},
  {
    name: 'Cambridge University Press',
    country: 'United Kingdom',
    year: 1534,
    note: 'Oldest university press',
    difficulty: 'medium'
  },
  {
    name: 'Zildjian',
    country: 'Turkey',
    year: 1623,
    note: 'Cymbal maker, founded in Constantinople',
    difficulty: 'hard'
  },
  {
    name: 'Hudson\'s Bay Company',
    country: 'Canada',
    year: 1670,
    note: 'Fur trading; chartered by the English crown',
    difficulty: 'hard'
  },
  {
    name: 'Lloyd\'s of London',
    country: 'United Kingdom',
    year: 1686,
    note: 'Started in a coffee house',
    difficulty: 'hard'
  },
  {name: 'Barclays', country: 'United Kingdom', year: 1690, difficulty: 'hard'},
  {
    name: 'Twinings',
    country: 'United Kingdom',
    year: 1706,
    difficulty: 'medium'
  },
  {name: 'Moët & Chandon', country: 'France', year: 1743, difficulty: 'medium'},
  {
    name: 'Sotheby\'s',
    country: 'United Kingdom',
    year: 1744,
    difficulty: 'medium'
  },
  {
    name: 'Guinness',
    country: 'Ireland',
    year: 1759,
    note: '9,000-year lease on the brewery signed in 1759',
    difficulty: 'easy'
  },
  {
    name: 'Faber-Castell',
    country: 'Germany',
    year: 1761,
    note: 'Pencils',
    difficulty: 'medium'
  },
  {
    name: 'Christie\'s',
    country: 'United Kingdom',
    year: 1766,
    difficulty: 'hard'
  },
  {
    name: 'Encyclopædia Britannica',
    country: 'United Kingdom',
    year: 1768,
    difficulty: 'easy'
  },
  {name: 'Veuve Clicquot', country: 'France', year: 1772, difficulty: 'hard'},
  {name: 'Birkenstock', country: 'Germany', year: 1774, difficulty: 'medium'},
  {
    name: 'The Times',
    country: 'United Kingdom',
    year: 1785,
    difficulty: 'hard'
  },
  {name: 'Jim Beam', country: 'USA', year: 1795, difficulty: 'medium'},
  {
    name: 'DuPont',
    country: 'USA',
    year: 1802,
    note: 'Gunpowder manufacturer',
    difficulty: 'hard'
  },
  {
    name: 'Colgate',
    country: 'USA',
    year: 1806,
    note: 'Starch, soap, and candles',
    difficulty: 'medium'
  },
  {
    name: 'Peugeot',
    country: 'France',
    year: 1810,
    note: 'Coffee grinders, saw blades, and bicycles before cars',
    difficulty: 'easy'
  },
  {
    name: 'Cadbury',
    country: 'United Kingdom',
    year: 1824,
    difficulty: 'medium'
  },
  {
    name: 'Procter & Gamble',
    country: 'USA',
    year: 1837,
    note: 'Soap and candles',
    difficulty: 'medium'
  },
  {
    name: 'Hermès',
    country: 'France',
    year: 1837,
    note: 'Horse harnesses and saddles',
    difficulty: 'medium'
  },
  {name: 'Lindt', country: 'Switzerland', year: 1845, difficulty: 'medium'},
  {name: 'Associated Press', country: 'USA', year: 1846, difficulty: 'hard'},
  {name: 'Carlsberg', country: 'Denmark', year: 1847, difficulty: 'medium'},
  {
    name: 'Siemens',
    country: 'Germany',
    year: 1847,
    note: 'Telegraph systems',
    difficulty: 'medium'
  },
  {name: 'Pfizer', country: 'USA', year: 1849, difficulty: 'hard'},
  {
    name: 'American Express',
    country: 'USA',
    year: 1850,
    note: 'Freight and valuables courier',
    difficulty: 'easy'
  },
  {
    name: 'Western Union',
    country: 'USA',
    year: 1851,
    note: 'Telegraph company',
    difficulty: 'medium'
  },
  {
    name: 'Reuters',
    country: 'United Kingdom',
    year: 1851,
    note: 'Used carrier pigeons to bridge telegraph gaps',
    difficulty: 'easy'
  },
  {name: 'The New York Times', country: 'USA', year: 1851, difficulty: 'easy'},
  {
    name: 'Wells Fargo',
    country: 'USA',
    year: 1852,
    note: 'Stagecoach express',
    difficulty: 'medium'
  },
  {
    name: 'Levi Strauss & Co.',
    country: 'USA',
    year: 1853,
    note: 'Dry goods; riveted jeans came in 1873',
    difficulty: 'easy'
  },
  {
    name: 'Louis Vuitton',
    country: 'France',
    year: 1854,
    note: 'Trunk maker',
    difficulty: 'medium'
  },
  {
    name: 'Burberry',
    country: 'United Kingdom',
    year: 1856,
    difficulty: 'medium'
  },
  {
    name: 'Credit Suisse',
    country: 'Switzerland',
    year: 1856,
    note: 'Founded to finance the Swiss railway network',
    difficulty: 'hard'
  },
  {name: 'UBS', country: 'Switzerland', year: 1862, difficulty: 'hard'},
  {name: 'Bacardi', country: 'Cuba', year: 1862, difficulty: 'medium'},
  {name: 'Heineken', country: 'Netherlands', year: 1864, difficulty: 'medium'},
  {
    name: 'Nokia',
    country: 'Finland',
    year: 1865,
    note: 'Started as a paper mill; later rubber boots and cables',
    difficulty: 'easy'
  },
  {
    name: 'Nestlé',
    country: 'Switzerland',
    year: 1866,
    note: 'Infant food',
    difficulty: 'easy'
  },
  {name: 'Jack Daniel\'s', country: 'USA', year: 1866, difficulty: 'medium'},
  {name: 'Goldman Sachs', country: 'USA', year: 1869, difficulty: 'medium'},
  {
    name: 'Heinz',
    country: 'USA',
    year: 1869,
    note: 'First product was horseradish, not ketchup',
    difficulty: 'medium'
  },
  {
    name: 'Mitsubishi',
    country: 'Japan',
    year: 1870,
    note: 'Shipping company',
    difficulty: 'medium'
  },
  {
    name: 'Ericsson',
    country: 'Sweden',
    year: 1876,
    note: 'Telegraph repair shop',
    difficulty: 'hard'
  },
  {
    name: 'Bell Telephone Company',
    country: 'USA',
    year: 1877,
    note: 'Ancestor of AT&T',
    difficulty: 'medium'
  },
  {
    name: 'Barilla',
    country: 'Italy',
    year: 1877,
    note: 'Bread and pasta shop in Parma',
    difficulty: 'medium'
  },
  {
    name: 'Nivea (Beiersdorf)',
    country: 'Germany',
    year: 1882,
    difficulty: 'medium'
  },
  {
    name: 'Victorinox',
    country: 'Switzerland',
    year: 1884,
    note: 'Swiss Army knife maker',
    difficulty: 'medium'
  },
  {name: 'Bosch', country: 'Germany', year: 1886, difficulty: 'medium'},
  {name: 'Johnson & Johnson', country: 'USA', year: 1886, difficulty: 'medium'},
  {
    name: 'Coca-Cola',
    country: 'USA',
    year: 1886,
    note: 'The drink; the company incorporated in 1892',
    difficulty: 'easy'
  },
  {name: 'Kodak', country: 'USA', year: 1888, difficulty: 'easy'},
  {
    name: 'Nintendo',
    country: 'Japan',
    year: 1889,
    note: 'Handmade hanafuda playing cards',
    difficulty: 'easy'
  },
  {
    name: 'Philips',
    country: 'Netherlands',
    year: 1891,
    note: 'Light bulbs',
    difficulty: 'medium'
  },
  {name: 'General Electric', country: 'USA', year: 1892, difficulty: 'medium'},
  {
    name: 'Hershey',
    country: 'USA',
    year: 1894,
    note: 'Caramel company first',
    difficulty: 'medium'
  },
  {
    name: 'Pepsi',
    country: 'USA',
    year: 1898,
    note: 'Originally \'Brad\'s Drink\'',
    difficulty: 'easy'
  },
  {name: 'Fiat', country: 'Italy', year: 1899, difficulty: 'easy'},
  {name: 'Renault', country: 'France', year: 1899, difficulty: 'easy'},
  {name: 'Ford', country: 'USA', year: 1903, difficulty: 'easy'},
  {name: 'Harley-Davidson', country: 'USA', year: 1903, difficulty: 'medium'},
  {
    name: 'Rolls-Royce',
    country: 'United Kingdom',
    year: 1904,
    difficulty: 'medium'
  },
  {
    name: 'Rolex',
    country: 'United Kingdom',
    year: 1905,
    note: 'Founded in London; moved to Geneva in 1919',
    difficulty: 'medium'
  },
  {
    name: 'Kellogg\'s',
    country: 'USA',
    year: 1906,
    note: 'Born from a sanitarium\'s health-food experiments',
    difficulty: 'easy'
  },
  {name: 'General Motors', country: 'USA', year: 1908, difficulty: 'medium'},
  {
    name: 'Converse',
    country: 'USA',
    year: 1908,
    note: 'Rubber galoshes before sneakers',
    difficulty: 'hard'
  },
  {
    name: 'L\'Oréal',
    country: 'France',
    year: 1909,
    note: 'Hair dye',
    difficulty: 'medium'
  },
  {
    name: 'Chanel',
    country: 'France',
    year: 1910,
    note: 'Hat shop',
    difficulty: 'medium'
  },
  {name: 'Mars', country: 'USA', year: 1911, difficulty: 'medium'},
  {
    name: 'IBM',
    country: 'USA',
    year: 1911,
    note: 'Tabulating machines; named IBM in 1924',
    difficulty: 'easy'
  },
  {
    name: 'Sharp',
    country: 'Japan',
    year: 1912,
    note: 'Named after the Ever-Sharp mechanical pencil',
    difficulty: 'hard'
  },
  {
    name: 'Prada',
    country: 'Italy',
    year: 1913,
    note: 'Leather goods shop in Milan',
    difficulty: 'medium'
  },
  {
    name: 'BMW',
    country: 'Germany',
    year: 1916,
    note: 'Aircraft engines; the logo\'s propeller myth came later',
    difficulty: 'easy'
  },
  {name: 'Boeing', country: 'USA', year: 1916, difficulty: 'easy'},
  {
    name: 'Nikon',
    country: 'Japan',
    year: 1917,
    note: 'Optical instruments for the military',
    difficulty: 'easy'
  },
  {
    name: 'Panasonic',
    country: 'Japan',
    year: 1918,
    note: 'Duplex lamp sockets',
    difficulty: 'medium'
  },
  {
    name: 'Avianca',
    country: 'Colombia',
    year: 1919,
    note: 'Second-oldest airline in the world still operating',
    difficulty: 'hard'
  },
  {
    name: 'KLM',
    country: 'Netherlands',
    year: 1919,
    note: 'Oldest airline still flying under its original name',
    difficulty: 'hard'
  },
  {
    name: 'Gucci',
    country: 'Italy',
    year: 1921,
    note: 'Luggage shop in Florence',
    difficulty: 'medium'
  },
  {name: 'BBC', country: 'United Kingdom', year: 1922, difficulty: 'medium'},
  {name: 'Walt Disney Company', country: 'USA', year: 1923, difficulty: 'easy'},
  {name: 'Warner Bros.', country: 'USA', year: 1923, difficulty: 'easy'},
  {
    name: 'Motorola',
    country: 'USA',
    year: 1928,
    note: 'Car radios',
    difficulty: 'medium'
  },
  {
    name: 'Unilever',
    country: 'United Kingdom',
    year: 1929,
    note: 'Merger of Dutch margarine and British soap makers',
    difficulty: 'medium'
  },
  {
    name: 'Porsche',
    country: 'Germany',
    year: 1931,
    note: 'Design consultancy; first own car in 1948',
    difficulty: 'medium'
  },
  {
    name: 'LEGO',
    country: 'Denmark',
    year: 1932,
    note: 'Wooden toys; plastic bricks from 1949',
    difficulty: 'easy'
  },
  {name: 'Fujifilm', country: 'Japan', year: 1934, difficulty: 'medium'},
  {
    name: 'Toyota',
    country: 'Japan',
    year: 1937,
    note: 'Spun off from a loom manufacturer',
    difficulty: 'easy'
  },
  {name: 'Volkswagen', country: 'Germany', year: 1937, difficulty: 'easy'},
  {name: 'Canon', country: 'Japan', year: 1937, difficulty: 'easy'},
  {
    name: 'Samsung',
    country: 'South Korea',
    year: 1938,
    note: 'Trading company selling dried fish and noodles',
    difficulty: 'medium'
  },
  {
    name: 'Hewlett-Packard',
    country: 'USA',
    year: 1939,
    note: 'Founded in the famous Palo Alto garage',
    difficulty: 'easy'
  },
  {
    name: 'McDonald\'s',
    country: 'USA',
    year: 1940,
    note: 'The brothers\' restaurant; Ray Kroc\'s corporation dates to 1955',
    difficulty: 'easy'
  },
  {
    name: 'IKEA',
    country: 'Sweden',
    year: 1943,
    note: 'Mail-order pens and wallets; furniture came in 1948',
    difficulty: 'easy'
  },
  {
    name: 'Mattel',
    country: 'USA',
    year: 1945,
    note: 'Picture frames; Barbie arrived in 1959',
    difficulty: 'hard'
  },
  {
    name: 'Sony',
    country: 'Japan',
    year: 1946,
    note: 'First product was a rice cooker (a failed one)',
    difficulty: 'easy'
  },
  {
    name: 'Ferrari (cars)',
    country: 'Italy',
    year: 1947,
    note: 'First car under the Ferrari name; racing team dates to 1929',
    difficulty: 'medium'
  },
  {name: 'H&M', country: 'Sweden', year: 1947, difficulty: 'medium'},
  {
    name: 'Honda',
    country: 'Japan',
    year: 1948,
    note: 'Motorized bicycles',
    difficulty: 'easy'
  },
  {
    name: 'Puma',
    country: 'Germany',
    year: 1948,
    note: 'Born from the Dassler brothers\' feud',
    difficulty: 'hard'
  },
  {
    name: 'Adidas',
    country: 'Germany',
    year: 1949,
    note: 'Born from the Dassler brothers\' feud',
    difficulty: 'medium'
  },
  {
    name: 'Kentucky Fried Chicken',
    country: 'USA',
    year: 1952,
    note: 'First franchise; Sanders\' original restaurant dates to 1930',
    difficulty: 'easy'
  },
  {name: 'Burger King', country: 'USA', year: 1954, difficulty: 'easy'},
  {
    name: 'Visa',
    country: 'USA',
    year: 1958,
    note: 'Launched as BankAmericard',
    difficulty: 'medium'
  },
  {name: 'Walmart', country: 'USA', year: 1962, difficulty: 'medium'},
  {
    name: 'Nike',
    country: 'USA',
    year: 1964,
    note: 'Founded as Blue Ribbon Sports; renamed in 1971',
    difficulty: 'easy'
  },
  {name: 'Subway', country: 'USA', year: 1965, difficulty: 'medium'},
  {name: 'Mastercard', country: 'USA', year: 1966, difficulty: 'easy'},
  {name: 'Intel', country: 'USA', year: 1968, difficulty: 'easy'},
  {
    name: 'Starbucks',
    country: 'USA',
    year: 1971,
    note: 'Sold only coffee beans at first, no drinks',
    difficulty: 'easy'
  },
  {name: 'SAP', country: 'Germany', year: 1972, difficulty: 'hard'},
  {name: 'Microsoft', country: 'USA', year: 1975, difficulty: 'easy'},
  {name: 'Apple', country: 'USA', year: 1976, difficulty: 'easy'},
  {name: 'Oracle', country: 'USA', year: 1977, difficulty: 'medium'},
  {name: 'CNN', country: 'USA', year: 1980, difficulty: 'medium'},
  {name: 'Adobe', country: 'USA', year: 1982, difficulty: 'hard'},
  {name: 'Swatch', country: 'Switzerland', year: 1983, difficulty: 'medium'},
  {
    name: 'Dell',
    country: 'USA',
    year: 1984,
    note: 'Started in a university dorm room',
    difficulty: 'medium'
  },
  {name: 'Cisco', country: 'USA', year: 1984, difficulty: 'hard'},
  {name: 'Lenovo', country: 'China', year: 1984, difficulty: 'hard'},
  {name: 'Huawei', country: 'China', year: 1987, difficulty: 'medium'},
  {name: 'Nvidia', country: 'USA', year: 1993, difficulty: 'medium'},
  {
    name: 'Amazon',
    country: 'USA',
    year: 1994,
    note: 'Online bookstore',
    difficulty: 'easy'
  },
  {name: 'Yahoo', country: 'USA', year: 1994, difficulty: 'medium'},
  {name: 'eBay', country: 'USA', year: 1995, difficulty: 'medium'},
  {
    name: 'Netflix',
    country: 'USA',
    year: 1997,
    note: 'DVD rental by mail',
    difficulty: 'medium'
  },
  {name: 'Google', country: 'USA', year: 1998, difficulty: 'easy'},
  {
    name: 'PayPal',
    country: 'USA',
    year: 1998,
    note: 'Founded as Confinity',
    difficulty: 'medium'
  },
  {name: 'Tencent', country: 'China', year: 1998, difficulty: 'hard'},
  {name: 'Alibaba', country: 'China', year: 1999, difficulty: 'medium'},
  {name: 'SpaceX', country: 'USA', year: 2002, difficulty: 'easy'},
  {name: 'Tesla', country: 'USA', year: 2003, difficulty: 'easy'},
  {name: 'Facebook', country: 'USA', year: 2004, difficulty: 'easy'},
  {name: 'YouTube', country: 'USA', year: 2005, difficulty: 'easy'},
  {name: 'Spotify', country: 'Sweden', year: 2006, difficulty: 'medium'},
  {
    name: 'Airbnb',
    country: 'USA',
    year: 2008,
    note: 'Air mattresses in the founders\' apartment',
    difficulty: 'medium'
  },
  {name: 'Uber', country: 'USA', year: 2009, difficulty: 'medium'},
  {name: 'WhatsApp', country: 'USA', year: 2009, difficulty: 'medium'},
  {
    name: 'Instagram',
    country: 'USA',
    year: 2010,
    note: 'Started as check-in app Burbn',
    difficulty: 'easy'
  },
  {name: 'Zoom', country: 'USA', year: 2011, difficulty: 'easy'},
  {
    name: 'ByteDance (TikTok)',
    country: 'China',
    year: 2012,
    difficulty: 'easy'
  },
  {name: 'OpenAI', country: 'USA', year: 2015, difficulty: 'easy'},
];
