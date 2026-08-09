export interface Invention {
  name: string;
  year: number;  // Conventional year of invention, patent, or first successful
                 // demonstration
  inventor?: string;  // Omitted where attribution is disputed or collective
}

export const inventions: Invention[] = [
  {name: 'Paper', year: 105, inventor: 'Cai Lun'},
  {
    name: 'Movable-type printing press',
    year: 1440,
    inventor: 'Johannes Gutenberg'
  },
  {name: 'Telescope', year: 1608, inventor: 'Hans Lippershey'},
  {name: 'Compound microscope (refined)', year: 1625},
  {name: 'Barometer', year: 1643, inventor: 'Evangelista Torricelli'},
  {name: 'Pendulum clock', year: 1656, inventor: 'Christiaan Huygens'},
  {name: 'Steam engine (piston)', year: 1712, inventor: 'Thomas Newcomen'},
  {
    name: 'Mercury thermometer',
    year: 1714,
    inventor: 'Daniel Gabriel Fahrenheit'
  },
  {name: 'Marine chronometer', year: 1735, inventor: 'John Harrison'},
  {name: 'Lightning rod', year: 1752, inventor: 'Benjamin Franklin'},
  {name: 'Spinning jenny', year: 1764, inventor: 'James Hargreaves'},
  {name: 'Improved steam engine', year: 1769, inventor: 'James Watt'},
  {name: 'Hot air balloon', year: 1783, inventor: 'Montgolfier brothers'},
  {name: 'Power loom', year: 1785, inventor: 'Edmund Cartwright'},
  {name: 'Cotton gin', year: 1793, inventor: 'Eli Whitney'},
  {name: 'Smallpox vaccine', year: 1796, inventor: 'Edward Jenner'},
  {name: 'Electric battery', year: 1800, inventor: 'Alessandro Volta'},
  {name: 'Steam locomotive', year: 1804, inventor: 'Richard Trevithick'},
  {name: 'Canned food', year: 1810, inventor: 'Nicolas Appert'},
  {name: 'Stethoscope', year: 1816, inventor: 'René Laennec'},
  {name: 'Bicycle (draisine)', year: 1817, inventor: 'Karl von Drais'},
  {name: 'Electromagnet', year: 1824, inventor: 'William Sturgeon'},
  {name: 'Photography (heliography)', year: 1826, inventor: 'Nicéphore Niépce'},
  {name: 'Friction match', year: 1826, inventor: 'John Walker'},
  {name: 'Braille writing system', year: 1829, inventor: 'Louis Braille'},
  {
    name: 'Sewing machine (practical)',
    year: 1830,
    inventor: 'Barthélemy Thimonnier'
  },
  {name: 'Mechanical reaper', year: 1831, inventor: 'Cyrus McCormick'},
  {name: 'Electric dynamo', year: 1831, inventor: 'Michael Faraday'},
  {name: 'Revolver', year: 1836, inventor: 'Samuel Colt'},
  {name: 'Telegraph', year: 1837, inventor: 'Samuel Morse'},
  {
    name: 'Telegraph (first official public message sent)',
    year: 1844,
    inventor: 'Samuel Morse'
  },
  {name: 'Daguerreotype photography', year: 1839, inventor: 'Louis Daguerre'},
  {name: 'Vulcanized rubber', year: 1839, inventor: 'Charles Goodyear'},
  {
    name: 'Anesthesia (ether, public demonstration)',
    year: 1846,
    inventor: 'William T. G. Morton'
  },
  {name: 'Safety elevator', year: 1852, inventor: 'Elisha Otis'},
  {name: 'Bessemer steel process', year: 1856, inventor: 'Henry Bessemer'},
  {
    name: 'Internal combustion engine (practical)',
    year: 1859,
    inventor: 'Étienne Lenoir'
  },
  {name: 'Pasteurization', year: 1864, inventor: 'Louis Pasteur'},
  {name: 'Dynamite', year: 1867, inventor: 'Alfred Nobel'},
  {
    name: 'Typewriter (commercial)',
    year: 1868,
    inventor: 'Christopher Latham Sholes'
  },
  {name: 'Telephone', year: 1876, inventor: 'Alexander Graham Bell'},
  {name: 'Four-stroke engine', year: 1876, inventor: 'Nikolaus Otto'},
  {name: 'Phonograph', year: 1877, inventor: 'Thomas Edison'},
  {
    name: 'Practical incandescent light bulb',
    year: 1879,
    inventor: 'Thomas Edison'
  },
  {name: 'Automobile (gasoline)', year: 1885, inventor: 'Karl Benz'},
  {name: 'Safety bicycle', year: 1885, inventor: 'John Kemp Starley'},
  {name: 'Coca-Cola', year: 1886, inventor: 'John Pemberton'},
  {
    name: 'Pneumatic tire (practical)',
    year: 1888,
    inventor: 'John Boyd Dunlop'
  },
  {name: 'Kodak camera (roll film)', year: 1888, inventor: 'George Eastman'},
  {name: 'Alternating current motor', year: 1888, inventor: 'Nikola Tesla'},
  {name: 'Diesel engine', year: 1893, inventor: 'Rudolf Diesel'},
  {name: 'Cinematograph', year: 1895, inventor: 'Lumière brothers'},
  {name: 'X-ray imaging', year: 1895, inventor: 'Wilhelm Röntgen'},
  {name: 'Radio transmission', year: 1895, inventor: 'Guglielmo Marconi'},
  {name: 'Aspirin (synthesized)', year: 1897, inventor: 'Felix Hoffmann'},
  {name: 'Zeppelin airship', year: 1900, inventor: 'Ferdinand von Zeppelin'},
  {
    name: 'Safety razor (disposable blade)',
    year: 1901,
    inventor: 'King Camp Gillette'
  },
  {name: 'Air conditioning', year: 1902, inventor: 'Willis Carrier'},
  {name: 'Powered airplane', year: 1903, inventor: 'Wright brothers'},
  {
    name: 'Bakelite (first synthetic plastic)',
    year: 1907,
    inventor: 'Leo Baekeland'
  },
  {name: 'Ford Model T (mass production)', year: 1908, inventor: 'Henry Ford'},
  {name: 'Haber-Bosch ammonia synthesis', year: 1909, inventor: 'Fritz Haber'},
  {name: 'Stainless steel', year: 1913, inventor: 'Harry Brearley'},
  {name: 'Traffic light (electric)', year: 1914},
  {
    name: 'Insulin (isolated for treatment)',
    year: 1921,
    inventor: 'Frederick Banting and Charles Best'
  },
  {
    name: 'Television (electromechanical)',
    year: 1925,
    inventor: 'John Logie Baird'
  },
  {name: 'Liquid-fueled rocket', year: 1926, inventor: 'Robert Goddard'},
  {name: 'Penicillin', year: 1928, inventor: 'Alexander Fleming'},
  {name: 'Jet engine', year: 1930, inventor: 'Frank Whittle'},
  {name: 'Electron microscope', year: 1931, inventor: 'Ernst Ruska'},
  {name: 'Radar (practical)', year: 1935, inventor: 'Robert Watson-Watt'},
  {name: 'Nylon', year: 1935, inventor: 'Wallace Carothers'},
  {name: 'Ballpoint pen (practical)', year: 1938, inventor: 'László Bíró'},
  {name: 'Helicopter (practical)', year: 1939, inventor: 'Igor Sikorsky'},
  {name: 'Nuclear reactor', year: 1942, inventor: 'Enrico Fermi'},
  {
    name: 'Aqualung (scuba)',
    year: 1943,
    inventor: 'Jacques Cousteau and Émile Gagnan'
  },
  {name: 'Electronic general-purpose computer (ENIAC)', year: 1945},
  {name: 'Microwave oven', year: 1945, inventor: 'Percy Spencer'},
  {name: 'Transistor', year: 1947, inventor: 'Bardeen, Brattain, and Shockley'},
  {name: 'Polaroid instant camera', year: 1948, inventor: 'Edwin Land'},
  {name: 'Credit card (Diners Club)', year: 1950, inventor: 'Frank McNamara'},
  {name: 'Polio vaccine', year: 1955, inventor: 'Jonas Salk'},
  {
    name: 'Shipping container (intermodal)',
    year: 1956,
    inventor: 'Malcom McLean'
  },
  {name: 'Hard disk drive', year: 1956},
  {name: 'Artificial satellite (Sputnik 1)', year: 1957},
  {name: 'Integrated circuit', year: 1958, inventor: 'Jack Kilby'},
  {name: 'Laser', year: 1960, inventor: 'Theodore Maiman'},
  {name: 'Combined oral contraceptive pill', year: 1960},
  {name: 'Communications satellite (Telstar)', year: 1962},
  {name: 'Computer mouse', year: 1964, inventor: 'Douglas Engelbart'},
  {name: 'ARPANET (first packet-switched network)', year: 1969},
  {name: 'Microprocessor (Intel 4004)', year: 1971},
  {name: 'Email', year: 1971, inventor: 'Ray Tomlinson'},
  {name: 'CT scanner', year: 1971, inventor: 'Godfrey Hounsfield'},
  {
    name: 'Mobile phone (first handheld call)',
    year: 1973,
    inventor: 'Martin Cooper'
  },
  {name: 'Personal computer (Altair 8800)', year: 1974},
  {name: 'Digital camera (prototype)', year: 1975, inventor: 'Steven Sasson'},
  {name: 'MRI scanner (first human scan)', year: 1977},
  {name: 'GPS (first satellite launched)', year: 1978},
  {name: 'Walkman', year: 1979},
  {name: 'space shuttle (first launch)', year: 1981},
  {name: 'Compact disc', year: 1982},
  {name: 'Macintosh (released)', year: 1984},
  {name: 'DNA fingerprinting', year: 1984, inventor: 'Alec Jeffreys'},
  {name: 'Lithium-ion battery (commercial)', year: 1991},
  {name: 'World Wide Web', year: 1991, inventor: 'Tim Berners-Lee'},
  {name: 'Text messaging (SMS)', year: 1992},
  {name: 'DVD', year: 1995},
  {name: 'USB', year: 1996},
  {name: 'Wi-Fi (802.11 standard)', year: 1997},
  {name: 'Google Search', year: 1998, inventor: 'Larry Page, Sergey Brin'},
  {name: 'YouTube (first video uploaded)', year: 2005},
  {name: 'iPhone', year: 2007},
  {name: 'Bitcoin', year: 2009, inventor: 'Satoshi Nakamoto'},
  {
    name: 'CRISPR gene editing (as a tool)',
    year: 2012,
    inventor: 'Jennifer Doudna and Emmanuelle Charpentier'
  },
  {name: 'ChatGPT (released)', year: 2022},
];
