import {type Difficulty} from './difficulty.js';

export interface Invention {
  name: string;
  year: number;  // Conventional year of invention, patent, or first successful
                 // demonstration
  inventor?: string;  // Omitted where attribution is disputed or collective
  difficulty: Difficulty;
}

export const inventions: Invention[] = [
  {name: 'Paper', year: 105, inventor: 'Cai Lun', difficulty: 'hard'},
  {
    name: 'Movable-type printing press',
    year: 1440,
    inventor: 'Johannes Gutenberg',
    difficulty: 'easy'
  },
  {
    name: 'Telescope',
    year: 1608,
    inventor: 'Hans Lippershey',
    difficulty: 'medium'
  },
  {name: 'Compound microscope (refined)', year: 1625, difficulty: 'hard'},
  {
    name: 'Mechanical calculator (Pascaline)',
    year: 1642,
    inventor: 'Blaise Pascal',
    difficulty: 'hard'
  },
  {
    name: 'Barometer',
    year: 1643,
    inventor: 'Evangelista Torricelli',
    difficulty: 'hard'
  },
  {
    name: 'Vacuum pump',
    year: 1650,
    inventor: 'Otto von Guericke',
    difficulty: 'hard'
  },
  {
    name: 'Pendulum clock',
    year: 1656,
    inventor: 'Christiaan Huygens',
    difficulty: 'hard'
  },
  {
    name: 'Reflecting telescope',
    year: 1668,
    inventor: 'Isaac Newton',
    difficulty: 'medium'
  },
  {
    name: 'Pressure cooker',
    year: 1679,
    inventor: 'Denis Papin',
    difficulty: 'hard'
  },
  {name: 'Tuning fork', year: 1711, inventor: 'John Shore', difficulty: 'hard'},
  {
    name: 'Steam engine (piston)',
    year: 1712,
    inventor: 'Thomas Newcomen',
    difficulty: 'easy'
  },
  {
    name: 'Mercury thermometer',
    year: 1714,
    inventor: 'Daniel Gabriel Fahrenheit',
    difficulty: 'medium'
  },
  {
    name: 'Marine chronometer',
    year: 1735,
    inventor: 'John Harrison',
    difficulty: 'hard'
  },
  {
    name: 'Lightning rod',
    year: 1752,
    inventor: 'Benjamin Franklin',
    difficulty: 'medium'
  },
  {
    name: 'Spinning jenny',
    year: 1764,
    inventor: 'James Hargreaves',
    difficulty: 'hard'
  },
  {
    name: 'Improved steam engine',
    year: 1769,
    inventor: 'James Watt',
    difficulty: 'medium'
  },
  {
    name: 'Hot air balloon',
    year: 1783,
    inventor: 'Montgolfier brothers',
    difficulty: 'hard'
  },
  {
    name: 'Power loom',
    year: 1785,
    inventor: 'Edmund Cartwright',
    difficulty: 'hard'
  },
  {
    name: 'Cotton gin',
    year: 1793,
    inventor: 'Eli Whitney',
    difficulty: 'medium'
  },
  {
    name: 'Smallpox vaccine',
    year: 1796,
    inventor: 'Edward Jenner',
    difficulty: 'medium'
  },
  {
    name: 'Electric battery',
    year: 1800,
    inventor: 'Alessandro Volta',
    difficulty: 'easy'
  },
  {
    name: 'Steam locomotive',
    year: 1804,
    inventor: 'Richard Trevithick',
    difficulty: 'easy'
  },
  {
    name: 'Canned food',
    year: 1810,
    inventor: 'Nicolas Appert',
    difficulty: 'hard'
  },
  {
    name: 'Spectrometer',
    year: 1814,
    inventor: 'Joseph von Fraunhofer',
    difficulty: 'hard'
  },
  {
    name: 'Stethoscope',
    year: 1816,
    inventor: 'René Laennec',
    difficulty: 'hard'
  },
  {
    name: 'Bicycle (draisine)',
    year: 1817,
    inventor: 'Karl von Drais',
    difficulty: 'medium'
  },
  {
    name: 'Electromagnet',
    year: 1824,
    inventor: 'William Sturgeon',
    difficulty: 'hard'
  },
  {
    name: 'Photography (heliography)',
    year: 1826,
    inventor: 'Nicéphore Niépce',
    difficulty: 'medium'
  },
  {
    name: 'Friction match',
    year: 1826,
    inventor: 'John Walker',
    difficulty: 'hard'
  },
  {
    name: 'Braille writing system',
    year: 1829,
    inventor: 'Louis Braille',
    difficulty: 'easy'
  },
  {
    name: 'Sewing machine (practical)',
    year: 1830,
    inventor: 'Barthélemy Thimonnier',
    difficulty: 'hard'
  },
  {
    name: 'Mechanical reaper',
    year: 1831,
    inventor: 'Cyrus McCormick',
    difficulty: 'hard'
  },
  {
    name: 'Electric dynamo',
    year: 1831,
    inventor: 'Michael Faraday',
    difficulty: 'hard'
  },
  {name: 'Revolver', year: 1836, inventor: 'Samuel Colt', difficulty: 'medium'},
  {
    name: 'Telegraph',
    year: 1837,
    inventor: 'Samuel Morse',
    difficulty: 'medium'
  },
  {
    name: 'Daguerreotype photography',
    year: 1839,
    inventor: 'Louis Daguerre',
    difficulty: 'medium'
  },
  {
    name: 'Vulcanized rubber',
    year: 1839,
    inventor: 'Charles Goodyear',
    difficulty: 'hard'
  },
  {
    name: 'Telegraph (first official public message sent)',
    year: 1844,
    inventor: 'Samuel Morse',
    difficulty: 'medium'
  },
  {
    name: 'Chocolate bar (mass-produced)',
    year: 1847,
    inventor: 'Joseph Fry',
    difficulty: 'easy'
  },
  {
    name: 'Anesthesia (ether, public demonstration)',
    year: 1846,
    inventor: 'William T. G. Morton',
    difficulty: 'hard'
  },
  {
    name: 'Safety elevator',
    year: 1852,
    inventor: 'Elisha Otis',
    difficulty: 'medium'
  },
  {
    name: 'Bessemer steel process',
    year: 1856,
    inventor: 'Henry Bessemer',
    difficulty: 'hard'
  },
  {
    name: 'Internal combustion engine (practical)',
    year: 1859,
    inventor: 'Étienne Lenoir',
    difficulty: 'hard'
  },
  {
    name: 'Pasteurization',
    year: 1864,
    inventor: 'Louis Pasteur',
    difficulty: 'easy'
  },
  {name: 'Dynamite', year: 1867, inventor: 'Alfred Nobel', difficulty: 'easy'},
  {
    name: 'Typewriter (commercial)',
    year: 1868,
    inventor: 'Christopher Latham Sholes',
    difficulty: 'medium'
  },
  {
    name: 'Periodic table',
    year: 1869,
    inventor: 'Dmitri Mendeleev',
    difficulty: 'medium'
  },
  {
    name: 'Barbed wire',
    year: 1874,
    inventor: 'Joseph Glidden',
    difficulty: 'medium'
  },
  {
    name: 'Telephone',
    year: 1876,
    inventor: 'Alexander Graham Bell',
    difficulty: 'easy'
  },
  {
    name: 'Four-stroke engine',
    year: 1876,
    inventor: 'Nikolaus Otto',
    difficulty: 'hard'
  },
  {
    name: 'Phonograph',
    year: 1877,
    inventor: 'Thomas Edison',
    difficulty: 'easy'
  },
  {
    name: 'Practical incandescent light bulb',
    year: 1879,
    inventor: 'Thomas Edison',
    difficulty: 'easy'
  },
  {name: 'Seismograph', year: 1880, inventor: 'John Milne', difficulty: 'hard'},
  {
    name: 'Metal detector',
    year: 1881,
    inventor: 'Alexander Graham Bell',
    difficulty: 'medium'
  },
  {
    name: 'Fountain pen (practical)',
    year: 1884,
    inventor: 'Lewis Waterman',
    difficulty: 'medium'
  },
  {
    name: 'Motorcycle',
    year: 1885,
    inventor: 'Gottlieb Daimler and Wilhelm Maybach',
    difficulty: 'medium'
  },
  {
    name: 'Automobile (gasoline)',
    year: 1885,
    inventor: 'Karl Benz',
    difficulty: 'easy'
  },
  {
    name: 'Safety bicycle',
    year: 1885,
    inventor: 'John Kemp Starley',
    difficulty: 'medium'
  },
  {
    name: 'Dishwasher',
    year: 1886,
    inventor: 'Josephine Cochrane',
    difficulty: 'medium'
  },
  {
    name: 'Coca-Cola',
    year: 1886,
    inventor: 'John Pemberton',
    difficulty: 'easy'
  },
  {
    name: 'Contact lenses',
    year: 1887,
    inventor: 'Adolf Fick',
    difficulty: 'medium'
  },
  {
    name: 'Pneumatic tire (practical)',
    year: 1888,
    inventor: 'John Boyd Dunlop',
    difficulty: 'hard'
  },
  {
    name: 'Kodak camera (roll film)',
    year: 1888,
    inventor: 'George Eastman',
    difficulty: 'easy'
  },
  {
    name: 'Alternating current motor',
    year: 1888,
    inventor: 'Nikola Tesla',
    difficulty: 'medium'
  },
  {
    name: 'Zipper',
    year: 1891,
    inventor: 'Whitcomb Judson',
    difficulty: 'medium'
  },
  {
    name: 'Escalator',
    year: 1891,
    inventor: 'Jesse W. Reno',
    difficulty: 'medium'
  },
  {
    name: 'Diesel engine',
    year: 1893,
    inventor: 'Rudolf Diesel',
    difficulty: 'medium'
  },
  {
    name: 'Cinematograph',
    year: 1895,
    inventor: 'Lumière brothers',
    difficulty: 'easy'
  },
  {
    name: 'X-ray imaging',
    year: 1895,
    inventor: 'Wilhelm Röntgen',
    difficulty: 'medium'
  },
  {
    name: 'Radio transmission',
    year: 1895,
    inventor: 'Guglielmo Marconi',
    difficulty: 'easy'
  },
  {
    name: 'Aspirin (synthesized)',
    year: 1897,
    inventor: 'Felix Hoffmann',
    difficulty: 'medium'
  },
  {
    name: 'Remote control',
    year: 1898,
    inventor: 'Nikola Tesla',
    difficulty: 'medium'
  },
  {
    name: 'Paper clip',
    year: 1899,
    inventor: 'Johan Vaaler',
    difficulty: 'easy'
  },
  {
    name: 'Zeppelin airship',
    year: 1900,
    inventor: 'Ferdinand von Zeppelin',
    difficulty: 'medium'
  },
  {
    name: 'Safety razor (disposable blade)',
    year: 1901,
    inventor: 'King Camp Gillette',
    difficulty: 'hard'
  },
  {
    name: 'Polygraph (lie detector)',
    year: 1902,
    inventor: 'James Mackenzie',
    difficulty: 'hard'
  },
  {
    name: 'Air conditioning',
    year: 1902,
    inventor: 'Willis Carrier',
    difficulty: 'hard'
  },
  {
    name: 'Electrocardiogram (ECG)',
    year: 1903,
    inventor: 'Willem Einthoven',
    difficulty: 'hard'
  },
  {
    name: 'Powered airplane',
    year: 1903,
    inventor: 'Wright brothers',
    difficulty: 'easy'
  },
  {
    name: 'Tea bag',
    year: 1904,
    inventor: 'Thomas Sullivan',
    difficulty: 'easy'
  },
  {
    name: 'Bakelite (first synthetic plastic)',
    year: 1907,
    inventor: 'Leo Baekeland',
    difficulty: 'hard'
  },
  {
    name: 'Ford Model T (mass production)',
    year: 1908,
    inventor: 'Henry Ford',
    difficulty: 'easy'
  },
  {
    name: 'Geiger counter',
    year: 1908,
    inventor: 'Hans Geiger',
    difficulty: 'hard'
  },
  {
    name: 'Haber-Bosch ammonia synthesis',
    year: 1909,
    inventor: 'Fritz Haber',
    difficulty: 'hard'
  },
  {
    name: 'Stainless steel',
    year: 1913,
    inventor: 'Harry Brearley',
    difficulty: 'medium'
  },
  {name: 'Traffic light (electric)', year: 1914, difficulty: 'hard'},
  {
    name: 'Band-Aid (adhesive bandage)',
    year: 1920,
    inventor: 'Earle Dickson',
    difficulty: 'medium'
  },
  {
    name: 'Insulin (isolated for treatment)',
    year: 1921,
    inventor: 'Frederick Banting and Charles Best',
    difficulty: 'medium'
  },
  {
    name: 'Television (electromechanical)',
    year: 1925,
    inventor: 'John Logie Baird',
    difficulty: 'easy'
  },
  {
    name: 'Liquid-fueled rocket',
    year: 1926,
    inventor: 'Robert Goddard',
    difficulty: 'medium'
  },
  {
    name: 'Pez dispenser',
    year: 1927,
    inventor: 'Eduard Haas III',
    difficulty: 'hard'
  },
  {
    name: 'Penicillin',
    year: 1928,
    inventor: 'Alexander Fleming',
    difficulty: 'easy'
  },
  {
    name: 'Jet engine',
    year: 1930,
    inventor: 'Frank Whittle',
    difficulty: 'medium'
  },
  {
    name: 'Electron microscope',
    year: 1931,
    inventor: 'Ernst Ruska',
    difficulty: 'hard'
  },
  {
    name: 'FM Radio',
    year: 1933,
    inventor: 'Edwin Armstrong',
    difficulty: 'medium'
  },
  {
    name: 'Radar (practical)',
    year: 1935,
    inventor: 'Robert Watson-Watt',
    difficulty: 'medium'
  },
  {
    name: 'Nylon',
    year: 1935,
    inventor: 'Wallace Carothers',
    difficulty: 'hard'
  },
  {name: 'Teflon', year: 1938, inventor: 'Roy Plunkett', difficulty: 'hard'},
  {
    name: 'Ballpoint pen (practical)',
    year: 1938,
    inventor: 'László Bíró',
    difficulty: 'medium'
  },
  {
    name: 'Helicopter (practical)',
    year: 1939,
    inventor: 'Igor Sikorsky',
    difficulty: 'medium'
  },
  {
    name: 'Nuclear reactor',
    year: 1942,
    inventor: 'Enrico Fermi',
    difficulty: 'easy'
  },
  {
    name: 'Duct tape',
    year: 1942,
    inventor: 'Vesta Stoudt',
    difficulty: 'medium'
  },
  {
    name: 'Aqualung (scuba)',
    year: 1943,
    inventor: 'Jacques Cousteau and Émile Gagnan',
    difficulty: 'medium'
  },
  {name: 'Slinky', year: 1943, inventor: 'Richard James', difficulty: 'medium'},
  {
    name: 'Electronic general-purpose computer (ENIAC)',
    year: 1945,
    difficulty: 'medium'
  },
  {
    name: 'Microwave oven',
    year: 1945,
    inventor: 'Percy Spencer',
    difficulty: 'medium'
  },
  {
    name: 'Disposable diaper',
    year: 1946,
    inventor: 'Marion Donovan',
    difficulty: 'medium'
  },
  {
    name: 'Transistor',
    year: 1947,
    inventor: 'Bardeen, Brattain, and Shockley',
    difficulty: 'easy'
  },
  {
    name: 'Velcro',
    year: 1948,
    inventor: 'George de Mestral',
    difficulty: 'easy'
  },
  {
    name: 'Polaroid instant camera',
    year: 1948,
    inventor: 'Edwin Land',
    difficulty: 'medium'
  },
  {
    name: 'Barcode',
    year: 1949,
    inventor: 'Norman Joseph Woodland and Bernard Silver',
    difficulty: 'easy'
  },
  {
    name: 'Credit card (Diners Club)',
    year: 1950,
    inventor: 'Frank McNamara',
    difficulty: 'medium'
  },
  {
    name: 'Flight recorder (Black box)',
    year: 1953,
    inventor: 'David Warren',
    difficulty: 'hard'
  },
  {
    name: 'Polio vaccine',
    year: 1955,
    inventor: 'Jonas Salk',
    difficulty: 'easy'
  },
  {
    name: 'Hovercraft',
    year: 1955,
    inventor: 'Christopher Cockerell',
    difficulty: 'medium'
  },
  {
    name: 'Shipping container (intermodal)',
    year: 1956,
    inventor: 'Malcom McLean',
    difficulty: 'hard'
  },
  {name: 'Hard disk drive', year: 1956, difficulty: 'medium'},
  {
    name: 'Bubble wrap',
    year: 1957,
    inventor: 'Alfred Fielding and Marc Chavannes',
    difficulty: 'easy'
  },
  {name: 'Artificial satellite (Sputnik 1)', year: 1957, difficulty: 'easy'},
  {
    name: 'Integrated circuit',
    year: 1958,
    inventor: 'Jack Kilby',
    difficulty: 'medium'
  },
  {
    name: 'Implantable pacemaker',
    year: 1958,
    inventor: 'Rune Elmqvist',
    difficulty: 'medium'
  },
  {
    name: 'Laser',
    year: 1960,
    inventor: 'Theodore Maiman',
    difficulty: 'medium'
  },
  {name: 'Combined oral contraceptive pill', year: 1960, difficulty: 'medium'},
  {name: 'Communications satellite (Telstar)', year: 1962, difficulty: 'hard'},
  {
    name: 'Computer mouse',
    year: 1964,
    inventor: 'Douglas Engelbart',
    difficulty: 'medium'
  },
  {
    name: 'Kevlar',
    year: 1965,
    inventor: 'Stephanie Kwolek',
    difficulty: 'hard'
  },
  {
    name: 'Automated Teller Machine (ATM)',
    year: 1967,
    inventor: 'John Shepherd-Barron',
    difficulty: 'easy'
  },
  {
    name: 'ARPANET (first packet-switched network)',
    year: 1969,
    difficulty: 'easy'
  },
  {name: 'Pocket calculator', year: 1971, difficulty: 'medium'},
  {name: 'Microprocessor (Intel 4004)', year: 1971, difficulty: 'medium'},
  {name: 'Email', year: 1971, inventor: 'Ray Tomlinson', difficulty: 'medium'},
  {
    name: 'CT scanner',
    year: 1971,
    inventor: 'Godfrey Hounsfield',
    difficulty: 'hard'
  },
  {
    name: 'Mobile phone (first handheld call)',
    year: 1973,
    inventor: 'Martin Cooper',
    difficulty: 'easy'
  },
  {
    name: 'Rubik\'s Cube',
    year: 1974,
    inventor: 'Ernő Rubik',
    difficulty: 'easy'
  },
  {name: 'Personal computer (Altair 8800)', year: 1974, difficulty: 'medium'},
  {
    name: 'Post-it Note',
    year: 1974,
    inventor: 'Arthur Fry and Spencer Silver',
    difficulty: 'easy'
  },
  {
    name: 'Digital camera (prototype)',
    year: 1975,
    inventor: 'Steven Sasson',
    difficulty: 'medium'
  },
  {name: 'MRI scanner (first human scan)', year: 1977, difficulty: 'hard'},
  {
    name: 'Floppy disk',
    year: 1971,
    inventor: 'Alan Shugart',
    difficulty: 'medium'
  },
  {
    name: 'Spreadsheet software (VisiCalc)',
    year: 1978,
    inventor: 'Dan Bricklin and Bob Frankston',
    difficulty: 'hard'
  },
  {name: 'GPS (first satellite launched)', year: 1978, difficulty: 'medium'},
  {name: 'Walkman', year: 1979, difficulty: 'easy'},
  {name: 'space shuttle (first launch)', year: 1981, difficulty: 'easy'},
  {name: 'Compact disc', year: 1982, difficulty: 'easy'},
  {name: 'Macintosh (released)', year: 1984, difficulty: 'easy'},
  {
    name: 'DNA fingerprinting',
    year: 1984,
    inventor: 'Alec Jeffreys',
    difficulty: 'medium'
  },
  {name: 'Lithium-ion battery (commercial)', year: 1991, difficulty: 'medium'},
  {
    name: 'World Wide Web',
    year: 1991,
    inventor: 'Tim Berners-Lee',
    difficulty: 'easy'
  },
  {name: 'Text messaging (SMS)', year: 1992, difficulty: 'hard'},
  {name: 'QR Code', year: 1994, inventor: 'Masahiro Hara', difficulty: 'easy'},
  {name: 'DVD', year: 1995, difficulty: 'easy'},
  {name: 'USB', year: 1996, difficulty: 'easy'},
  {name: 'Wi-Fi (802.11 standard)', year: 1997, difficulty: 'easy'},
  {
    name: 'Google Search',
    year: 1998,
    inventor: 'Larry Page, Sergey Brin',
    difficulty: 'easy'
  },
  {
    name: 'Bluetooth',
    year: 1999,
    inventor: 'Nils Rydbeck and Johan Ullman',
    difficulty: 'easy'
  },
  {name: 'YouTube (first video uploaded)', year: 2005, difficulty: 'easy'},
  {name: 'iPhone', year: 2007, difficulty: 'easy'},
  {
    name: 'Bitcoin',
    year: 2009,
    inventor: 'Satoshi Nakamoto',
    difficulty: 'easy'
  },
  {
    name: 'CRISPR gene editing (as a tool)',
    year: 2012,
    inventor: 'Jennifer Doudna and Emmanuelle Charpentier',
    difficulty: 'medium'
  },
  {name: 'ChatGPT (released)', year: 2022, difficulty: 'easy'},
];
