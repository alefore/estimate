import {type Difficulty} from './difficulty.js';
import {UnitEntry} from './question.js';

export interface HistoricalEvent {
  name: string;
  value: number;
  topic: string[];
  difficulty: Difficulty;
}

export const historicalEvents: HistoricalEvent[] = [
  {
    name: 'Hammurabi wrote his code of laws',
    value: -1754,
    topic: ['Hammurabi'],
    difficulty: 'medium',
  },  // c. 1754 BC
  {
    name: 'Tutankhamun ruled Egypt',
    value: -1332,
    topic: ['Tutankhamun'],
    difficulty: 'easy',
  },  // c. 1332 BC
  {
    name: 'The Trojan War was fought',
    value: -1184,
    topic: ['Troy'],
    difficulty: 'easy',
  },  // traditional dating, c. 1184 BC
  {
    name: 'The first Olympic Games were held',
    value: -776,
    topic: ['Olympic'],
    difficulty: 'easy',
  },
  {
    name: 'Rome was founded',
    value: -753,
    topic: ['Rome'],
    difficulty: 'easy',
  },  // traditional dating
  {
    name: 'The Roman Republic was established',
    value: -509,
    topic: ['Rome'],
    difficulty: 'easy',
  },
  {
    name: 'The Battle of Marathon was fought',
    value: -490,
    topic: ['Marathon'],
    difficulty: 'hard',
  },
  {
    name: 'The Battle of Thermopylae was fought',
    value: -480,
    topic: ['Thermopylae'],
    difficulty: 'hard',
  },
  {
    name: 'Alexander the Great conquered Persia',
    value: -331,
    topic: ['Alexander the Great'],
    difficulty: 'medium',
  },
  {
    name: 'The Great Wall of China was begun',
    value: -221,
    topic: ['China'],
    difficulty: 'medium',
  },  // under Qin Shi Huang
  {
    name: 'Hannibal crossed the Alps',
    value: -218,
    topic: ['Hannibal'],
    difficulty: 'medium',
  },
  {
    name: 'Carthage was destroyed by Rome',
    value: -146,
    topic: ['Rome', 'Carthage'],
    difficulty: 'hard',
  },
  {
    name: 'Julius Caesar was assassinated',
    value: -44,
    topic: ['Julius Caesar'],
    difficulty: 'easy',
  },
  {
    name: 'The Battle of Actium was fought',
    value: -31,
    topic: ['Actium'],
    difficulty: 'hard'
  },
  {
    name: 'The Roman Empire was founded by Augustus',
    value: -27,
    topic: ['Rome'],
    difficulty: 'medium',
  },
  {
    name: 'Jesus was crucified',
    value: 30,
    topic: ['Jesus'],
    difficulty: 'easy',
  },  // c. AD 30
  {
    name: 'Vesuvius destroyed Pompeii',
    value: 79,
    topic: ['Pompeii'],
    difficulty: 'medium',
  },
  {
    name: 'Constantine legalized Christianity',
    value: 313,
    topic: ['Constantine'],
    difficulty: 'medium',
  },  // Edict of Milan
  {
    name: 'The Roman Empire split in two',
    value: 395,
    topic: ['Rome'],
    difficulty: 'hard',
  },
  {
    name: 'Rome was sacked by the Visigoths',
    value: 410,
    topic: ['Rome'],
    difficulty: 'hard',
  },
  {
    name: 'The Western Roman Empire fell',
    value: 476,
    topic: ['Rome'],
    difficulty: 'easy',
  },
  {
    name: 'Muhammad made the Hijra to Medina',
    value: 622,
    topic: ['Muhammad'],
    difficulty: 'easy'
  },
  {
    name: 'The Battle of Tours halted the Umayyad advance',
    value: 732,
    topic: ['Umayyad'],
    difficulty: 'hard',
  },
  {
    name: 'Charlemagne was crowned emperor',
    value: 800,
    topic: ['Charlemagne'],
    difficulty: 'medium'
  },
  {
    name: 'The Vikings discovered America',
    value: 1000,
    topic: [],
    difficulty: 'easy'
  },  // c. 1000, Leif Erikson
  {
    name: 'The Great Schism split the Christian church',
    value: 1054,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The Battle of Hastings was fought',
    value: 1066,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The First Crusade captured Jerusalem',
    value: 1099,
    topic: ['Jerusalem'],
    difficulty: 'easy',
  },
  {
    name: 'The University of Oxford began teaching',
    value: 1096,
    topic: ['University of Oxford'],
    difficulty: 'hard'
  },  // c. 1096
  {
    name: 'The Magna Carta was signed',
    value: 1215,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Genghis Khan\'s Mongols sacked Beijing',
    value: 1215,
    topic: ['Genghis Khan'],
    difficulty: 'easy'
  },
  {
    name: 'Marco Polo set out for China',
    value: 1271,
    topic: ['Marco Polo'],
    difficulty: 'medium'
  },
  {
    name: 'The Black Death reached Europe',
    value: 1347,
    topic: ['Black Death'],
    difficulty: 'easy'
  },
  {
    name: 'The Hundred Years\' War began',
    value: 1337,
    topic: ['Hundred Years\' War'],
    difficulty: 'hard'
  },
  {
    name: 'The Battle of Agincourt was fought',
    value: 1415,
    topic: ['Agincourt'],
    difficulty: 'hard'
  },
  {
    name: 'Joan of Arc lifted the siege of Orléans',
    value: 1429,
    topic: ['Joan of Arc'],
    difficulty: 'medium'
  },
  {
    name: 'Johannes Gutenberg printed his Bible',
    value: 1455,
    topic: ['Johannes Gutenberg'],
    difficulty: 'medium'
  },  // c. 1455
  {
    name: 'Constantinople fell to the Ottomans',
    value: 1453,
    topic: ['Constantinople'],
    difficulty: 'hard'
  },
  {
    name: 'America was discovered (by Columbus)',
    value: 1492,
    topic: ['Christopher Columbus'],
    difficulty: 'easy'
  },
  {
    name: 'Vasco da Gama reached India by sea',
    value: 1498,
    topic: ['Vasco da Gama'],
    difficulty: 'medium'
  },
  {
    name: 'Michelangelo finished the statue of David',
    value: 1504,
    topic: ['Michelangelo'],
    difficulty: 'easy'
  },
  {
    name: 'Martin Luther posted his 95 Theses',
    value: 1517,
    topic: ['Martin Luther'],
    difficulty: 'easy'
  },
  {
    name: 'Magellan\'s expedition circumnavigated the globe',
    value: 1522,
    topic: ['Ferdinand Magellan'],
    difficulty: 'medium'
  },
  {
    name: 'The Aztec Empire fell to Cortés',
    value: 1521,
    topic: ['Hernán Cortés', 'Aztec Empire'],
    difficulty: 'medium'
  },
  {
    name: 'The Inca Empire fell to Pizarro',
    value: 1533,
    topic: ['Francisco Pizarro'],
    difficulty: 'medium'
  },
  {
    name: 'Copernicus published his heliocentric theory',
    value: 1543,
    topic: ['Nicolaus Copernicus'],
    difficulty: 'medium'
  },
  {
    name: 'The Spanish Armada was defeated',
    value: 1588,
    topic: ['Spanish Armada'],
    difficulty: 'hard'
  },
  {
    name: 'Shakespeare\'s Hamlet was first performed',
    value: 1601,
    topic: ['Shakespeare'],
    difficulty: 'easy'
  },  // c. 1600-1601 TODO: Move to books or arts?
  {
    name: 'Jamestown was founded',
    value: 1607,
    topic: ['Jamestown'],
    difficulty: 'hard'
  },
  {
    name: 'Galileo first pointed a telescope at the sky',
    value: 1609,
    topic: ['Galileo Galilei'],
    difficulty: 'easy'
  },
  {
    name: 'The Thirty Years\' War began',
    value: 1618,
    topic: ['Thirty Years\' War'],
    difficulty: 'medium'
  },
  {
    name: 'The Taj Mahal was completed',
    value: 1653,
    topic: ['Taj Mahal'],
    difficulty: 'easy'
  },
  {
    name: 'The Great Fire of London burned',
    value: 1666,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'Newton published the Principia',
    value: 1687,
    topic: ['Isaac Newton'],
    difficulty: 'medium'
  },
  {
    name: 'The Glorious Revolution took place in England',
    value: 1688,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'St. Petersburg was founded',
    value: 1703,
    topic: ['St. Petersburg'],
    difficulty: 'hard'
  },
  {
    name: 'The Boston Tea Party took place',
    value: 1773,
    topic: ['Boston Tea Party'],
    difficulty: 'hard'
  },
  {
    name: 'The United States declared independence',
    value: 1776,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'The Montgolfier brothers flew the first hot air balloon',
    value: 1783,
    topic: ['Montgolfier'],
    difficulty: 'hard'
  },
  {
    name: 'The United States Constitution was signed',
    value: 1787,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The French Revolution began',
    value: 1789,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'The guillotine claimed Louis XVI',
    value: 1793,
    topic: ['Louis XVI'],
    difficulty: 'medium'
  },
  {
    name: 'Napoleon crowned himself emperor',
    value: 1804,
    topic: ['Napoleon Bonaparte'],
    difficulty: 'medium'
  },
  {
    name: 'The Battle of Trafalgar was fought',
    value: 1805,
    topic: ['Trafalgar'],
    difficulty: 'hard'
  },
  {
    name: 'Napoleon invaded Russia',
    value: 1812,
    topic: ['Napoleon Bonaparte'],
    difficulty: 'medium'
  },
  {
    name: 'The Battle of Waterloo was fought',
    value: 1815,
    topic: ['Waterloo'],
    difficulty: 'hard'
  },
  {
    // TODO: inventions?
    name: 'The first passenger railway opened',
    value: 1825,
    topic: [],
    difficulty: 'medium'
  },  // Stockton & Darlington
  {
    name: 'Slavery was abolished in the British Empire',
    value: 1833,
    topic: ['Great Britain'],
    difficulty: 'hard'
  },
  {
    name: 'The California Gold Rush began',
    value: 1848,
    topic: ['California'],
    difficulty: 'medium'
  },
  {
    name: 'The American Civil War began',
    value: 1861,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'Lincoln issued the Emancipation Proclamation',
    value: 1863,
    topic: ['Abraham Lincoln'],
    difficulty: 'medium'
  },
  {
    name: 'Lincoln was assassinated',
    value: 1865,
    topic: ['Abraham Lincoln'],
    difficulty: 'easy'
  },
  {
    // TODO: inventions
    name: 'The transatlantic telegraph cable was completed',
    value: 1866,
    topic: [],
    difficulty: 'easy'
  },
  {
    // TODO: inventions
    name: 'The transcontinental railroad was completed',
    value: 1869,
    topic: [],
    difficulty: 'easy'
  },
  {name: 'The Suez Canal opened', value: 1869, topic: [], difficulty: 'medium'},
  {name: 'Krakatoa erupted', value: 1883, topic: [], difficulty: 'hard'},
  {
    name: 'The first modern Olympic Games were held',
    value: 1896,
    topic: ['Olympic Games'],
    difficulty: 'medium'
  },
  {
    name: 'The first movie was screened by the Lumière brothers',
    value: 1895,
    topic: ['Lumière'],
    difficulty: 'hard'
  },
  {
    name: 'Marconi sent the first transatlantic radio signal',
    value: 1901,
    topic: ['Guglielmo Marconi'],
    difficulty: 'hard'
  },
  {
    name: 'The Wright brothers flew the first airplane',
    value: 1903,
    topic:
        ['Wilbur Wright (Wright brothers)', 'Orville Wright (Wright brothers)'],
    difficulty: 'medium'
  },
  {
    name: 'Einstein published his theory of special relativity',
    value: 1905,
    topic: ['Albert Einstein'],
    difficulty: 'medium'
  },
  {
    name: 'The San Francisco earthquake struck',
    value: 1906,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The Titanic sank',
    value: 1912,
    topic: ['Titanic'],
    difficulty: 'easy'
  },
  {name: 'World War I began', value: 1914, topic: ['WWI'], difficulty: 'easy'},
  {
    name: 'The Panama Canal opened',
    value: 1914,
    topic: ['Panama'],
    difficulty: 'medium'
  },
  {
    name: 'The Russian Revolution overthrew the Tsar',
    value: 1917,
    topic: ['Nicholas II'],
    difficulty: 'medium'
  },
  {name: 'World War I ended', value: 1918, topic: ['WWI'], difficulty: 'easy'},
  {
    name: 'The Spanish flu pandemic swept the world',
    value: 1918,
    topic: ['Spanish Flu'],
    difficulty: 'medium'
  },
  {
    name: 'Women won the right to vote in the US',
    value: 1920,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'Tutankhamun\'s tomb was discovered',
    value: 1922,
    topic: ['Tutankhamun'],
    difficulty: 'medium'
  },
  {
    name: 'The Wall Street Crash triggered the Great Depression',
    value: 1929,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'Hitler came to power in Germany',
    value: 1933,
    topic: ['Adolf Hitler'],
    difficulty: 'medium'
  },
  {
    name: 'The Hindenburg disaster occurred',
    value: 1937,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'World War II began',
    value: 1939,
    topic: ['WWII'],
    difficulty: 'easy'
  },
  {
    name: 'Pearl Harbor was attacked',
    value: 1941,
    topic: ['Pearl Harbor'],
    difficulty: 'medium'
  },
  {
    name: 'The D-Day landings took place in Normandy',
    value: 1944,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The first atomic bomb was dropped on Hiroshima',
    value: 1945,
    topic: ['Hiroshima'],
    difficulty: 'easy'
  },
  {
    name: 'World War II ended',
    value: 1945,
    topic: ['WWII'],
    difficulty: 'easy'
  },
  {
    name: 'The United Nations was founded',
    value: 1945,
    topic: ['United Nations'],
    difficulty: 'medium'
  },
  {
    name: 'India gained independence',
    value: 1947,
    topic: [],
    difficulty: 'medium'
  },
  {
    // TODO: science
    name: 'The sound barrier was broken',
    value: 1947,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The state of Israel was founded',
    value: 1948,
    topic: ['Israel'],
    difficulty: 'easy'
  },
  {name: 'NATO was founded', value: 1949, topic: ['NATO'], difficulty: 'easy'},
  {
    name: 'The People\'s Republic of China was proclaimed',
    value: 1949,
    topic: ['China'],
    difficulty: 'medium'
  },
  {name: 'The Korean War began', value: 1950, topic: [], difficulty: 'medium'},
  {
    // TODO: discoveries
    name: 'The structure of DNA was discovered',
    value: 1953,
    topic: ['DNA'],
    difficulty: 'easy'
  },
  {
    name: 'Mount Everest was first climbed',
    value: 1953,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Rosa Parks refused to give up her seat',
    value: 1955,
    topic: ['Rosa Parks'],
    difficulty: 'medium'
  },
  {
    name: 'The Treaty of Rome created the European Economic Community',
    value: 1957,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'Yuri Gagarin became the first human in space',
    value: 1961,
    topic: ['Yuri Gagarin'],
    difficulty: 'medium'
  },
  {
    name: 'The Cuban Missile Crisis brought the world to the brink',
    value: 1962,
    topic: [],
    difficulty: 'easy',
  },
  {
    name: 'Martin Luther King gave his "I Have a Dream" speech',
    value: 1963,
    topic: ['Martin Luther King Jr.'],
    difficulty: 'medium'
  },
  {
    name: 'John F. Kennedy was assassinated',
    value: 1963,
    topic: ['John F. Kennedy'],
    difficulty: 'easy'
  },
  {
    name: 'The Beatles appeared on The Ed Sullivan Show',
    value: 1964,
    topic: ['Beatles', 'John Lennon', 'Paul McCartney'],
    difficulty: 'medium'
  },
  {
    name: 'The Civil Rights Act was signed (United States)',
    value: 1964,
    topic: [],
    difficulty: 'medium'
  },
  {
    // TODO: science
    name: 'The first heart transplant was performed',
    value: 1967,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Martin Luther King was assassinated',
    value: 1968,
    topic: ['Martin Luther King Jr.'],
    difficulty: 'medium'
  },
  {
    // TODO: science
    name: 'Humans landed on the moon',
    value: 1969,
    topic: [],
    difficulty: 'easy'
  },
  {name: 'Woodstock took place', value: 1969, topic: [], difficulty: 'medium'},
  {
    name: 'The Watergate scandal broke',
    value: 1972,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Nixon resigned as US president',
    value: 1974,
    topic: ['Richard Nixon'],
    difficulty: 'medium'
  },
  {name: 'The Vietnam War ended', value: 1975, topic: [], difficulty: 'easy'},
  {
    // TODO: science
    name: 'The first test-tube baby was born',
    value: 1978,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Margaret Thatcher became UK prime minister',
    value: 1979,
    topic: ['Margaret Thatcher'],
    difficulty: 'easy'
  },
  {
    name: 'Smallpox was declared eradicated',
    value: 1980,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'John Lennon was shot',
    value: 1980,
    topic: ['John Lennon'],
    difficulty: 'easy'
  },
  {
    name: 'MTV started broadcasting',
    value: 1981,
    topic: ['MTV'],
    difficulty: 'medium'
  },
  {
    name: 'The IBM PC was launched',
    value: 1981,
    topic: ['IBM'],
    difficulty: 'medium'
  },
  {
    name: 'Live Aid was broadcast worldwide',
    value: 1985,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The Chernobyl disaster occurred',
    value: 1986,
    topic: ['Chernobyl'],
    difficulty: 'medium'
  },
  {
    name: 'The Challenger space shuttle exploded',
    value: 1986,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The Berlin Wall fell',
    value: 1989,
    topic: ['Berlin Wall'],
    difficulty: 'easy'
  },
  {
    name: 'Nelson Mandela was released from prison',
    value: 1990,
    topic: ['Nelson Mandela'],
    difficulty: 'hard'
  },
  {
    // TODO: science
    name: 'The Hubble Space Telescope was launched',
    value: 1990,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The Soviet Union collapsed',
    value: 1991,
    topic: ['Soviet Union'],
    difficulty: 'medium'
  },
  {
    name: 'The European Union was established',
    value: 1993,
    topic: ['European Union'],
    difficulty: 'hard',
  },  // Maastricht Treaty in force
  {
    name: 'Nelson Mandela became president of South Africa',
    value: 1994,
    topic: ['Nelson Mandela'],
    difficulty: 'hard'
  },
  {
    name: 'The Channel Tunnel opened',
    value: 1994,
    topic: [],
    difficulty: 'medium'
  },
  {
    // TODO: Science
    name: 'Dolly the sheep was cloned',
    value: 1996,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'Hong Kong was returned to China',
    value: 1997,
    topic: ['China', 'Hong Kong'],
    difficulty: 'easy'
  },
  {
    name: 'The euro was introduced',
    value: 1999,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The September 11 attacks occurred',
    value: 2001,
    topic: [],
    difficulty: 'easy'
  },
  {
    name: 'The Indian Ocean tsunami struck',
    value: 2004,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'The global financial crisis erupted',
    value: 2008,
    topic: [],
    difficulty: 'medium'
  },
  {
    name: 'Barack Obama became US president',
    value: 2009,
    topic: ['Barack Obama'],
    difficulty: 'easy'
  },
  {name: 'The Arab Spring began', value: 2010, topic: [], difficulty: 'medium'},
  {
    name: 'The Fukushima nuclear disaster occurred',
    value: 2011,
    topic: [],
    difficulty: 'medium'
  },
  {
    // TODO: Science
    name: 'The Higgs boson was discovered',
    value: 2012,
    topic: [],
    difficulty: 'medium'
  },
  {
    // TODO: Science
    name: 'gravitational waves were first detected',
    value: 2015,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The United Kingdom voted for Brexit',
    value: 2016,
    topic: ['Brexit'],
    difficulty: 'medium'
  },
  {
    // TODO: Science
    name: 'The first image of a black hole was published',
    value: 2019,
    topic: [],
    difficulty: 'hard'
  },
  {
    name: 'The COVID-19 pandemic began',
    value: 2020,
    topic: [],
    difficulty: 'easy'
  },
];
