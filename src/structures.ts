import {type Difficulty} from './difficulty.js';

export interface Structure {
  name: string;
  country: string;  // Uses an en dash ("A–B") for cross-border structures
  place?: string;   // Country-specific location (city, region); omitted for
                    // city-states and country-wide structures
  year: number;     // Conventional completion year; negative values are BC
  approximate?: boolean;  // True for ancient structures dated by archaeology
                          // rather than records
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
    difficulty: 'easy'
  },
  {
    name: 'Stonehenge',
    place: 'Wiltshire',
    country: 'United Kingdom',
    year: -2500,
    approximate: true,
    difficulty: 'easy'
  },
  {
    name: 'Abu Simbel temples',
    place: 'Nubia',
    country: 'Egypt',
    year: -1244,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Temple of Karnak (Great Hypostyle Hall)',
    place: 'Luxor',
    country: 'Egypt',
    year: -1224,
    approximate: true,
    difficulty: 'hard'
  },
  {
    name: 'Parthenon',
    place: 'Athens',
    country: 'Greece',
    year: -432,
    difficulty: 'easy'
  },
  {
    name: 'Great Wall of China (Qin unification)',
    country: 'China',
    year: -206,
    approximate: true,
    difficulty: 'easy'
  },
  {
    name: 'Petra (Al-Khazneh / Treasury)',
    place: 'Petra',
    country: 'Jordan',
    year: -100,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Pont du Gard',
    place: 'Occitanie',
    country: 'France',
    year: 60,
    approximate: true,
    difficulty: 'hard'
  },
  {
    name: 'Colosseum',
    place: 'Rome',
    country: 'Italy',
    year: 80,
    difficulty: 'easy'
  },
  {
    name: 'Pantheon',
    place: 'Rome',
    country: 'Italy',
    year: 126,
    difficulty: 'easy'
  },
  {
    name: 'Teotihuacan (Pyramid of the Sun)',
    place: 'near Mexico City',
    country: 'Mexico',
    year: 200,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Hagia Sophia',
    place: 'Istanbul',
    country: 'Turkey',
    year: 537,
    difficulty: 'medium'
  },
  {
    name: 'Horyu-ji temple',
    place: 'Nara',
    country: 'Japan',
    year: 607,
    difficulty: 'hard'
  },
  {
    name: 'Dome of the Rock',
    place: 'Jerusalem',
    country: 'Israel/Palestine',
    year: 691,
    difficulty: 'hard'
  },
  {
    name: 'Borobudur',
    place: 'Java',
    country: 'Indonesia',
    year: 825,
    approximate: true,
    difficulty: 'hard'
  },
  {
    name: 'Great Mosque of Córdoba (final expansion)',
    place: 'Córdoba',
    country: 'Spain',
    year: 987,
    difficulty: 'hard'
  },
  {
    name: 'Chichen Itza (El Castillo)',
    place: 'Yucatán',
    country: 'Mexico',
    year: 1000,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Tower of London (White Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1078,
    difficulty: 'medium'
  },
  {
    name: 'Angkor Wat',
    place: 'Siem Reap',
    country: 'Cambodia',
    year: 1150,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Westminster Abbey (present church)',
    place: 'London',
    country: 'United Kingdom',
    year: 1269,
    difficulty: 'hard'
  },
  {
    name: 'Notre-Dame de Paris',
    place: 'Paris',
    country: 'France',
    year: 1345,
    difficulty: 'easy'
  },
  {
    name: 'Alhambra (Nasrid palaces)',
    place: 'Granada',
    country: 'Spain',
    year: 1358,
    approximate: true,
    difficulty: 'medium'
  },
  {
    name: 'Leaning Tower of Pisa',
    place: 'Pisa',
    country: 'Italy',
    year: 1372,
    difficulty: 'easy'
  },
  {
    name: 'Golden Pavilion (Kinkaku-ji)',
    place: 'Kyoto',
    country: 'Japan',
    year: 1397,
    difficulty: 'hard'
  },
  {
    name: 'Charles Bridge',
    place: 'Prague',
    country: 'Czech Republic',
    year: 1402,
    difficulty: 'hard'
  },
  {
    name: 'Duomo di Milano (consecration)',
    place: 'Milan',
    country: 'Italy',
    year: 1418,
    difficulty: 'medium'
  },
  {
    name: 'Forbidden City',
    place: 'Beijing',
    country: 'China',
    year: 1420,
    difficulty: 'medium'
  },
  {
    name: 'Brunelleschi\'s Dome (Florence Cathedral)',
    place: 'Florence',
    country: 'Italy',
    year: 1436,
    difficulty: 'medium'
  },
  {
    name: 'Machu Picchu',
    place: 'Cusco Region',
    country: 'Peru',
    year: 1450,
    approximate: true,
    difficulty: 'easy'
  },
  {
    name: 'Topkapi Palace',
    place: 'Istanbul',
    country: 'Turkey',
    year: 1465,
    difficulty: 'hard'
  },
  {
    name: 'Kremlin walls and towers',
    place: 'Moscow',
    country: 'Russia',
    year: 1495,
    difficulty: 'hard'
  },
  {
    name: 'Moai statues of Easter Island (peak period)',
    place: 'Easter Island',
    country: 'Chile',
    year: 1500,
    approximate: true,
    difficulty: 'easy'
  },
  {
    name: 'St. Basil\'s Cathedral',
    place: 'Moscow',
    country: 'Russia',
    year: 1561,
    difficulty: 'medium'
  },
  {
    name: 'Rialto Bridge',
    place: 'Venice',
    country: 'Italy',
    year: 1591,
    difficulty: 'medium'
  },
  {
    name: 'Himeji Castle (main keep)',
    place: 'Himeji',
    country: 'Japan',
    year: 1609,
    difficulty: 'hard'
  },
  {
    name: 'Blue Mosque',
    place: 'Istanbul',
    country: 'Turkey',
    year: 1616,
    difficulty: 'medium'
  },
  {
    name: 'St. Peter\'s Basilica',
    country: 'Vatican City',
    year: 1626,
    difficulty: 'medium'
  },
  {
    name: 'Taj Mahal',
    place: 'Agra',
    country: 'India',
    year: 1653,
    difficulty: 'easy'
  },
  {
    name: 'Palace of Versailles (main expansion)',
    place: 'Versailles',
    country: 'France',
    year: 1682,
    difficulty: 'easy'
  },
  {
    name: 'Potala Palace (rebuilt)',
    place: 'Lhasa, Tibet',
    country: 'China',
    year: 1694,
    difficulty: 'hard'
  },
  {
    name: 'St. Paul\'s Cathedral',
    place: 'London',
    country: 'United Kingdom',
    year: 1710,
    difficulty: 'medium'
  },
  {
    name: 'Schönbrunn Palace',
    place: 'Vienna',
    country: 'Austria',
    year: 1749,
    difficulty: 'hard'
  },
  {
    name: 'Brandenburg Gate',
    place: 'Berlin',
    country: 'Germany',
    year: 1791,
    difficulty: 'easy'
  },
  {
    name: 'The White House',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1800,
    difficulty: 'easy'
  },
  {
    name: 'United States Capitol (original building)',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1826,
    difficulty: 'hard'
  },
  {
    name: 'Arc de Triomphe',
    place: 'Paris',
    country: 'France',
    year: 1836,
    difficulty: 'medium'
  },
  {
    name: 'Buckingham Palace (as royal residence)',
    place: 'London',
    country: 'United Kingdom',
    year: 1837,
    difficulty: 'medium'
  },
  {
    name: 'Big Ben (Elizabeth Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1859,
    difficulty: 'easy'
  },
  {
    name: 'Houses of Parliament (Palace of Westminster, rebuilt)',
    place: 'London',
    country: 'United Kingdom',
    year: 1870,
    difficulty: 'hard'
  },
  {
    name: 'Brooklyn Bridge',
    place: 'New York',
    country: 'USA',
    year: 1883,
    difficulty: 'medium'
  },
  {
    name: 'Neuschwanstein Castle',
    place: 'Bavaria',
    country: 'Germany',
    year: 1886,
    difficulty: 'medium'
  },
  {
    name: 'Statue of Liberty',
    place: 'New York',
    country: 'USA',
    year: 1886,
    difficulty: 'easy'
  },
  {
    name: 'Eiffel Tower',
    place: 'Paris',
    country: 'France',
    year: 1889,
    difficulty: 'easy'
  },
  {
    name: 'Tower Bridge',
    place: 'London',
    country: 'United Kingdom',
    year: 1894,
    difficulty: 'medium'
  },
  {
    name: 'Reichstag building',
    place: 'Berlin',
    country: 'Germany',
    year: 1894,
    difficulty: 'medium'
  },
  {
    name: 'Flatiron Building',
    place: 'New York',
    country: 'USA',
    year: 1902,
    difficulty: 'hard'
  },
  {
    name: 'Grand Central Terminal',
    place: 'New York',
    country: 'USA',
    year: 1913,
    difficulty: 'medium'
  },
  {name: 'Panama Canal', country: 'Panama', year: 1914, difficulty: 'easy'},
  {
    name: 'Trans-Siberian Railway',
    country: 'Russia',
    year: 1916,
    difficulty: 'hard'
  },
  {
    name: 'Lincoln Memorial',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1922,
    difficulty: 'hard'
  },
  {
    name: 'Chrysler Building',
    place: 'New York',
    country: 'USA',
    year: 1930,
    difficulty: 'medium'
  },
  {
    name: 'Empire State Building',
    place: 'New York',
    country: 'USA',
    year: 1931,
    difficulty: 'easy'
  },
  {
    name: 'Christ the Redeemer',
    place: 'Rio de Janeiro',
    country: 'Brazil',
    year: 1931,
    difficulty: 'easy'
  },
  {
    name: 'Sydney Harbour Bridge',
    place: 'Sydney',
    country: 'Australia',
    year: 1932,
    difficulty: 'medium'
  },
  {
    name: 'Hoover Dam',
    place: 'Nevada–Arizona border',
    country: 'USA',
    year: 1936,
    difficulty: 'medium'
  },
  {
    name: 'Golden Gate Bridge',
    place: 'San Francisco',
    country: 'USA',
    year: 1937,
    difficulty: 'easy'
  },
  {
    name: 'Fallingwater',
    place: 'Pennsylvania',
    country: 'USA',
    year: 1937,
    difficulty: 'hard'
  },
  {
    name: 'Mount Rushmore',
    place: 'South Dakota',
    country: 'USA',
    year: 1941,
    difficulty: 'hard'
  },
  {
    name: 'The Pentagon',
    place: 'Arlington, Virginia',
    country: 'USA',
    year: 1943,
    difficulty: 'medium'
  },
  {
    name: 'United Nations Headquarters',
    place: 'New York',
    country: 'USA',
    year: 1952,
    difficulty: 'medium'
  },
  {
    name: 'Seagram Building',
    place: 'New York',
    country: 'USA',
    year: 1958,
    difficulty: 'hard'
  },
  {
    name: 'Atomium',
    place: 'Brussels',
    country: 'Belgium',
    year: 1958,
    difficulty: 'medium'
  },
  {
    name: 'Guggenheim Museum',
    place: 'New York',
    country: 'USA',
    year: 1959,
    difficulty: 'hard'
  },
  {
    name: 'Brasília (Congresso Nacional)',
    place: 'Brasília',
    country: 'Brazil',
    year: 1960,
    difficulty: 'hard'
  },
  {
    name: 'Berlin Wall',
    place: 'Berlin',
    country: 'Germany',
    year: 1961,
    difficulty: 'easy'
  },
  {
    name: 'Space Needle',
    place: 'Seattle',
    country: 'USA',
    year: 1962,
    difficulty: 'medium'
  },
  {
    name: 'Gateway Arch',
    place: 'St. Louis',
    country: 'USA',
    year: 1965,
    difficulty: 'hard'
  },
  {
    name: 'Habitat 67',
    place: 'Montreal',
    country: 'Canada',
    year: 1967,
    difficulty: 'hard'
  },
  {
    name: 'Madison Square Garden (current)',
    place: 'New York',
    country: 'USA',
    year: 1968,
    difficulty: 'hard'
  },
  {
    name: 'Transamerica Pyramid',
    place: 'San Francisco',
    country: 'USA',
    year: 1972,
    difficulty: 'medium'
  },
  {
    name: 'World Trade Center (Twin Towers)',
    place: 'New York',
    country: 'USA',
    year: 1973,
    difficulty: 'easy'
  },
  {
    name: 'Sydney Opera House',
    place: 'Sydney',
    country: 'Australia',
    year: 1973,
    difficulty: 'easy'
  },
  {
    name: 'Sears Tower (Willis Tower)',
    place: 'Chicago',
    country: 'USA',
    year: 1973,
    difficulty: 'medium'
  },
  {
    name: 'CN Tower',
    place: 'Toronto',
    country: 'Canada',
    year: 1976,
    difficulty: 'hard'
  },
  {
    name: 'Centre Pompidou',
    place: 'Paris',
    country: 'France',
    year: 1977,
    difficulty: 'hard'
  },
  {
    name: 'Lotus Temple',
    place: 'New Delhi',
    country: 'India',
    year: 1986,
    difficulty: 'hard'
  },
  {
    name: 'Louvre Pyramid',
    place: 'Paris',
    country: 'France',
    year: 1989,
    difficulty: 'medium'
  },
  {
    name: 'Bank of China Tower',
    place: 'Hong Kong',
    country: 'China',
    year: 1990,
    difficulty: 'hard'
  },
  {
    name: 'Channel Tunnel',
    place: 'beneath the English Channel',
    country: 'United Kingdom–France',
    year: 1994,
    difficulty: 'medium'
  },
  {
    name: 'Kansai International Airport (artificial island)',
    place: 'Osaka',
    country: 'Japan',
    year: 1994,
    difficulty: 'hard'
  },
  {
    name: 'Guggenheim Museum Bilbao',
    place: 'Bilbao',
    country: 'Spain',
    year: 1997,
    difficulty: 'medium'
  },
  {
    name: 'Petronas Towers',
    place: 'Kuala Lumpur',
    country: 'Malaysia',
    year: 1998,
    difficulty: 'medium'
  },
  {
    name: 'Burj Al Arab',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 1999,
    difficulty: 'medium'
  },
  {
    name: 'Øresund Bridge',
    place: 'across the Øresund strait',
    country: 'Denmark–Sweden',
    year: 2000,
    difficulty: 'hard'
  },
  {
    name: 'London Eye',
    place: 'London',
    country: 'United Kingdom',
    year: 2000,
    difficulty: 'medium'
  },
  {
    name: 'Walt Disney Concert Hall',
    place: 'Los Angeles',
    country: 'USA',
    year: 2003,
    difficulty: 'hard'
  },
  {
    name: 'Millau Viaduct',
    place: 'Aveyron',
    country: 'France',
    year: 2004,
    difficulty: 'hard'
  },
  {
    name: 'Taipei 101',
    place: 'Taipei',
    country: 'Taiwan',
    year: 2004,
    difficulty: 'medium'
  },
  {
    name: 'Allianz Arena',
    place: 'Munich',
    country: 'Germany',
    year: 2005,
    difficulty: 'hard'
  },
  {
    name: 'Wembley Stadium (new)',
    place: 'London',
    country: 'United Kingdom',
    year: 2007,
    difficulty: 'medium'
  },
  {
    name: 'Beijing National Stadium (Bird\'s Nest)',
    place: 'Beijing',
    country: 'China',
    year: 2008,
    difficulty: 'hard'
  },
  {
    name: 'Burj Khalifa',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 2010,
    difficulty: 'easy'
  },
  {
    name: 'Marina Bay Sands',
    country: 'Singapore',
    year: 2010,
    difficulty: 'medium'
  },
  {
    name: 'The Shard',
    place: 'London',
    country: 'United Kingdom',
    year: 2012,
    difficulty: 'hard'
  },
  {
    name: 'One World Trade Center',
    place: 'New York',
    country: 'USA',
    year: 2014,
    difficulty: 'easy'
  },
  {
    name: 'Gotthard Base Tunnel',
    place: 'Uri–Ticino',
    country: 'Switzerland',
    year: 2016,
    difficulty: 'hard'
  },
  {
    name: 'Elbphilharmonie',
    place: 'Hamburg',
    country: 'Germany',
    year: 2017,
    difficulty: 'hard'
  },
  {
    name: 'Crossrail / Elizabeth Line',
    place: 'London',
    country: 'United Kingdom',
    year: 2022,
    difficulty: 'hard'
  },
  {
    name: 'Sagrada Família (tallest tower completed)',
    place: 'Barcelona',
    country: 'Spain',
    year: 2023,
    difficulty: 'easy'
  }
];
