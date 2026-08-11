import {type Difficulty} from './difficulty.js';

export interface Structure {
  name: string;
  country: string;  // Uses an en dash ("A–B") for cross-border structures
  place?: string;   // Country-specific location (city, region); omitted for
                    // city-states and country-wide structures
  year: number;     // Conventional completion year; negative values are BC
  approximate?: boolean;  // True for ancient structures dated by archaeology
                          // rather than records
  id: number;
  difficulty: Difficulty;
}

//[cite: 1]
export const structures: Structure[] = [
  {
    name: 'Great Pyramid of Giza',
    place: 'Giza',
    country: 'Egypt',
    year: -2560,
    approximate: true,
    id: 6000,
    difficulty: 'easy'
  },
  {
    name: 'Stonehenge',
    place: 'Wiltshire',
    country: 'United Kingdom',
    year: -2500,
    approximate: true,
    id: 6001,
    difficulty: 'easy'
  },
  {
    name: 'Abu Simbel temples',
    place: 'Nubia',
    country: 'Egypt',
    year: -1244,
    approximate: true,
    id: 6002,
    difficulty: 'medium'
  },
  {
    name: 'Temple of Karnak (Great Hypostyle Hall)',
    place: 'Luxor',
    country: 'Egypt',
    year: -1224,
    approximate: true,
    id: 6003,
    difficulty: 'hard'
  },
  {
    name: 'Parthenon',
    place: 'Athens',
    country: 'Greece',
    year: -432,
    id: 6004,
    difficulty: 'easy'
  },
  {
    name: 'Great Wall of China (Qin unification)',
    country: 'China',
    year: -206,
    approximate: true,
    id: 6005,
    difficulty: 'easy'
  },
  {
    name: 'Petra (Al-Khazneh / Treasury)',
    place: 'Petra',
    country: 'Jordan',
    year: -100,
    approximate: true,
    id: 6006,
    difficulty: 'medium'
  },
  {
    name: 'Pont du Gard',
    place: 'Occitanie',
    country: 'France',
    year: 60,
    approximate: true,
    id: 6007,
    difficulty: 'hard'
  },
  {
    name: 'Colosseum',
    place: 'Rome',
    country: 'Italy',
    year: 80,
    id: 6008,
    difficulty: 'easy'
  },
  {
    name: 'Pantheon',
    place: 'Rome',
    country: 'Italy',
    year: 126,
    id: 6009,
    difficulty: 'easy'
  },
  {
    name: 'Teotihuacan (Pyramid of the Sun)',
    place: 'near Mexico City',
    country: 'Mexico',
    year: 200,
    approximate: true,
    id: 6010,
    difficulty: 'medium'
  },
  {
    name: 'Hagia Sophia',
    place: 'Istanbul',
    country: 'Turkey',
    year: 537,
    id: 6011,
    difficulty: 'medium'
  },
  {
    name: 'Horyu-ji temple',
    place: 'Nara',
    country: 'Japan',
    year: 607,
    id: 6012,
    difficulty: 'hard'
  },
  {
    name: 'Dome of the Rock',
    place: 'Jerusalem',
    country: 'Israel/Palestine',
    year: 691,
    id: 6013,
    difficulty: 'hard'
  },
  {
    name: 'Borobudur',
    place: 'Java',
    country: 'Indonesia',
    year: 825,
    approximate: true,
    id: 6014,
    difficulty: 'hard'
  },
  {
    name: 'Great Mosque of Córdoba (final expansion)',
    place: 'Córdoba',
    country: 'Spain',
    year: 987,
    id: 6015,
    difficulty: 'hard'
  },
  {
    name: 'Chichen Itza (El Castillo)',
    place: 'Yucatán',
    country: 'Mexico',
    year: 1000,
    approximate: true,
    id: 6016,
    difficulty: 'medium'
  },
  {
    name: 'Tower of London (White Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1078,
    id: 6017,
    difficulty: 'medium'
  },
  {
    name: 'Angkor Wat',
    place: 'Siem Reap',
    country: 'Cambodia',
    year: 1150,
    approximate: true,
    id: 6018,
    difficulty: 'medium'
  },
  {
    name: 'Westminster Abbey (present church)',
    place: 'London',
    country: 'United Kingdom',
    year: 1269,
    id: 6019,
    difficulty: 'hard'
  },
  {
    name: 'Notre-Dame de Paris',
    place: 'Paris',
    country: 'France',
    year: 1345,
    id: 6020,
    difficulty: 'easy'
  },
  {
    name: 'Alhambra (Nasrid palaces)',
    place: 'Granada',
    country: 'Spain',
    year: 1358,
    approximate: true,
    id: 6021,
    difficulty: 'medium'
  },
  {
    name: 'Leaning Tower of Pisa',
    place: 'Pisa',
    country: 'Italy',
    year: 1372,
    id: 6022,
    difficulty: 'easy'
  },
  {
    name: 'Golden Pavilion (Kinkaku-ji)',
    place: 'Kyoto',
    country: 'Japan',
    year: 1397,
    id: 6023,
    difficulty: 'hard'
  },
  {
    name: 'Charles Bridge',
    place: 'Prague',
    country: 'Czech Republic',
    year: 1402,
    id: 6024,
    difficulty: 'hard'
  },
  {
    name: 'Duomo di Milano (consecration)',
    place: 'Milan',
    country: 'Italy',
    year: 1418,
    id: 6025,
    difficulty: 'medium'
  },
  {
    name: 'Forbidden City',
    place: 'Beijing',
    country: 'China',
    year: 1420,
    id: 6026,
    difficulty: 'medium'
  },
  {
    name: 'Brunelleschi\'s Dome (Florence Cathedral)',
    place: 'Florence',
    country: 'Italy',
    year: 1436,
    id: 6027,
    difficulty: 'medium'
  },
  {
    name: 'Machu Picchu',
    place: 'Cusco Region',
    country: 'Peru',
    year: 1450,
    approximate: true,
    id: 6028,
    difficulty: 'easy'
  },
  {
    name: 'Topkapi Palace',
    place: 'Istanbul',
    country: 'Turkey',
    year: 1465,
    id: 6029,
    difficulty: 'hard'
  },
  {
    name: 'Kremlin walls and towers',
    place: 'Moscow',
    country: 'Russia',
    year: 1495,
    id: 6030,
    difficulty: 'hard'
  },
  {
    name: 'Moai statues of Easter Island (peak period)',
    place: 'Easter Island',
    country: 'Chile',
    year: 1500,
    approximate: true,
    id: 6031,
    difficulty: 'easy'
  },
  {
    name: 'St. Basil\'s Cathedral',
    place: 'Moscow',
    country: 'Russia',
    year: 1561,
    id: 6032,
    difficulty: 'medium'
  },
  {
    name: 'Rialto Bridge',
    place: 'Venice',
    country: 'Italy',
    year: 1591,
    id: 6033,
    difficulty: 'medium'
  },
  {
    name: 'Himeji Castle (main keep)',
    place: 'Himeji',
    country: 'Japan',
    year: 1609,
    id: 6034,
    difficulty: 'hard'
  },
  {
    name: 'Blue Mosque',
    place: 'Istanbul',
    country: 'Turkey',
    year: 1616,
    id: 6035,
    difficulty: 'medium'
  },
  {
    name: 'St. Peter\'s Basilica',
    country: 'Vatican City',
    year: 1626,
    id: 6036,
    difficulty: 'medium'
  },
  {
    name: 'Taj Mahal',
    place: 'Agra',
    country: 'India',
    year: 1653,
    id: 6037,
    difficulty: 'easy'
  },
  {
    name: 'Palace of Versailles (main expansion)',
    place: 'Versailles',
    country: 'France',
    year: 1682,
    id: 6038,
    difficulty: 'easy'
  },
  {
    name: 'Potala Palace (rebuilt)',
    place: 'Lhasa, Tibet',
    country: 'China',
    year: 1694,
    id: 6039,
    difficulty: 'hard'
  },
  {
    name: 'St. Paul\'s Cathedral',
    place: 'London',
    country: 'United Kingdom',
    year: 1710,
    id: 6040,
    difficulty: 'medium'
  },
  {
    name: 'Schönbrunn Palace',
    place: 'Vienna',
    country: 'Austria',
    year: 1749,
    id: 6041,
    difficulty: 'hard'
  },
  {
    name: 'Brandenburg Gate',
    place: 'Berlin',
    country: 'Germany',
    year: 1791,
    id: 6042,
    difficulty: 'easy'
  },
  {
    name: 'The White House',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1800,
    id: 6043,
    difficulty: 'easy'
  },
  {
    name: 'United States Capitol (original building)',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1826,
    id: 6044,
    difficulty: 'hard'
  },
  {
    name: 'Arc de Triomphe',
    place: 'Paris',
    country: 'France',
    year: 1836,
    id: 6045,
    difficulty: 'medium'
  },
  {
    name: 'Buckingham Palace (as royal residence)',
    place: 'London',
    country: 'United Kingdom',
    year: 1837,
    id: 6046,
    difficulty: 'medium'
  },
  {
    name: 'Big Ben (Elizabeth Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1859,
    id: 6047,
    difficulty: 'easy'
  },
  {
    name: 'Houses of Parliament (Palace of Westminster, rebuilt)',
    place: 'London',
    country: 'United Kingdom',
    year: 1870,
    id: 6048,
    difficulty: 'hard'
  },
  {
    name: 'Brooklyn Bridge',
    place: 'New York',
    country: 'USA',
    year: 1883,
    id: 6049,
    difficulty: 'medium'
  },
  {
    name: 'Neuschwanstein Castle',
    place: 'Bavaria',
    country: 'Germany',
    year: 1886,
    id: 6050,
    difficulty: 'medium'
  },
  {
    name: 'Statue of Liberty',
    place: 'New York',
    country: 'USA',
    year: 1886,
    id: 6051,
    difficulty: 'easy'
  },
  {
    name: 'Eiffel Tower',
    place: 'Paris',
    country: 'France',
    year: 1889,
    id: 6052,
    difficulty: 'easy'
  },
  {
    name: 'Tower Bridge',
    place: 'London',
    country: 'United Kingdom',
    year: 1894,
    id: 6053,
    difficulty: 'medium'
  },
  {
    name: 'Reichstag building',
    place: 'Berlin',
    country: 'Germany',
    year: 1894,
    id: 6054,
    difficulty: 'medium'
  },
  {
    name: 'Flatiron Building',
    place: 'New York',
    country: 'USA',
    year: 1902,
    id: 6055,
    difficulty: 'hard'
  },
  {
    name: 'Grand Central Terminal',
    place: 'New York',
    country: 'USA',
    year: 1913,
    id: 6056,
    difficulty: 'medium'
  },
  {
    name: 'Panama Canal',
    country: 'Panama',
    year: 1914,
    id: 6057,
    difficulty: 'easy'
  },
  {
    name: 'Trans-Siberian Railway',
    country: 'Russia',
    year: 1916,
    id: 6058,
    difficulty: 'hard'
  },
  {
    name: 'Lincoln Memorial',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1922,
    id: 6059,
    difficulty: 'hard'
  },
  {
    name: 'Chrysler Building',
    place: 'New York',
    country: 'USA',
    year: 1930,
    id: 6060,
    difficulty: 'medium'
  },
  {
    name: 'Empire State Building',
    place: 'New York',
    country: 'USA',
    year: 1931,
    id: 6061,
    difficulty: 'easy'
  },
  {
    name: 'Christ the Redeemer',
    place: 'Rio de Janeiro',
    country: 'Brazil',
    year: 1931,
    id: 6062,
    difficulty: 'easy'
  },
  {
    name: 'Sydney Harbour Bridge',
    place: 'Sydney',
    country: 'Australia',
    year: 1932,
    id: 6063,
    difficulty: 'medium'
  },
  {
    name: 'Hoover Dam',
    place: 'Nevada–Arizona border',
    country: 'USA',
    year: 1936,
    id: 6064,
    difficulty: 'medium'
  },
  {
    name: 'Golden Gate Bridge',
    place: 'San Francisco',
    country: 'USA',
    year: 1937,
    id: 6065,
    difficulty: 'easy'
  },
  {
    name: 'Fallingwater',
    place: 'Pennsylvania',
    country: 'USA',
    year: 1937,
    id: 6066,
    difficulty: 'hard'
  },
  {
    name: 'Mount Rushmore',
    place: 'South Dakota',
    country: 'USA',
    year: 1941,
    id: 6067,
    difficulty: 'hard'
  },
  {
    name: 'The Pentagon',
    place: 'Arlington, Virginia',
    country: 'USA',
    year: 1943,
    id: 6068,
    difficulty: 'medium'
  },
  {
    name: 'United Nations Headquarters',
    place: 'New York',
    country: 'USA',
    year: 1952,
    id: 6069,
    difficulty: 'medium'
  },
  {
    name: 'Seagram Building',
    place: 'New York',
    country: 'USA',
    year: 1958,
    id: 6070,
    difficulty: 'hard'
  },
  {
    name: 'Atomium',
    place: 'Brussels',
    country: 'Belgium',
    year: 1958,
    id: 6071,
    difficulty: 'medium'
  },
  {
    name: 'Guggenheim Museum',
    place: 'New York',
    country: 'USA',
    year: 1959,
    id: 6072,
    difficulty: 'hard'
  },
  {
    name: 'Brasília (Congresso Nacional)',
    place: 'Brasília',
    country: 'Brazil',
    year: 1960,
    id: 6073,
    difficulty: 'hard'
  },
  {
    name: 'Berlin Wall',
    place: 'Berlin',
    country: 'Germany',
    year: 1961,
    id: 6074,
    difficulty: 'easy'
  },
  {
    name: 'Space Needle',
    place: 'Seattle',
    country: 'USA',
    year: 1962,
    id: 6075,
    difficulty: 'medium'
  },
  {
    name: 'Gateway Arch',
    place: 'St. Louis',
    country: 'USA',
    year: 1965,
    id: 6076,
    difficulty: 'hard'
  },
  {
    name: 'Habitat 67',
    place: 'Montreal',
    country: 'Canada',
    year: 1967,
    id: 6077,
    difficulty: 'hard'
  },
  {
    name: 'Madison Square Garden (current)',
    place: 'New York',
    country: 'USA',
    year: 1968,
    id: 6078,
    difficulty: 'hard'
  },
  {
    name: 'Transamerica Pyramid',
    place: 'San Francisco',
    country: 'USA',
    year: 1972,
    id: 6079,
    difficulty: 'medium'
  },
  {
    name: 'World Trade Center (Twin Towers)',
    place: 'New York',
    country: 'USA',
    year: 1973,
    id: 6080,
    difficulty: 'easy'
  },
  {
    name: 'Sydney Opera House',
    place: 'Sydney',
    country: 'Australia',
    year: 1973,
    id: 6081,
    difficulty: 'easy'
  },
  {
    name: 'Sears Tower (Willis Tower)',
    place: 'Chicago',
    country: 'USA',
    year: 1973,
    id: 6082,
    difficulty: 'medium'
  },
  {
    name: 'CN Tower',
    place: 'Toronto',
    country: 'Canada',
    year: 1976,
    id: 6083,
    difficulty: 'hard'
  },
  {
    name: 'Centre Pompidou',
    place: 'Paris',
    country: 'France',
    year: 1977,
    id: 6084,
    difficulty: 'hard'
  },
  {
    name: 'Lotus Temple',
    place: 'New Delhi',
    country: 'India',
    year: 1986,
    id: 6085,
    difficulty: 'hard'
  },
  {
    name: 'Louvre Pyramid',
    place: 'Paris',
    country: 'France',
    year: 1989,
    id: 6086,
    difficulty: 'medium'
  },
  {
    name: 'Bank of China Tower',
    place: 'Hong Kong',
    country: 'China',
    year: 1990,
    id: 6087,
    difficulty: 'hard'
  },
  {
    name: 'Channel Tunnel',
    place: 'beneath the English Channel',
    country: 'United Kingdom–France',
    year: 1994,
    id: 6088,
    difficulty: 'medium'
  },
  {
    name: 'Kansai International Airport (artificial island)',
    place: 'Osaka',
    country: 'Japan',
    year: 1994,
    id: 6089,
    difficulty: 'hard'
  },
  {
    name: 'Guggenheim Museum Bilbao',
    place: 'Bilbao',
    country: 'Spain',
    year: 1997,
    id: 6090,
    difficulty: 'medium'
  },
  {
    name: 'Petronas Towers',
    place: 'Kuala Lumpur',
    country: 'Malaysia',
    year: 1998,
    id: 6091,
    difficulty: 'medium'
  },
  {
    name: 'Burj Al Arab',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 1999,
    id: 6092,
    difficulty: 'medium'
  },
  {
    name: 'Øresund Bridge',
    place: 'across the Øresund strait',
    country: 'Denmark–Sweden',
    year: 2000,
    id: 6093,
    difficulty: 'hard'
  },
  {
    name: 'London Eye',
    place: 'London',
    country: 'United Kingdom',
    year: 2000,
    id: 6094,
    difficulty: 'medium'
  },
  {
    name: 'Walt Disney Concert Hall',
    place: 'Los Angeles',
    country: 'USA',
    year: 2003,
    id: 6095,
    difficulty: 'hard'
  },
  {
    name: 'Millau Viaduct',
    place: 'Aveyron',
    country: 'France',
    year: 2004,
    id: 6096,
    difficulty: 'hard'
  },
  {
    name: 'Taipei 101',
    place: 'Taipei',
    country: 'Taiwan',
    year: 2004,
    id: 6097,
    difficulty: 'medium'
  },
  {
    name: 'Allianz Arena',
    place: 'Munich',
    country: 'Germany',
    year: 2005,
    id: 6098,
    difficulty: 'hard'
  },
  {
    name: 'Wembley Stadium (new)',
    place: 'London',
    country: 'United Kingdom',
    year: 2007,
    id: 6099,
    difficulty: 'medium'
  },
  {
    name: 'Beijing National Stadium (Bird\'s Nest)',
    place: 'Beijing',
    country: 'China',
    year: 2008,
    id: 6100,
    difficulty: 'hard'
  },
  {
    name: 'Burj Khalifa',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 2010,
    id: 6101,
    difficulty: 'easy'
  },
  {
    name: 'Marina Bay Sands',
    country: 'Singapore',
    year: 2010,
    id: 6102,
    difficulty: 'medium'
  },
  {
    name: 'The Shard',
    place: 'London',
    country: 'United Kingdom',
    year: 2012,
    id: 6103,
    difficulty: 'hard'
  },
  {
    name: 'One World Trade Center',
    place: 'New York',
    country: 'USA',
    year: 2014,
    id: 6104,
    difficulty: 'easy'
  },
  {
    name: 'Gotthard Base Tunnel',
    place: 'Uri–Ticino',
    country: 'Switzerland',
    year: 2016,
    id: 6105,
    difficulty: 'hard'
  },
  {
    name: 'Elbphilharmonie',
    place: 'Hamburg',
    country: 'Germany',
    year: 2017,
    id: 6106,
    difficulty: 'hard'
  },
  {
    name: 'Crossrail / Elizabeth Line',
    place: 'London',
    country: 'United Kingdom',
    year: 2022,
    id: 6107,
    difficulty: 'hard'
  },
  {
    name: 'Sagrada Família (tallest tower completed)',
    place: 'Barcelona',
    country: 'Spain',
    year: 2023,
    id: 6108,
    difficulty: 'easy'
  }
];
