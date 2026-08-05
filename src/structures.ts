export interface Structure {
  name: string;
  country: string;  // Uses an en dash ("A–B") for cross-border structures
  place?: string;   // Country-specific location (city, region); omitted for
                    // city-states and country-wide structures
  year: number;     // Conventional completion year; negative values are BC
  approximate?: boolean;  // True for ancient structures dated by archaeology
                          // rather than records
}

export const structures: Structure[] = [
  {
    name: 'Great Pyramid of Giza',
    place: 'Giza',
    country: 'Egypt',
    year: -2560,
    approximate: true
  },
  {
    name: 'Stonehenge',
    place: 'Wiltshire',
    country: 'United Kingdom',
    year: -2500,
    approximate: true
  },
  {
    name: 'Abu Simbel temples',
    place: 'Nubia',
    country: 'Egypt',
    year: -1244,
    approximate: true
  },
  {
    name: 'Temple of Karnak (Great Hypostyle Hall)',
    place: 'Luxor',
    country: 'Egypt',
    year: -1224,
    approximate: true
  },
  {name: 'Parthenon', place: 'Athens', country: 'Greece', year: -432},
  {
    name: 'Great Wall of China (Qin unification)',
    country: 'China',
    year: -206,
    approximate: true
  },
  {
    name: 'Petra (Al-Khazneh / Treasury)',
    place: 'Petra',
    country: 'Jordan',
    year: -100,
    approximate: true
  },
  {
    name: 'Pont du Gard',
    place: 'Occitanie',
    country: 'France',
    year: 60,
    approximate: true
  },
  {name: 'Colosseum', place: 'Rome', country: 'Italy', year: 80},
  {name: 'Pantheon', place: 'Rome', country: 'Italy', year: 126},
  {
    name: 'Teotihuacan (Pyramid of the Sun)',
    place: 'near Mexico City',
    country: 'Mexico',
    year: 200,
    approximate: true
  },
  {name: 'Hagia Sophia', place: 'Istanbul', country: 'Turkey', year: 537},
  {name: 'Horyu-ji temple', place: 'Nara', country: 'Japan', year: 607},
  {
    name: 'Dome of the Rock',
    place: 'Jerusalem',
    country: 'Israel/Palestine',
    year: 691
  },
  {
    name: 'Borobudur',
    place: 'Java',
    country: 'Indonesia',
    year: 825,
    approximate: true
  },
  {
    name: 'Great Mosque of Córdoba (final expansion)',
    place: 'Córdoba',
    country: 'Spain',
    year: 987
  },
  {
    name: 'Chichen Itza (El Castillo)',
    place: 'Yucatán',
    country: 'Mexico',
    year: 1000,
    approximate: true
  },
  {
    name: 'Tower of London (White Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1078
  },
  {
    name: 'Angkor Wat',
    place: 'Siem Reap',
    country: 'Cambodia',
    year: 1150,
    approximate: true
  },
  {
    name: 'Westminster Abbey (present church)',
    place: 'London',
    country: 'United Kingdom',
    year: 1269
  },
  {name: 'Notre-Dame de Paris', place: 'Paris', country: 'France', year: 1345},
  {
    name: 'Alhambra (Nasrid palaces)',
    place: 'Granada',
    country: 'Spain',
    year: 1358,
    approximate: true
  },
  {name: 'Leaning Tower of Pisa', place: 'Pisa', country: 'Italy', year: 1372},
  {
    name: 'Golden Pavilion (Kinkaku-ji)',
    place: 'Kyoto',
    country: 'Japan',
    year: 1397
  },
  {
    name: 'Charles Bridge',
    place: 'Prague',
    country: 'Czech Republic',
    year: 1402
  },
  {
    name: 'Duomo di Milano (consecration)',
    place: 'Milan',
    country: 'Italy',
    year: 1418
  },
  {name: 'Forbidden City', place: 'Beijing', country: 'China', year: 1420},
  {
    name: 'Brunelleschi\'s Dome (Florence Cathedral)',
    place: 'Florence',
    country: 'Italy',
    year: 1436
  },
  {
    name: 'Machu Picchu',
    place: 'Cusco Region',
    country: 'Peru',
    year: 1450,
    approximate: true
  },
  {name: 'Topkapi Palace', place: 'Istanbul', country: 'Turkey', year: 1465},
  {
    name: 'Kremlin walls and towers',
    place: 'Moscow',
    country: 'Russia',
    year: 1495
  },
  {
    name: 'Moai statues of Easter Island (peak period)',
    place: 'Easter Island',
    country: 'Chile',
    year: 1500,
    approximate: true
  },
  {
    name: 'St. Basil\'s Cathedral',
    place: 'Moscow',
    country: 'Russia',
    year: 1561
  },
  {name: 'Rialto Bridge', place: 'Venice', country: 'Italy', year: 1591},
  {
    name: 'Himeji Castle (main keep)',
    place: 'Himeji',
    country: 'Japan',
    year: 1609
  },
  {name: 'Blue Mosque', place: 'Istanbul', country: 'Turkey', year: 1616},
  {name: 'St. Peter\'s Basilica', country: 'Vatican City', year: 1626},
  {name: 'Taj Mahal', place: 'Agra', country: 'India', year: 1653},
  {
    name: 'Palace of Versailles (main expansion)',
    place: 'Versailles',
    country: 'France',
    year: 1682
  },
  {
    name: 'Potala Palace (rebuilt)',
    place: 'Lhasa, Tibet',
    country: 'China',
    year: 1694
  },
  {
    name: 'St. Paul\'s Cathedral',
    place: 'London',
    country: 'United Kingdom',
    year: 1710
  },
  {name: 'Schönbrunn Palace', place: 'Vienna', country: 'Austria', year: 1749},
  {name: 'Brandenburg Gate', place: 'Berlin', country: 'Germany', year: 1791},
  {
    name: 'The White House',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1800
  },
  {
    name: 'United States Capitol (original building)',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1826
  },
  {name: 'Arc de Triomphe', place: 'Paris', country: 'France', year: 1836},
  {
    name: 'Buckingham Palace (as royal residence)',
    place: 'London',
    country: 'United Kingdom',
    year: 1837
  },
  {
    name: 'Big Ben (Elizabeth Tower)',
    place: 'London',
    country: 'United Kingdom',
    year: 1859
  },
  {
    name: 'Houses of Parliament (Palace of Westminster, rebuilt)',
    place: 'London',
    country: 'United Kingdom',
    year: 1870
  },
  {name: 'Brooklyn Bridge', place: 'New York', country: 'USA', year: 1883},
  {
    name: 'Neuschwanstein Castle',
    place: 'Bavaria',
    country: 'Germany',
    year: 1886
  },
  {name: 'Statue of Liberty', place: 'New York', country: 'USA', year: 1886},
  {name: 'Eiffel Tower', place: 'Paris', country: 'France', year: 1889},
  {
    name: 'Tower Bridge',
    place: 'London',
    country: 'United Kingdom',
    year: 1894
  },
  {name: 'Reichstag building', place: 'Berlin', country: 'Germany', year: 1894},
  {name: 'Flatiron Building', place: 'New York', country: 'USA', year: 1902},
  {
    name: 'Grand Central Terminal',
    place: 'New York',
    country: 'USA',
    year: 1913
  },
  {name: 'Panama Canal', country: 'Panama', year: 1914},
  {name: 'Trans-Siberian Railway', country: 'Russia', year: 1916},
  {
    name: 'Lincoln Memorial',
    place: 'Washington, D.C.',
    country: 'USA',
    year: 1922
  },
  {name: 'Chrysler Building', place: 'New York', country: 'USA', year: 1930},
  {
    name: 'Empire State Building',
    place: 'New York',
    country: 'USA',
    year: 1931
  },
  {
    name: 'Christ the Redeemer',
    place: 'Rio de Janeiro',
    country: 'Brazil',
    year: 1931
  },
  {
    name: 'Sydney Harbour Bridge',
    place: 'Sydney',
    country: 'Australia',
    year: 1932
  },
  {
    name: 'Hoover Dam',
    place: 'Nevada–Arizona border',
    country: 'USA',
    year: 1936
  },
  {
    name: 'Golden Gate Bridge',
    place: 'San Francisco',
    country: 'USA',
    year: 1937
  },
  {name: 'Fallingwater', place: 'Pennsylvania', country: 'USA', year: 1937},
  {name: 'Mount Rushmore', place: 'South Dakota', country: 'USA', year: 1941},
  {
    name: 'The Pentagon',
    place: 'Arlington, Virginia',
    country: 'USA',
    year: 1943
  },
  {
    name: 'La Scala (reconstruction after WWII)',
    place: 'Milan',
    country: 'Italy',
    year: 1946
  },
  {
    name: 'United Nations Headquarters',
    place: 'New York',
    country: 'USA',
    year: 1952
  },
  {name: 'Seagram Building', place: 'New York', country: 'USA', year: 1958},
  {name: 'Atomium', place: 'Brussels', country: 'Belgium', year: 1958},
  {name: 'Guggenheim Museum', place: 'New York', country: 'USA', year: 1959},
  {
    name: 'Brasília (Congresso Nacional)',
    place: 'Brasília',
    country: 'Brazil',
    year: 1960
  },
  {name: 'Berlin Wall', place: 'Berlin', country: 'Germany', year: 1961},
  {name: 'Space Needle', place: 'Seattle', country: 'USA', year: 1962},
  {name: 'Gateway Arch', place: 'St. Louis', country: 'USA', year: 1965},
  {name: 'Habitat 67', place: 'Montreal', country: 'Canada', year: 1967},
  {
    name: 'Madison Square Garden (current)',
    place: 'New York',
    country: 'USA',
    year: 1968
  },
  {
    name: 'Transamerica Pyramid',
    place: 'San Francisco',
    country: 'USA',
    year: 1972
  },
  {
    name: 'World Trade Center (Twin Towers)',
    place: 'New York',
    country: 'USA',
    year: 1973
  },
  {
    name: 'Sydney Opera House',
    place: 'Sydney',
    country: 'Australia',
    year: 1973
  },
  {
    name: 'Sears Tower (Willis Tower)',
    place: 'Chicago',
    country: 'USA',
    year: 1973
  },
  {name: 'CN Tower', place: 'Toronto', country: 'Canada', year: 1976},
  {name: 'Centre Pompidou', place: 'Paris', country: 'France', year: 1977},
  {name: 'Lotus Temple', place: 'New Delhi', country: 'India', year: 1986},
  {name: 'Louvre Pyramid', place: 'Paris', country: 'France', year: 1989},
  {
    name: 'Bank of China Tower',
    place: 'Hong Kong',
    country: 'China',
    year: 1990
  },
  {
    name: 'Channel Tunnel',
    place: 'beneath the English Channel',
    country: 'United Kingdom–France',
    year: 1994
  },
  {
    name: 'Kansai International Airport (artificial island)',
    place: 'Osaka',
    country: 'Japan',
    year: 1994
  },
  {
    name: 'Guggenheim Museum Bilbao',
    place: 'Bilbao',
    country: 'Spain',
    year: 1997
  },
  {
    name: 'Petronas Towers',
    place: 'Kuala Lumpur',
    country: 'Malaysia',
    year: 1998
  },
  {
    name: 'Burj Al Arab',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 1999
  },
  {
    name: 'Øresund Bridge',
    place: 'across the Øresund strait',
    country: 'Denmark–Sweden',
    year: 2000
  },
  {name: 'London Eye', place: 'London', country: 'United Kingdom', year: 2000},
  {
    name: 'Walt Disney Concert Hall',
    place: 'Los Angeles',
    country: 'USA',
    year: 2003
  },
  {name: 'Millau Viaduct', place: 'Aveyron', country: 'France', year: 2004},
  {name: 'Taipei 101', place: 'Taipei', country: 'Taiwan', year: 2004},
  {name: 'Allianz Arena', place: 'Munich', country: 'Germany', year: 2005},
  {
    name: 'Wembley Stadium (new)',
    place: 'London',
    country: 'United Kingdom',
    year: 2007
  },
  {
    name: 'Beijing National Stadium (Bird\'s Nest)',
    place: 'Beijing',
    country: 'China',
    year: 2008
  },
  {
    name: 'Burj Khalifa',
    place: 'Dubai',
    country: 'United Arab Emirates',
    year: 2010
  },
  {name: 'Marina Bay Sands', country: 'Singapore', year: 2010},
  {name: 'The Shard', place: 'London', country: 'United Kingdom', year: 2012},
  {
    name: 'One World Trade Center',
    place: 'New York',
    country: 'USA',
    year: 2014
  },
  {
    name: 'Gotthard Base Tunnel',
    place: 'Uri–Ticino',
    country: 'Switzerland',
    year: 2016
  },
  {name: 'Elbphilharmonie', place: 'Hamburg', country: 'Germany', year: 2017},
  {
    name: 'Crossrail / Elizabeth Line',
    place: 'London',
    country: 'United Kingdom',
    year: 2022
  },
  {
    name: 'Sagrada Família (tallest tower completed)',
    place: 'Barcelona',
    country: 'Spain',
    year: 2023
  },
];
