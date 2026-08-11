import {type Difficulty} from './difficulty.js';

export interface Company {
  name: string;
  country: string;  // Country of founding
  year: number;     // Conventional founding year
  note?: string;    // Surprising original business or dating convention, where
                    // relevant
  id: number;
  difficulty: Difficulty;
}

export const companies: Company[] = [
  {
    name: 'Kongo Gumi',
    country: 'Japan',
    year: 578,
    note:
        'Temple construction; world\'s oldest company (independent until 2006)',
    id: 3000,
    difficulty: 'hard'
  },
  {
    name: 'Stora Enso',
    country: 'Sweden',
    year: 1288,
    note: 'Started as a copper mine; oldest known joint-stock company',
    id: 3001,
    difficulty: 'hard'
  },
  {
    name: 'Monte dei Paschi di Siena',
    country: 'Italy',
    year: 1472,
    note: 'World\'s oldest bank still operating',
    id: 3002,
    difficulty: 'hard'
  },
  {name: 'Beretta', country: 'Italy', year: 1526, id: 3003, difficulty: 'hard'},
  {
    name: 'Cambridge University Press',
    country: 'United Kingdom',
    year: 1534,
    note: 'Oldest university press',
    id: 3004,
    difficulty: 'medium'
  },
  {
    name: 'Zildjian',
    country: 'Turkey',
    year: 1623,
    note: 'Cymbal maker, founded in Constantinople',
    id: 3005,
    difficulty: 'hard'
  },
  {
    name: 'Hudson\'s Bay Company',
    country: 'Canada',
    year: 1670,
    note: 'Fur trading; chartered by the English crown',
    id: 3006,
    difficulty: 'hard'
  },
  {
    name: 'Lloyd\'s of London',
    country: 'United Kingdom',
    year: 1686,
    note: 'Started in a coffee house',
    id: 3007,
    difficulty: 'hard'
  },
  {
    name: 'Barclays',
    country: 'United Kingdom',
    year: 1690,
    id: 3008,
    difficulty: 'hard'
  },
  {
    name: 'Twinings',
    country: 'United Kingdom',
    year: 1706,
    id: 3009,
    difficulty: 'medium'
  },
  {
    name: 'Moët & Chandon',
    country: 'France',
    year: 1743,
    id: 3010,
    difficulty: 'medium'
  },
  {
    name: 'Sotheby\'s',
    country: 'United Kingdom',
    year: 1744,
    id: 3011,
    difficulty: 'medium'
  },
  {
    name: 'Guinness',
    country: 'Ireland',
    year: 1759,
    note: '9,000-year lease on the brewery signed in 1759',
    id: 3012,
    difficulty: 'easy'
  },
  {
    name: 'Faber-Castell',
    country: 'Germany',
    year: 1761,
    note: 'Pencils',
    id: 3013,
    difficulty: 'medium'
  },
  {
    name: 'Christie\'s',
    country: 'United Kingdom',
    year: 1766,
    id: 3014,
    difficulty: 'hard'
  },
  {
    name: 'Encyclopædia Britannica',
    country: 'United Kingdom',
    year: 1768,
    id: 3015,
    difficulty: 'easy'
  },
  {
    name: 'Veuve Clicquot',
    country: 'France',
    year: 1772,
    id: 3016,
    difficulty: 'hard'
  },
  {
    name: 'Birkenstock',
    country: 'Germany',
    year: 1774,
    id: 3017,
    difficulty: 'medium'
  },
  {
    name: 'The Times',
    country: 'United Kingdom',
    year: 1785,
    id: 3018,
    difficulty: 'hard'
  },
  {
    name: 'Jim Beam',
    country: 'USA',
    year: 1795,
    id: 3019,
    difficulty: 'medium'
  },
  {
    name: 'DuPont',
    country: 'USA',
    year: 1802,
    note: 'Gunpowder manufacturer',
    id: 3020,
    difficulty: 'hard'
  },
  {
    name: 'Colgate',
    country: 'USA',
    year: 1806,
    note: 'Starch, soap, and candles',
    id: 3021,
    difficulty: 'medium'
  },
  {
    name: 'Peugeot',
    country: 'France',
    year: 1810,
    note: 'Coffee grinders, saw blades, and bicycles before cars',
    id: 3022,
    difficulty: 'easy'
  },
  {
    name: 'Cadbury',
    country: 'United Kingdom',
    year: 1824,
    id: 3023,
    difficulty: 'medium'
  },
  {
    name: 'Procter & Gamble',
    country: 'USA',
    year: 1837,
    note: 'Soap and candles',
    id: 3024,
    difficulty: 'medium'
  },
  {
    name: 'Hermès',
    country: 'France',
    year: 1837,
    note: 'Horse harnesses and saddles',
    id: 3025,
    difficulty: 'medium'
  },
  {
    name: 'Lindt',
    country: 'Switzerland',
    year: 1845,
    id: 3026,
    difficulty: 'medium'
  },
  {
    name: 'Associated Press',
    country: 'USA',
    year: 1846,
    id: 3027,
    difficulty: 'hard'
  },
  {
    name: 'Carlsberg',
    country: 'Denmark',
    year: 1847,
    id: 3028,
    difficulty: 'medium'
  },
  {
    name: 'Siemens',
    country: 'Germany',
    year: 1847,
    note: 'Telegraph systems',
    id: 3029,
    difficulty: 'medium'
  },
  {name: 'Pfizer', country: 'USA', year: 1849, id: 3030, difficulty: 'hard'},
  {
    name: 'American Express',
    country: 'USA',
    year: 1850,
    note: 'Freight and valuables courier',
    id: 3031,
    difficulty: 'easy'
  },
  {
    name: 'Western Union',
    country: 'USA',
    year: 1851,
    note: 'Telegraph company',
    id: 3032,
    difficulty: 'medium'
  },
  {
    name: 'Reuters',
    country: 'United Kingdom',
    year: 1851,
    note: 'Used carrier pigeons to bridge telegraph gaps',
    id: 3033,
    difficulty: 'easy'
  },
  {
    name: 'The New York Times',
    country: 'USA',
    year: 1851,
    id: 3034,
    difficulty: 'easy'
  },
  {
    name: 'Wells Fargo',
    country: 'USA',
    year: 1852,
    note: 'Stagecoach express',
    id: 3035,
    difficulty: 'medium'
  },
  {
    name: 'Levi Strauss & Co.',
    country: 'USA',
    year: 1853,
    note: 'Dry goods; riveted jeans came in 1873',
    id: 3036,
    difficulty: 'easy'
  },
  {
    name: 'Louis Vuitton',
    country: 'France',
    year: 1854,
    note: 'Trunk maker',
    id: 3037,
    difficulty: 'medium'
  },
  {
    name: 'Burberry',
    country: 'United Kingdom',
    year: 1856,
    id: 3038,
    difficulty: 'medium'
  },
  {
    name: 'Credit Suisse',
    country: 'Switzerland',
    year: 1856,
    note: 'Founded to finance the Swiss railway network',
    id: 3039,
    difficulty: 'hard'
  },
  {
    name: 'UBS',
    country: 'Switzerland',
    year: 1862,
    id: 3040,
    difficulty: 'hard'
  },
  {
    name: 'Bacardi',
    country: 'Cuba',
    year: 1862,
    id: 3041,
    difficulty: 'medium'
  },
  {
    name: 'Heineken',
    country: 'Netherlands',
    year: 1864,
    id: 3042,
    difficulty: 'medium'
  },
  {
    name: 'Nokia',
    country: 'Finland',
    year: 1865,
    note: 'Started as a paper mill; later rubber boots and cables',
    id: 3043,
    difficulty: 'easy'
  },
  {
    name: 'Nestlé',
    country: 'Switzerland',
    year: 1866,
    note: 'Infant food',
    id: 3044,
    difficulty: 'easy'
  },
  {
    name: 'Jack Daniel\'s',
    country: 'USA',
    year: 1866,
    id: 3045,
    difficulty: 'medium'
  },
  {
    name: 'Goldman Sachs',
    country: 'USA',
    year: 1869,
    id: 3046,
    difficulty: 'medium'
  },
  {
    name: 'Heinz',
    country: 'USA',
    year: 1869,
    note: 'First product was horseradish, not ketchup',
    id: 3047,
    difficulty: 'medium'
  },
  {
    name: 'Mitsubishi',
    country: 'Japan',
    year: 1870,
    note: 'Shipping company',
    id: 3048,
    difficulty: 'medium'
  },
  {
    name: 'Ericsson',
    country: 'Sweden',
    year: 1876,
    note: 'Telegraph repair shop',
    id: 3049,
    difficulty: 'hard'
  },
  {
    name: 'Bell Telephone Company',
    country: 'USA',
    year: 1877,
    note: 'Ancestor of AT&T',
    id: 3050,
    difficulty: 'medium'
  },
  {
    name: 'Barilla',
    country: 'Italy',
    year: 1877,
    note: 'Bread and pasta shop in Parma',
    id: 3051,
    difficulty: 'medium'
  },
  {
    name: 'Nivea (Beiersdorf)',
    country: 'Germany',
    year: 1882,
    id: 3052,
    difficulty: 'medium'
  },
  {
    name: 'Victorinox',
    country: 'Switzerland',
    year: 1884,
    note: 'Swiss Army knife maker',
    id: 3053,
    difficulty: 'medium'
  },
  {
    name: 'Bosch',
    country: 'Germany',
    year: 1886,
    id: 3054,
    difficulty: 'medium'
  },
  {
    name: 'Johnson & Johnson',
    country: 'USA',
    year: 1886,
    id: 3055,
    difficulty: 'medium'
  },
  {
    name: 'Coca-Cola',
    country: 'USA',
    year: 1886,
    note: 'The drink; the company incorporated in 1892',
    id: 3056,
    difficulty: 'easy'
  },
  {name: 'Kodak', country: 'USA', year: 1888, id: 3057, difficulty: 'easy'},
  {
    name: 'Nintendo',
    country: 'Japan',
    year: 1889,
    note: 'Handmade hanafuda playing cards',
    id: 3058,
    difficulty: 'easy'
  },
  {
    name: 'Philips',
    country: 'Netherlands',
    year: 1891,
    note: 'Light bulbs',
    id: 3059,
    difficulty: 'medium'
  },
  {
    name: 'General Electric',
    country: 'USA',
    year: 1892,
    id: 3060,
    difficulty: 'medium'
  },
  {
    name: 'Hershey',
    country: 'USA',
    year: 1894,
    note: 'Caramel company first',
    id: 3061,
    difficulty: 'medium'
  },
  {
    name: 'Pepsi',
    country: 'USA',
    year: 1898,
    note: 'Originally \'Brad\'s Drink\'',
    id: 3062,
    difficulty: 'easy'
  },
  {name: 'Fiat', country: 'Italy', year: 1899, id: 3063, difficulty: 'easy'},
  {
    name: 'Renault',
    country: 'France',
    year: 1899,
    id: 3064,
    difficulty: 'easy'
  },
  {name: 'Ford', country: 'USA', year: 1903, id: 3065, difficulty: 'easy'},
  {
    name: 'Harley-Davidson',
    country: 'USA',
    year: 1903,
    id: 3066,
    difficulty: 'medium'
  },
  {
    name: 'Rolls-Royce',
    country: 'United Kingdom',
    year: 1904,
    id: 3067,
    difficulty: 'medium'
  },
  {
    name: 'Rolex',
    country: 'United Kingdom',
    year: 1905,
    note: 'Founded in London; moved to Geneva in 1919',
    id: 3068,
    difficulty: 'medium'
  },
  {
    name: 'Kellogg\'s',
    country: 'USA',
    year: 1906,
    note: 'Born from a sanitarium\'s health-food experiments',
    id: 3069,
    difficulty: 'easy'
  },
  {
    name: 'General Motors',
    country: 'USA',
    year: 1908,
    id: 3070,
    difficulty: 'medium'
  },
  {
    name: 'Converse',
    country: 'USA',
    year: 1908,
    note: 'Rubber galoshes before sneakers',
    id: 3071,
    difficulty: 'hard'
  },
  {
    name: 'L\'Oréal',
    country: 'France',
    year: 1909,
    note: 'Hair dye',
    id: 3072,
    difficulty: 'medium'
  },
  {
    name: 'Chanel',
    country: 'France',
    year: 1910,
    note: 'Hat shop',
    id: 3073,
    difficulty: 'medium'
  },
  {name: 'Mars', country: 'USA', year: 1911, id: 3074, difficulty: 'medium'},
  {
    name: 'IBM',
    country: 'USA',
    year: 1911,
    note: 'Tabulating machines; named IBM in 1924',
    id: 3075,
    difficulty: 'easy'
  },
  {
    name: 'Sharp',
    country: 'Japan',
    year: 1912,
    note: 'Named after the Ever-Sharp mechanical pencil',
    id: 3076,
    difficulty: 'hard'
  },
  {
    name: 'Prada',
    country: 'Italy',
    year: 1913,
    note: 'Leather goods shop in Milan',
    id: 3077,
    difficulty: 'medium'
  },
  {
    name: 'BMW',
    country: 'Germany',
    year: 1916,
    note: 'Aircraft engines; the logo\'s propeller myth came later',
    id: 3078,
    difficulty: 'easy'
  },
  {name: 'Boeing', country: 'USA', year: 1916, id: 3079, difficulty: 'easy'},
  {
    name: 'Nikon',
    country: 'Japan',
    year: 1917,
    note: 'Optical instruments for the military',
    id: 3080,
    difficulty: 'easy'
  },
  {
    name: 'Panasonic',
    country: 'Japan',
    year: 1918,
    note: 'Duplex lamp sockets',
    id: 3081,
    difficulty: 'medium'
  },
  {
    name: 'Avianca',
    country: 'Colombia',
    year: 1919,
    note: 'Second-oldest airline in the world still operating',
    id: 3082,
    difficulty: 'hard'
  },
  {
    name: 'KLM',
    country: 'Netherlands',
    year: 1919,
    note: 'Oldest airline still flying under its original name',
    id: 3083,
    difficulty: 'hard'
  },
  {
    name: 'Gucci',
    country: 'Italy',
    year: 1921,
    note: 'Luggage shop in Florence',
    id: 3084,
    difficulty: 'medium'
  },
  {
    name: 'BBC',
    country: 'United Kingdom',
    year: 1922,
    id: 3085,
    difficulty: 'medium'
  },
  {
    name: 'Walt Disney Company',
    country: 'USA',
    year: 1923,
    id: 3086,
    difficulty: 'easy'
  },
  {
    name: 'Warner Bros.',
    country: 'USA',
    year: 1923,
    id: 3087,
    difficulty: 'easy'
  },
  {
    name: 'Motorola',
    country: 'USA',
    year: 1928,
    note: 'Car radios',
    id: 3088,
    difficulty: 'medium'
  },
  {
    name: 'Unilever',
    country: 'United Kingdom',
    year: 1929,
    note: 'Merger of Dutch margarine and British soap makers',
    id: 3089,
    difficulty: 'medium'
  },
  {
    name: 'Porsche',
    country: 'Germany',
    year: 1931,
    note: 'Design consultancy; first own car in 1948',
    id: 3090,
    difficulty: 'medium'
  },
  {
    name: 'LEGO',
    country: 'Denmark',
    year: 1932,
    note: 'Wooden toys; plastic bricks from 1949',
    id: 3091,
    difficulty: 'easy'
  },
  {
    name: 'Fujifilm',
    country: 'Japan',
    year: 1934,
    id: 3092,
    difficulty: 'medium'
  },
  {
    name: 'Toyota',
    country: 'Japan',
    year: 1937,
    note: 'Spun off from a loom manufacturer',
    id: 3093,
    difficulty: 'easy'
  },
  {
    name: 'Volkswagen',
    country: 'Germany',
    year: 1937,
    id: 3094,
    difficulty: 'easy'
  },
  {name: 'Canon', country: 'Japan', year: 1937, id: 3095, difficulty: 'easy'},
  {
    name: 'Samsung',
    country: 'South Korea',
    year: 1938,
    note: 'Trading company selling dried fish and noodles',
    id: 3096,
    difficulty: 'medium'
  },
  {
    name: 'Hewlett-Packard',
    country: 'USA',
    year: 1939,
    note: 'Founded in the famous Palo Alto garage',
    id: 3097,
    difficulty: 'easy'
  },
  {
    name: 'McDonald\'s',
    country: 'USA',
    year: 1940,
    note: 'The brothers\' restaurant; Ray Kroc\'s corporation dates to 1955',
    id: 3098,
    difficulty: 'easy'
  },
  {
    name: 'IKEA',
    country: 'Sweden',
    year: 1943,
    note: 'Mail-order pens and wallets; furniture came in 1948',
    id: 3099,
    difficulty: 'easy'
  },
  {
    name: 'Mattel',
    country: 'USA',
    year: 1945,
    note: 'Picture frames; Barbie arrived in 1959',
    id: 3100,
    difficulty: 'hard'
  },
  {
    name: 'Sony',
    country: 'Japan',
    year: 1946,
    note: 'First product was a rice cooker (a failed one)',
    id: 3101,
    difficulty: 'easy'
  },
  {
    name: 'Ferrari (cars)',
    country: 'Italy',
    year: 1947,
    note: 'First car under the Ferrari name; racing team dates to 1929',
    id: 3102,
    difficulty: 'medium'
  },
  {name: 'H&M', country: 'Sweden', year: 1947, id: 3103, difficulty: 'medium'},
  {
    name: 'Honda',
    country: 'Japan',
    year: 1948,
    note: 'Motorized bicycles',
    id: 3104,
    difficulty: 'easy'
  },
  {
    name: 'Puma',
    country: 'Germany',
    year: 1948,
    note: 'Born from the Dassler brothers\' feud',
    id: 3105,
    difficulty: 'hard'
  },
  {
    name: 'Adidas',
    country: 'Germany',
    year: 1949,
    note: 'Born from the Dassler brothers\' feud',
    id: 3106,
    difficulty: 'medium'
  },
  {
    name: 'Kentucky Fried Chicken',
    country: 'USA',
    year: 1952,
    note: 'First franchise; Sanders\' original restaurant dates to 1930',
    id: 3107,
    difficulty: 'easy'
  },
  {
    name: 'Burger King',
    country: 'USA',
    year: 1954,
    id: 3108,
    difficulty: 'easy'
  },
  {
    name: 'Visa',
    country: 'USA',
    year: 1958,
    note: 'Launched as BankAmericard',
    id: 3109,
    difficulty: 'medium'
  },
  {name: 'Walmart', country: 'USA', year: 1962, id: 3110, difficulty: 'medium'},
  {
    name: 'Nike',
    country: 'USA',
    year: 1964,
    note: 'Founded as Blue Ribbon Sports; renamed in 1971',
    id: 3111,
    difficulty: 'easy'
  },
  {name: 'Subway', country: 'USA', year: 1965, id: 3112, difficulty: 'medium'},
  {
    name: 'Mastercard',
    country: 'USA',
    year: 1966,
    id: 3113,
    difficulty: 'easy'
  },
  {name: 'Intel', country: 'USA', year: 1968, id: 3114, difficulty: 'easy'},
  {
    name: 'Starbucks',
    country: 'USA',
    year: 1971,
    note: 'Sold only coffee beans at first, no drinks',
    id: 3115,
    difficulty: 'easy'
  },
  {name: 'SAP', country: 'Germany', year: 1972, id: 3116, difficulty: 'hard'},
  {name: 'Microsoft', country: 'USA', year: 1975, id: 3117, difficulty: 'easy'},
  {name: 'Apple', country: 'USA', year: 1976, id: 3118, difficulty: 'easy'},
  {name: 'Oracle', country: 'USA', year: 1977, id: 3119, difficulty: 'medium'},
  {name: 'CNN', country: 'USA', year: 1980, id: 3120, difficulty: 'medium'},
  {name: 'Adobe', country: 'USA', year: 1982, id: 3121, difficulty: 'hard'},
  {
    name: 'Swatch',
    country: 'Switzerland',
    year: 1983,
    id: 3122,
    difficulty: 'medium'
  },
  {
    name: 'Dell',
    country: 'USA',
    year: 1984,
    note: 'Started in a university dorm room',
    id: 3123,
    difficulty: 'medium'
  },
  {name: 'Cisco', country: 'USA', year: 1984, id: 3124, difficulty: 'hard'},
  {name: 'Lenovo', country: 'China', year: 1984, id: 3125, difficulty: 'hard'},
  {
    name: 'Huawei',
    country: 'China',
    year: 1987,
    id: 3126,
    difficulty: 'medium'
  },
  {name: 'Nvidia', country: 'USA', year: 1993, id: 3127, difficulty: 'medium'},
  {
    name: 'Amazon',
    country: 'USA',
    year: 1994,
    note: 'Online bookstore',
    id: 3128,
    difficulty: 'easy'
  },
  {name: 'Yahoo', country: 'USA', year: 1994, id: 3129, difficulty: 'medium'},
  {name: 'eBay', country: 'USA', year: 1995, id: 3130, difficulty: 'medium'},
  {
    name: 'Netflix',
    country: 'USA',
    year: 1997,
    note: 'DVD rental by mail',
    id: 3131,
    difficulty: 'medium'
  },
  {name: 'Google', country: 'USA', year: 1998, id: 3132, difficulty: 'easy'},
  {
    name: 'PayPal',
    country: 'USA',
    year: 1998,
    note: 'Founded as Confinity',
    id: 3133,
    difficulty: 'medium'
  },
  {name: 'Tencent', country: 'China', year: 1998, id: 3134, difficulty: 'hard'},
  {
    name: 'Alibaba',
    country: 'China',
    year: 1999,
    id: 3135,
    difficulty: 'medium'
  },
  {name: 'SpaceX', country: 'USA', year: 2002, id: 3136, difficulty: 'easy'},
  {name: 'Tesla', country: 'USA', year: 2003, id: 3137, difficulty: 'easy'},
  {name: 'Facebook', country: 'USA', year: 2004, id: 3138, difficulty: 'easy'},
  {name: 'YouTube', country: 'USA', year: 2005, id: 3139, difficulty: 'easy'},
  {
    name: 'Spotify',
    country: 'Sweden',
    year: 2006,
    id: 3140,
    difficulty: 'medium'
  },
  {
    name: 'Airbnb',
    country: 'USA',
    year: 2008,
    note: 'Air mattresses in the founders\' apartment',
    id: 3141,
    difficulty: 'medium'
  },
  {name: 'Uber', country: 'USA', year: 2009, id: 3142, difficulty: 'medium'},
  {
    name: 'WhatsApp',
    country: 'USA',
    year: 2009,
    id: 3143,
    difficulty: 'medium'
  },
  {
    name: 'Instagram',
    country: 'USA',
    year: 2010,
    note: 'Started as check-in app Burbn',
    id: 3144,
    difficulty: 'easy'
  },
  {name: 'Zoom', country: 'USA', year: 2011, id: 3145, difficulty: 'easy'},
  {
    name: 'ByteDance (TikTok)',
    country: 'China',
    year: 2012,
    id: 3146,
    difficulty: 'easy'
  },
  {name: 'OpenAI', country: 'USA', year: 2015, id: 3147, difficulty: 'easy'},
];
