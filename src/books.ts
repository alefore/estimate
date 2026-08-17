import {type Difficulty} from './difficulty.js';

export interface Book {
  title: string;
  author: string;
  year: number;  // Year of first publication
  id: number;
  difficulty: Difficulty;
  link?: string;
}

export const books: Book[] = [
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1321,
    id: 2000,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Divine_Comedy'
  },
  {
    title: 'The Canterbury Tales',
    author: 'Geoffrey Chaucer',
    year: 1400,
    id: 2001,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Canterbury_Tales'
  },
  {
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    year: 1532,
    id: 2002,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Prince'
  },
  {
    title: 'Gargantua and Pantagruel',
    author: 'François Rabelais',
    year: 1532,
    id: 2003,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel'
  },
  {
    title: 'Essays',
    author: 'Michel de Montaigne',
    year: 1580,
    id: 2004,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Essays_(Montaigne)'
  },
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    year: 1597,
    id: 2005,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Romeo_and_Juliet'
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
    year: 1603,
    id: 2006,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Hamlet'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    year: 1605,
    id: 2007,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Don_Quixote'
  },
  {
    title: 'Macbeth',
    author: 'William Shakespeare',
    year: 1623,
    id: 2008,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Macbeth'
  },
  {
    title: 'Paradise Lost',
    author: 'John Milton',
    year: 1667,
    id: 2009,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Paradise_Lost'
  },
  {
    title: 'The Pilgrim\'s Progress',
    author: 'John Bunyan',
    year: 1678,
    id: 2010,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Pilgrim%27s_Progress'
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    year: 1719,
    id: 2011,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Robinson_Crusoe'
  },
  {
    title: 'Gulliver\'s Travels',
    author: 'Jonathan Swift',
    year: 1726,
    id: 2012,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Gulliver%27s_Travels'
  },
  {
    title: 'Candide',
    author: 'Voltaire',
    year: 1759,
    id: 2013,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Candide'
  },
  {
    title: 'The Sorrows of Young Werther',
    author: 'Johann Wolfgang von Goethe',
    year: 1774,
    id: 2014,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Sorrows_of_Young_Werther'
  },
  {
    title: 'The Wealth of Nations',
    author: 'Adam Smith',
    year: 1776,
    id: 2015,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Wealth_of_Nations'
  },
  {
    title: 'Critique of Pure Reason',
    author: 'Immanuel Kant',
    year: 1781,
    id: 2016,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Critique_of_Pure_Reason'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    id: 2017,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice'
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    year: 1815,
    id: 2018,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Emma_(novel)'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    id: 2019,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Frankenstein'
  },
  {
    title: 'Faust, Part One',
    author: 'Johann Wolfgang von Goethe',
    year: 1808,
    id: 2020,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Faust,_Part_One'
  },
  {
    title: 'The Hunchback of Notre-Dame',
    author: 'Victor Hugo',
    year: 1831,
    id: 2021,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Hunchback_of_Notre-Dame'
  },
  {
    title: 'Eugene Onegin',
    author: 'Alexander Pushkin',
    year: 1833,
    id: 2022,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Eugene_Onegin'
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    year: 1838,
    id: 2023,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Oliver_Twist'
  },
  {
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    year: 1842,
    id: 2024,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Dead_Souls'
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    id: 2025,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo'
  },
  {
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    year: 1844,
    id: 2026,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Three_Musketeers'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    id: 2027,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Jane_Eyre'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    id: 2028,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Wuthering_Heights'
  },
  {
    title: 'The Communist Manifesto',
    author: 'Karl Marx and Friedrich Engels',
    year: 1848,
    id: 2029,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Communist_Manifesto'
  },
  {
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    year: 1850,
    id: 2030,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Scarlet_Letter'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    id: 2031,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Moby-Dick'
  },
  {
    title: 'Uncle Tom\'s Cabin',
    author: 'Harriet Beecher Stowe',
    year: 1852,
    id: 2032,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Uncle_Tom%27s_Cabin'
  },
  {
    title: 'Walden',
    author: 'Henry David Thoreau',
    year: 1854,
    id: 2033,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Walden'
  },
  {
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    year: 1855,
    id: 2034,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Leaves_of_Grass'
  },
  {
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    year: 1857,
    id: 2035,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Madame_Bovary'
  },
  {
    title: 'On the Origin of Species',
    author: 'Charles Darwin',
    year: 1859,
    id: 2036,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/On_the_Origin_of_Species'
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    id: 2037,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities'
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    id: 2038,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Great_Expectations'
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    id: 2039,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables'
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    year: 1865,
    id: 2040,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    id: 2041,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Crime_and_Punishment'
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    id: 2042,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Little_Women'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    id: 2043,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/War_and_Peace'
  },
  {
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    year: 1869,
    id: 2044,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Idiot'
  },
  {
    title: 'Twenty Thousand Leagues Under the Seas',
    author: 'Jules Verne',
    year: 1870,
    id: 2045,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Seas'
  },
  {
    title: 'Middlemarch',
    author: 'George Eliot',
    year: 1872,
    id: 2046,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Middlemarch'
  },
  {
    title: 'Demons',
    author: 'Fyodor Dostoevsky',
    year: 1872,
    id: 2047,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Demons_(Dostoevsky_novel)'
  },
  {
    title: 'Around the World in Eighty Days',
    author: 'Jules Verne',
    year: 1873,
    id: 2048,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Around_the_World_in_Eighty_Days'
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1878,
    id: 2049,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Anna_Karenina'
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    id: 2050,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Brothers_Karamazov'
  },
  {
    title: 'Heidi',
    author: 'Johanna Spyri',
    year: 1880,
    id: 2051,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Heidi'
  },
  {
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    year: 1883,
    id: 2052,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Treasure_Island'
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    year: 1884,
    id: 2053,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn'
  },
  {
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    year: 1885,
    id: 2054,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Thus_Spoke_Zarathustra'
  },
  {
    title: 'Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    year: 1886,
    id: 2055,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde'
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    id: 2056,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray'
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    id: 2057,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Adventures_of_Sherlock_Holmes'
  },
  {
    title: 'The Time Machine',
    author: 'H. G. Wells',
    year: 1895,
    id: 2058,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Time_Machine'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    id: 2059,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Dracula'
  },
  {
    title: 'The War of the Worlds',
    author: 'H. G. Wells',
    year: 1898,
    id: 2060,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_War_of_the_Worlds'
  },
  {
    title: 'The Interpretation of Dreams',
    author: 'Sigmund Freud',
    year: 1899,
    id: 2061,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Interpretation_of_Dreams'
  },
  {
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    year: 1899,
    id: 2062,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Heart_of_Darkness'
  },
  {
    title: 'The Call of the Wild',
    author: 'Jack London',
    year: 1903,
    id: 2063,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Call_of_the_Wild'
  },
  {
    title: 'The Cherry Orchard',
    author: 'Anton Chekhov',
    year: 1904,
    id: 2064,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Cherry_Orchard'
  },
  {
    title: 'Peter Pan',
    author: 'J. M. Barrie',
    year: 1911,
    id: 2065,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Peter_Pan'
  },
  {
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs',
    year: 1912,
    id: 2066,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Tarzan_of_the_Apes'
  },
  {
    title: 'In Search of Lost Time (Swann\'s Way)',
    author: 'Marcel Proust',
    year: 1913,
    id: 2067,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/In_Search_of_Lost_Time'
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    year: 1915,
    id: 2068,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Metamorphosis'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
    year: 1922,
    id: 2069,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Ulysses_(novel)'
  },
  {
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    year: 1922,
    id: 2070,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Siddhartha_(novel)'
  },
  {
    title: 'The Magic Mountain',
    author: 'Thomas Mann',
    year: 1924,
    id: 2071,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Magic_Mountain'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    id: 2072,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Great_Gatsby'
  },
  {
    title: 'The Trial',
    author: 'Franz Kafka',
    year: 1925,
    id: 2073,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Trial'
  },
  {
    title: 'Mrs Dalloway',
    author: 'Virginia Woolf',
    year: 1925,
    id: 2074,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Mrs_Dalloway'
  },
  {
    title: 'Winnie-the-Pooh',
    author: 'A. A. Milne',
    year: 1926,
    id: 2075,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Winnie-the-Pooh'
  },
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    year: 1926,
    id: 2076,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Sun_Also_Rises'
  },
  {
    title: 'Steppenwolf',
    author: 'Hermann Hesse',
    year: 1927,
    id: 2077,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Steppenwolf_(novel)'
  },
  {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    year: 1929,
    id: 2078,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/All_Quiet_on_the_Western_Front'
  },
  {
    title: 'The Sound and the Fury',
    author: 'William Faulkner',
    year: 1929,
    id: 2079,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Sound_and_the_Fury'
  },
  {
    title: 'A Room of One\'s Own',
    author: 'Virginia Woolf',
    year: 1929,
    id: 2080,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/A_Room_of_One%27s_Own'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    id: 2081,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Brave_New_World'
  },
  {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    year: 1934,
    id: 2082,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express'
  },
  {
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    year: 1936,
    id: 2083,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)'
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    year: 1937,
    id: 2084,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Hobbit'
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    id: 2085,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Of_Mice_and_Men'
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    year: 1939,
    id: 2086,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/And_Then_There_Were_None'
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    id: 2087,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Grapes_of_Wrath'
  },
  {
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
    year: 1940,
    id: 2088,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/For_Whom_the_Bell_Tolls'
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
    id: 2089,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)'
  },
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    year: 1943,
    id: 2090,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Little_Prince'
  },
  {
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    year: 1944,
    id: 2091,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Ficciones'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    year: 1945,
    id: 2092,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Animal_Farm'
  },
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    year: 1947,
    id: 2093,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl'
  },
  {
    title: 'The Plague',
    author: 'Albert Camus',
    year: 1947,
    id: 2094,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Plague'
  },
  {
    title: 'The Aleph',
    author: 'Jorge Luis Borges',
    year: 1949,
    id: 2095,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Aleph_(short_story_collection)'
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    year: 1949,
    id: 2096,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'
  },
  {
    title: 'I, Robot',
    author: 'Isaac Asimov',
    year: 1950,
    id: 2097,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/I,_Robot'
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C. S. Lewis',
    year: 1950,
    id: 2098,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Lion,_the_Witch_and_the_Wardrobe'
  },
  {
    title: 'The Martian Chronicles',
    author: 'Ray Bradbury',
    year: 1950,
    id: 2099,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Martian_Chronicles'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    year: 1951,
    id: 2100,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye'
  },
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    year: 1951,
    id: 2101,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)'
  },
  {
    title: 'Waiting for Godot',
    author: 'Samuel Beckett',
    year: 1952,
    id: 2102,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Waiting_for_Godot'
  },
  {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: 1952,
    id: 2103,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    year: 1953,
    id: 2104,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Fahrenheit_451'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    year: 1954,
    id: 2105,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings'
  },
  {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    year: 1955,
    id: 2106,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Lolita'
  },
  {
    title: 'Doctor Zhivago',
    author: 'Boris Pasternak',
    year: 1957,
    id: 2107,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Doctor_Zhivago_(novel)'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    id: 2108,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird'
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    year: 1961,
    id: 2109,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Catch-22'
  },
  {
    title: 'Solaris',
    author: 'Stanisław Lem',
    year: 1961,
    id: 2110,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Solaris_(novel)'
  },
  {
    title: 'One Flew Over the Cuckoo\'s Nest',
    author: 'Ken Kesey',
    year: 1962,
    id: 2111,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/One_Flew_Over_the_Cuckoo%27s_Nest_(novel)'
  },
  {
    title: 'A Clockwork Orange',
    author: 'Anthony Burgess',
    year: 1962,
    id: 2112,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/A_Clockwork_Orange_(novel)'
  },
  {
    title: 'Pale Fire',
    author: 'Vladimir Nabokov',
    year: 1962,
    id: 2113,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Pale_Fire'
  },
  {
    title: 'One Day in the Life of Ivan Denisovich',
    author: 'Aleksandr Solzhenitsyn',
    year: 1962,
    id: 2114,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/One_Day_in_the_Life_of_Ivan_Denisovich'
  },
  {
    title: 'Cat\'s Cradle',
    author: 'Kurt Vonnegut',
    year: 1963,
    id: 2115,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Cat%27s_Cradle'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    id: 2116,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Dune_(novel)'
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    year: 1967,
    id: 2117,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Master_and_Margarita'
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    id: 2118,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude'
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    year: 1968,
    id: 2119,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Do_Androids_Dream_of_Electric_Sheep%3F'
  },
  {
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke',
    year: 1968,
    id: 2120,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)'
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    year: 1969,
    id: 2121,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Left_Hand_of_Darkness'
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    year: 1969,
    id: 2122,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Slaughterhouse-Five'
  },
  {
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    year: 1972,
    id: 2123,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Invisible_Cities'
  },
  {
    title: 'The Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    year: 1973,
    id: 2124,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Gulag_Archipelago'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    id: 2125,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Shining_(novel)'
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    year: 1979,
    id: 2126,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy_(novel)'
  },
  {
    title: 'If on a winter\'s night a traveler',
    author: 'Italo Calvino',
    year: 1979,
    id: 2127,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/If_on_a_winter%27s_night_a_traveler'
  },
  {
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    year: 1980,
    id: 2128,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Name_of_the_Rose'
  },
  {
    title: 'Midnight\'s Children',
    author: 'Salman Rushdie',
    year: 1981,
    id: 2129,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Midnight%27s_Children'
  },
  {
    title: 'The House of the Spirits',
    author: 'Isabel Allende',
    year: 1982,
    id: 2130,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_House_of_the_Spirits'
  },
  {
    title: 'The Unbearable Lightness of Being',
    author: 'Milan Kundera',
    year: 1984,
    id: 2131,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Unbearable_Lightness_of_Being'
  },
  {
    title: 'Love in the Time of Cholera',
    author: 'Gabriel García Márquez',
    year: 1985,
    id: 2132,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera'
  },
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    id: 2133,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale'
  },
  {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    year: 1985,
    id: 2134,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Ender%27s_Game'
  },
  {
    title: 'It',
    author: 'Stephen King',
    year: 1986,
    id: 2135,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/It_(novel)'
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison',
    year: 1987,
    id: 2136,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/Beloved_(novel)'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    id: 2137,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Alchemist_(novel)'
  },
  {
    title: 'The Satanic Verses',
    author: 'Salman Rushdie',
    year: 1988,
    id: 2138,
    difficulty: 'hard',
    link: 'https://en.wikipedia.org/wiki/The_Satanic_Verses'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 1990,
    id: 2139,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Jurassic_Park_(novel)'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    year: 1996,
    id: 2140,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/A_Game_of_Thrones'
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling',
    year: 1997,
    id: 2141,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    year: 2001,
    id: 2142,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/Life_of_Pi'
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    year: 2003,
    id: 2143,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Kite_Runner'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    id: 2144,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Da_Vinci_Code'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    id: 2145,
    difficulty: 'easy',
    link: 'https://en.wikipedia.org/wiki/The_Girl_with_the_Dragon_Tattoo'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    id: 2146,
    difficulty: 'medium',
    link: 'https://en.wikipedia.org/wiki/The_Hunger_Games'
  }
];