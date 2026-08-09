import {type Difficulty} from './difficulty.js';
import {UnitEntry} from './question.js';

export interface HistoricalEvent {
  name: string;
  value: number;
  id?: string;
  difficulty: Difficulty;
}

export const historicalEvents: HistoricalEvent[] = [
  {
    name: 'Hammurabi wrote his code of laws',
    value: -1754,
    difficulty: 'medium'
  },  // c. 1754 BC
  {
    name: 'Tutankhamun ruled Egypt',
    value: -1332,
    difficulty: 'easy'
  },  // c. 1332 BC
  {
    name: 'the Trojan War was fought',
    value: -1184,
    difficulty: 'easy'
  },  // traditional dating, c. 1184 BC
  {name: 'the first Olympic Games were held', value: -776, difficulty: 'easy'},
  {
    name: 'Rome was founded',
    value: -753,
    difficulty: 'easy'
  },  // traditional dating
  {name: 'the Roman Republic was established', value: -509, difficulty: 'easy'},
  {name: 'the Battle of Marathon was fought', value: -490, difficulty: 'hard'},
  {
    name: 'the Battle of Thermopylae was fought',
    value: -480,
    difficulty: 'hard'
  },
  {
    name: 'Alexander the Great conquered Persia',
    value: -331,
    difficulty: 'medium'
  },
  {
    name: 'the Great Wall of China was begun',
    value: -221,
    difficulty: 'medium'
  },  // under Qin Shi Huang
  {name: 'Hannibal crossed the Alps', value: -218, difficulty: 'medium'},
  {name: 'Carthage was destroyed by Rome', value: -146, difficulty: 'hard'},
  {name: 'Julius Caesar was assassinated', value: -44, difficulty: 'easy'},
  {name: 'the Battle of Actium was fought', value: -31, difficulty: 'hard'},
  {
    name: 'the Roman Empire was founded by Augustus',
    value: -27,
    difficulty: 'medium'
  },
  {name: 'Jesus was crucified', value: 30, difficulty: 'easy'},  // c. AD 30
  {name: 'Vesuvius destroyed Pompeii', value: 79, difficulty: 'medium'},
  {
    name: 'Constantine legalized Christianity',
    value: 313,
    difficulty: 'medium'
  },  // Edict of Milan
  {name: 'the Roman Empire split in two', value: 395, difficulty: 'hard'},
  {name: 'Rome was sacked by the Visigoths', value: 410, difficulty: 'hard'},
  {name: 'the Western Roman Empire fell', value: 476, difficulty: 'easy'},
  {
    name: 'Muhammad made the Hijra to Medina',
    value: 622,
    id: 'Muhammad',
    difficulty: 'easy'
  },
  {
    name: 'the Battle of Tours halted the Umayyad advance',
    value: 732,
    difficulty: 'hard'
  },
  {
    name: 'Charlemagne was crowned emperor',
    value: 800,
    id: 'Charlemagne',
    difficulty: 'medium'
  },
  {
    name: 'the Vikings discovered America',
    value: 1000,
    difficulty: 'easy'
  },  // c. 1000, Leif Erikson
  {
    name: 'the Great Schism split the Christian church',
    value: 1054,
    difficulty: 'medium'
  },
  {
    name: 'the Battle of Hastings was fought',
    value: 1066,
    difficulty: 'medium'
  },
  {
    name: 'the First Crusade captured Jerusalem',
    value: 1099,
    difficulty: 'easy'
  },
  {
    name: 'the University of Oxford began teaching',
    value: 1096,
    difficulty: 'hard'
  },  // c. 1096
  {name: 'the Magna Carta was signed', value: 1215, difficulty: 'medium'},
  {
    name: 'Genghis Khan\'s Mongols sacked Beijing',
    value: 1215,
    difficulty: 'easy'
  },
  {name: 'Marco Polo set out for China', value: 1271, difficulty: 'medium'},
  {name: 'the Black Death reached Europe', value: 1347, difficulty: 'easy'},
  {name: 'the Hundred Years\' War began', value: 1337, difficulty: 'hard'},
  {name: 'the Battle of Agincourt was fought', value: 1415, difficulty: 'hard'},
  {
    name: 'Joan of Arc lifted the siege of Orléans',
    value: 1429,
    id: 'Joan of Arc',
    difficulty: 'medium'
  },
  {
    name: 'Johannes Gutenberg printed his Bible',
    value: 1455,
    id: 'Johannes Gutenberg',
    difficulty: 'medium'
  },  // c. 1455
  {
    name: 'Constantinople fell to the Ottomans',
    value: 1453,
    difficulty: 'hard'
  },
  {
    name: 'America was discovered (by Columbus)',
    value: 1492,
    id: 'Christopher Columbus',
    difficulty: 'easy'
  },
  {
    name: 'Vasco da Gama reached India by sea',
    value: 1498,
    difficulty: 'medium'
  },
  {
    name: 'Michelangelo finished the statue of David',
    value: 1504,
    id: 'Michelangelo',
    difficulty: 'easy'
  },
  {
    name: 'Martin Luther posted his 95 Theses',
    value: 1517,
    id: 'Martin Luther',
    difficulty: 'easy'
  },
  {
    name: 'Magellan\'s expedition circumnavigated the globe',
    value: 1522,
    difficulty: 'medium'
  },
  {name: 'the Aztec Empire fell to Cortés', value: 1521, difficulty: 'medium'},
  {name: 'the Inca Empire fell to Pizarro', value: 1533, difficulty: 'medium'},
  {
    name: 'Copernicus published his heliocentric theory',
    value: 1543,
    difficulty: 'medium'
  },
  {name: 'the Spanish Armada was defeated', value: 1588, difficulty: 'hard'},
  {
    name: 'Shakespeare\'s Hamlet was first performed',
    value: 1601,
    difficulty: 'easy'
  },  // c. 1600-1601
  {name: 'Jamestown was founded', value: 1607, difficulty: 'hard'},
  {
    name: 'Galileo first pointed a telescope at the sky',
    value: 1609,
    difficulty: 'easy'
  },
  {name: 'the Mayflower landed at Plymouth', value: 1620, difficulty: 'hard'},
  {name: 'the Thirty Years\' War began', value: 1618, difficulty: 'medium'},
  {name: 'the Taj Mahal was completed', value: 1653, difficulty: 'easy'},
  {name: 'the Great Fire of London burned', value: 1666, difficulty: 'hard'},
  {name: 'Newton published the Principia', value: 1687, difficulty: 'medium'},
  {
    name: 'the Glorious Revolution took place in England',
    value: 1688,
    difficulty: 'medium'
  },
  {name: 'St. Petersburg was founded', value: 1703, difficulty: 'hard'},
  {
    name: 'the steam engine was patented by James Watt',
    value: 1769,
    difficulty: 'hard'
  },
  {name: 'the Boston Tea Party took place', value: 1773, difficulty: 'hard'},
  {
    name: 'The United States declared independence',
    value: 1776,
    difficulty: 'easy'
  },
  {
    name: 'the Montgolfier brothers flew the first hot air balloon',
    value: 1783,
    difficulty: 'hard'
  },
  {name: 'the US Constitution was signed', value: 1787, difficulty: 'medium'},
  {name: 'the French Revolution began', value: 1789, difficulty: 'easy'},
  {name: 'the guillotine claimed Louis XVI', value: 1793, difficulty: 'medium'},
  {name: 'Napoleon crowned himself emperor', value: 1804, difficulty: 'medium'},
  {name: 'the Battle of Trafalgar was fought', value: 1805, difficulty: 'hard'},
  {name: 'Napoleon invaded Russia', value: 1812, difficulty: 'medium'},
  {name: 'the Battle of Waterloo was fought', value: 1815, difficulty: 'hard'},
  {
    name: 'the first passenger railway opened',
    value: 1825,
    difficulty: 'medium'
  },  // Stockton & Darlington
  {
    name: 'the first photograph was taken',
    value: 1826,
    difficulty: 'medium'
  },  // Niépce
  {
    name: 'slavery was abolished in the British Empire',
    value: 1833,
    difficulty: 'hard'
  },
  {name: 'the California Gold Rush began', value: 1848, difficulty: 'medium'},
  {
    name: 'the Communist Manifesto was published',
    value: 1848,
    difficulty: 'easy'
  },
  {
    name: 'Darwin published On the Origin of Species',
    value: 1859,
    difficulty: 'easy'
  },
  {name: 'the American Civil War began', value: 1861, difficulty: 'easy'},
  {
    name: 'Lincoln issued the Emancipation Proclamation',
    value: 1863,
    difficulty: 'medium'
  },
  {name: 'Lincoln was assassinated', value: 1865, difficulty: 'easy'},
  {
    name: 'the transatlantic telegraph cable was completed',
    value: 1866,
    difficulty: 'easy'
  },
  {
    name: 'the transcontinental railroad was completed',
    value: 1869,
    difficulty: 'easy'
  },
  {name: 'the Suez Canal opened', value: 1869, difficulty: 'medium'},
  {
    name: 'the light bulb was perfected by Edison',
    value: 1879,
    difficulty: 'easy'
  },
  {name: 'Krakatoa erupted', value: 1883, difficulty: 'hard'},
  {
    name: 'the first modern Olympic Games were held',
    value: 1896,
    difficulty: 'medium'
  },
  {name: 'X-rays were discovered', value: 1895, difficulty: 'hard'},
  {
    name: 'the first movie was screened by the Lumière brothers',
    value: 1895,
    difficulty: 'hard'
  },
  {
    name: 'Marconi sent the first transatlantic radio signal',
    value: 1901,
    difficulty: 'hard'
  },
  {
    name: 'the Wright brothers flew the first airplane',
    value: 1903,
    difficulty: 'medium'
  },
  {
    name: 'Einstein published his theory of special relativity',
    value: 1905,
    difficulty: 'medium'
  },
  {
    name: 'the San Francisco earthquake struck',
    value: 1906,
    difficulty: 'medium'
  },
  {name: 'the Titanic sank', value: 1912, difficulty: 'easy'},
  {name: 'World War I began', value: 1914, difficulty: 'easy'},
  {name: 'the Panama Canal opened', value: 1914, difficulty: 'medium'},
  {
    name: 'the Russian Revolution overthrew the Tsar',
    value: 1917,
    difficulty: 'medium'
  },
  {name: 'World War I ended', value: 1918, difficulty: 'easy'},
  {
    name: 'the Spanish flu pandemic swept the world',
    value: 1918,
    difficulty: 'medium'
  },
  {
    name: 'women won the right to vote in the US',
    value: 1920,
    difficulty: 'hard'
  },
  {
    name: 'Tutankhamun\'s tomb was discovered',
    value: 1922,
    difficulty: 'medium'
  },
  {name: 'penicillin was discovered', value: 1928, difficulty: 'medium'},
  {
    name: 'the Wall Street Crash triggered the Great Depression',
    value: 1929,
    difficulty: 'easy'
  },
  {name: 'Hitler came to power in Germany', value: 1933, difficulty: 'medium'},
  {name: 'the Hindenburg disaster occurred', value: 1937, difficulty: 'hard'},
  {name: 'the Golden Gate Bridge opened', value: 1937, difficulty: 'medium'},
  {name: 'World War II began', value: 1939, difficulty: 'easy'},
  {name: 'Pearl Harbor was attacked', value: 1941, difficulty: 'medium'},
  {
    name: 'the D-Day landings took place in Normandy',
    value: 1944,
    difficulty: 'hard'
  },
  {
    name: 'the first atomic bomb was dropped on Hiroshima',
    value: 1945,
    difficulty: 'easy'
  },
  {name: 'World War II ended', value: 1945, difficulty: 'easy'},
  {name: 'the United Nations was founded', value: 1945, difficulty: 'medium'},
  {name: 'India gained independence', value: 1947, difficulty: 'medium'},
  {name: 'the sound barrier was broken', value: 1947, difficulty: 'hard'},
  {name: 'the state of Israel was founded', value: 1948, difficulty: 'easy'},
  {name: 'NATO was founded', value: 1949, difficulty: 'easy'},
  {
    name: 'the People\'s Republic of China was proclaimed',
    value: 1949,
    difficulty: 'medium'
  },
  {name: 'the Korean War began', value: 1950, difficulty: 'medium'},
  {
    name: 'the structure of DNA was discovered',
    value: 1953,
    difficulty: 'easy'
  },
  {name: 'Mount Everest was first climbed', value: 1953, difficulty: 'medium'},
  {
    name: 'Rosa Parks refused to give up her seat',
    value: 1955,
    difficulty: 'medium'
  },
  {
    name: 'Sputnik became the first satellite in space',
    value: 1957,
    difficulty: 'hard'
  },
  {
    name: 'the Treaty of Rome created the European Economic Community',
    value: 1957,
    difficulty: 'hard'
  },
  {
    name: 'Yuri Gagarin became the first human in space',
    value: 1961,
    difficulty: 'medium'
  },
  {
    name: 'the Cuban Missile Crisis brought the world to the brink',
    value: 1962,
    difficulty: 'easy',
  },
  {
    name: 'Martin Luther King gave his "I Have a Dream" speech',
    value: 1963,
    difficulty: 'medium'
  },
  {name: 'John F. Kennedy was assassinated', value: 1963, difficulty: 'easy'},
  {
    name: 'the Beatles appeared on The Ed Sullivan Show',
    value: 1964,
    difficulty: 'medium'
  },
  {
    name: 'the Civil Rights Act was signed (United States)',
    value: 1964,
    difficulty: 'medium'
  },
  {
    name: 'the first heart transplant was performed',
    value: 1967,
    difficulty: 'medium'
  },
  {
    name: 'Martin Luther King was assassinated',
    value: 1968,
    difficulty: 'medium'
  },
  {name: 'humans landed on the moon', value: 1969, difficulty: 'easy'},
  {name: 'Woodstock took place', value: 1969, difficulty: 'medium'},
  {
    name: 'the first pocket calculator went on sale',
    value: 1971,
    difficulty: 'hard'
  },
  {name: 'the Watergate scandal broke', value: 1972, difficulty: 'medium'},
  {name: 'Nixon resigned as US president', value: 1974, difficulty: 'medium'},
  {name: 'the Vietnam War ended', value: 1975, difficulty: 'easy'},
  {
    name: 'the first test-tube baby was born',
    value: 1978,
    difficulty: 'medium'
  },
  {
    name: 'Margaret Thatcher became UK prime minister',
    value: 1979,
    difficulty: 'easy'
  },
  {name: 'smallpox was declared eradicated', value: 1980, difficulty: 'medium'},
  {name: 'John Lennon was shot', value: 1980, difficulty: 'easy'},
  {name: 'MTV started broadcasting', value: 1981, difficulty: 'medium'},
  {name: 'the IBM PC was launched', value: 1981, difficulty: 'medium'},
  {name: 'Live Aid was broadcast worldwide', value: 1985, difficulty: 'hard'},
  {name: 'the Chernobyl disaster occurred', value: 1986, difficulty: 'medium'},
  {
    name: 'the Challenger space shuttle exploded',
    value: 1986,
    difficulty: 'hard'
  },
  {name: 'the Berlin Wall fell', value: 1989, difficulty: 'easy'},
  {
    name: 'Nelson Mandela was released from prison',
    value: 1990,
    difficulty: 'hard'
  },
  {
    name: 'the Hubble Space Telescope was launched',
    value: 1990,
    difficulty: 'hard'
  },
  {name: 'the Soviet Union collapsed', value: 1991, difficulty: 'medium'},
  {
    name: 'the European Union was established',
    value: 1993,
    difficulty: 'hard',
  },  // Maastricht Treaty in force
  {
    name: 'Nelson Mandela became president of South Africa',
    value: 1994,
    difficulty: 'hard'
  },
  {name: 'the Channel Tunnel opened', value: 1994, difficulty: 'medium'},
  {name: 'Amazon was founded', value: 1994, difficulty: 'easy'},
  {name: 'Dolly the sheep was cloned', value: 1996, difficulty: 'easy'},
  {name: 'Hong Kong was returned to China', value: 1997, difficulty: 'easy'},
  {name: 'the euro was introduced', value: 1999, difficulty: 'medium'},
  {name: 'the September 11 attacks occurred', value: 2001, difficulty: 'easy'},
  {name: 'the Indian Ocean tsunami struck', value: 2004, difficulty: 'medium'},
  {
    name: 'the global financial crisis erupted',
    value: 2008,
    difficulty: 'medium'
  },
  {name: 'Barack Obama became US president', value: 2009, difficulty: 'easy'},
  {name: 'the Arab Spring began', value: 2010, difficulty: 'medium'},
  {
    name: 'the Fukushima nuclear disaster occurred',
    value: 2011,
    difficulty: 'medium'
  },
  {name: 'the Higgs boson was discovered', value: 2012, difficulty: 'medium'},
  {
    name: 'gravitational waves were first detected',
    value: 2015,
    difficulty: 'hard'
  },
  {name: 'the UK voted for Brexit', value: 2016, difficulty: 'medium'},
  {
    name: 'the first image of a black hole was published',
    value: 2019,
    difficulty: 'hard'
  },
  {name: 'the COVID-19 pandemic began', value: 2020, difficulty: 'easy'},
];
