import {type Difficulty} from './difficulty.js';

export interface Book {
  title: string;
  author: string;
  year: number;  // Year of first publication
  id: number;
  difficulty: Difficulty;
}

export const books: Book[] = [
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1321,
    id: 2000,
    difficulty: 'easy'
  },
  {
    title: 'The Canterbury Tales',
    author: 'Geoffrey Chaucer',
    year: 1400,
    id: 2001,
    difficulty: 'hard'
  },
  {
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    year: 1532,
    id: 2002,
    difficulty: 'easy'
  },
  {
    title: 'Gargantua and Pantagruel',
    author: 'François Rabelais',
    year: 1532,
    id: 2003,
    difficulty: 'hard'
  },
  {
    title: 'Essays',
    author: 'Michel de Montaigne',
    year: 1580,
    id: 2004,
    difficulty: 'hard'
  },
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    year: 1597,
    id: 2005,
    difficulty: 'easy'
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
    year: 1603,
    id: 2006,
    difficulty: 'easy'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    year: 1605,
    id: 2007,
    difficulty: 'easy'
  },
  {
    title: 'Macbeth',
    author: 'William Shakespeare',
    year: 1623,
    id: 2008,
    difficulty: 'easy'
  },
  {
    title: 'Paradise Lost',
    author: 'John Milton',
    year: 1667,
    id: 2009,
    difficulty: 'medium'
  },
  {
    title: 'The Pilgrim\'s Progress',
    author: 'John Bunyan',
    year: 1678,
    id: 2010,
    difficulty: 'hard'
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    year: 1719,
    id: 2011,
    difficulty: 'medium'
  },
  {
    title: 'Gulliver\'s Travels',
    author: 'Jonathan Swift',
    year: 1726,
    id: 2012,
    difficulty: 'medium'
  },
  {
    title: 'Candide',
    author: 'Voltaire',
    year: 1759,
    id: 2013,
    difficulty: 'hard'
  },
  {
    title: 'The Sorrows of Young Werther',
    author: 'Johann Wolfgang von Goethe',
    year: 1774,
    id: 2014,
    difficulty: 'medium'
  },
  {
    title: 'The Wealth of Nations',
    author: 'Adam Smith',
    year: 1776,
    id: 2015,
    difficulty: 'medium'
  },
  {
    title: 'Critique of Pure Reason',
    author: 'Immanuel Kant',
    year: 1781,
    id: 2016,
    difficulty: 'medium'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    id: 2017,
    difficulty: 'easy'
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    year: 1815,
    id: 2018,
    difficulty: 'medium'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    id: 2019,
    difficulty: 'easy'
  },
  {
    title: 'Faust, Part One',
    author: 'Johann Wolfgang von Goethe',
    year: 1808,
    id: 2020,
    difficulty: 'medium'
  },
  {
    title: 'The Hunchback of Notre-Dame',
    author: 'Victor Hugo',
    year: 1831,
    id: 2021,
    difficulty: 'medium'
  },
  {
    title: 'Eugene Onegin',
    author: 'Alexander Pushkin',
    year: 1833,
    id: 2022,
    difficulty: 'hard'
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    year: 1838,
    id: 2023,
    difficulty: 'easy'
  },
  {
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    year: 1842,
    id: 2024,
    difficulty: 'hard'
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    id: 2025,
    difficulty: 'easy'
  },
  {
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    year: 1844,
    id: 2026,
    difficulty: 'easy'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    id: 2027,
    difficulty: 'hard'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    id: 2028,
    difficulty: 'medium'
  },
  {
    title: 'The Communist Manifesto',
    author: 'Karl Marx and Friedrich Engels',
    year: 1848,
    id: 2029,
    difficulty: 'easy'
  },
  {
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    year: 1850,
    id: 2030,
    difficulty: 'hard'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    id: 2031,
    difficulty: 'easy'
  },
  {
    title: 'Uncle Tom\'s Cabin',
    author: 'Harriet Beecher Stowe',
    year: 1852,
    id: 2032,
    difficulty: 'medium'
  },
  {
    title: 'Walden',
    author: 'Henry David Thoreau',
    year: 1854,
    id: 2033,
    difficulty: 'hard'
  },
  {
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    year: 1855,
    id: 2034,
    difficulty: 'hard'
  },
  {
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    year: 1857,
    id: 2035,
    difficulty: 'hard'
  },
  {
    title: 'On the Origin of Species',
    author: 'Charles Darwin',
    year: 1859,
    id: 2036,
    difficulty: 'easy'
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    id: 2037,
    difficulty: 'easy'
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    id: 2038,
    difficulty: 'medium'
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    id: 2039,
    difficulty: 'medium'
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    year: 1865,
    id: 2040,
    difficulty: 'easy'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    id: 2041,
    difficulty: 'medium'
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    id: 2042,
    difficulty: 'medium'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    id: 2043,
    difficulty: 'medium'
  },
  {
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    year: 1869,
    id: 2044,
    difficulty: 'hard'
  },
  {
    title: 'Twenty Thousand Leagues Under the Seas',
    author: 'Jules Verne',
    year: 1870,
    id: 2045,
    difficulty: 'easy'
  },
  {
    title: 'Middlemarch',
    author: 'George Eliot',
    year: 1872,
    id: 2046,
    difficulty: 'hard'
  },
  {
    title: 'Demons',
    author: 'Fyodor Dostoevsky',
    year: 1872,
    id: 2047,
    difficulty: 'hard'
  },
  {
    title: 'Around the World in Eighty Days',
    author: 'Jules Verne',
    year: 1873,
    id: 2048,
    difficulty: 'medium'
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1878,
    id: 2049,
    difficulty: 'medium'
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    id: 2050,
    difficulty: 'easy'
  },
  {
    title: 'Heidi',
    author: 'Johanna Spyri',
    year: 1880,
    id: 2051,
    difficulty: 'easy'
  },
  {
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    year: 1883,
    id: 2052,
    difficulty: 'easy'
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    year: 1884,
    id: 2053,
    difficulty: 'easy'
  },
  {
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    year: 1885,
    id: 2054,
    difficulty: 'medium'
  },
  {
    title: 'Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    year: 1886,
    id: 2055,
    difficulty: 'medium'
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    id: 2056,
    difficulty: 'medium'
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    id: 2057,
    difficulty: 'easy'
  },
  {
    title: 'The Time Machine',
    author: 'H. G. Wells',
    year: 1895,
    id: 2058,
    difficulty: 'medium'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    id: 2059,
    difficulty: 'easy'
  },
  {
    title: 'The War of the Worlds',
    author: 'H. G. Wells',
    year: 1898,
    id: 2060,
    difficulty: 'medium'
  },
  {
    title: 'The Interpretation of Dreams',
    author: 'Sigmund Freud',
    year: 1899,
    id: 2061,
    difficulty: 'medium'
  },
  {
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    year: 1899,
    id: 2062,
    difficulty: 'hard'
  },
  {
    title: 'The Call of the Wild',
    author: 'Jack London',
    year: 1903,
    id: 2063,
    difficulty: 'medium'
  },
  {
    title: 'The Cherry Orchard',
    author: 'Anton Chekhov',
    year: 1904,
    id: 2064,
    difficulty: 'hard'
  },
  {
    title: 'Peter Pan',
    author: 'J. M. Barrie',
    year: 1911,
    id: 2065,
    difficulty: 'medium'
  },
  {
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs',
    year: 1912,
    id: 2066,
    difficulty: 'easy'
  },
  {
    title: 'In Search of Lost Time (Swann\'s Way)',
    author: 'Marcel Proust',
    year: 1913,
    id: 2067,
    difficulty: 'hard'
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    year: 1915,
    id: 2068,
    difficulty: 'easy'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
    year: 1922,
    id: 2069,
    difficulty: 'medium'
  },
  {
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    year: 1922,
    id: 2070,
    difficulty: 'medium'
  },
  {
    title: 'The Magic Mountain',
    author: 'Thomas Mann',
    year: 1924,
    id: 2071,
    difficulty: 'hard'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    id: 2072,
    difficulty: 'easy'
  },
  {
    title: 'The Trial',
    author: 'Franz Kafka',
    year: 1925,
    id: 2073,
    difficulty: 'medium'
  },
  {
    title: 'Mrs Dalloway',
    author: 'Virginia Woolf',
    year: 1925,
    id: 2074,
    difficulty: 'hard'
  },
  {
    title: 'Winnie-the-Pooh',
    author: 'A. A. Milne',
    year: 1926,
    id: 2075,
    difficulty: 'easy'
  },
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    year: 1926,
    id: 2076,
    difficulty: 'medium'
  },
  {
    title: 'Steppenwolf',
    author: 'Hermann Hesse',
    year: 1927,
    id: 2077,
    difficulty: 'medium'
  },
  {
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    year: 1929,
    id: 2078,
    difficulty: 'hard'
  },
  {
    title: 'The Sound and the Fury',
    author: 'William Faulkner',
    year: 1929,
    id: 2079,
    difficulty: 'hard'
  },
  {
    title: 'A Room of One\'s Own',
    author: 'Virginia Woolf',
    year: 1929,
    id: 2080,
    difficulty: 'hard'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    id: 2081,
    difficulty: 'medium'
  },
  {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    year: 1934,
    id: 2082,
    difficulty: 'easy'
  },
  {
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    year: 1936,
    id: 2083,
    difficulty: 'medium'
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    year: 1937,
    id: 2084,
    difficulty: 'easy'
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    id: 2085,
    difficulty: 'medium'
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    year: 1939,
    id: 2086,
    difficulty: 'medium'
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    id: 2087,
    difficulty: 'medium'
  },
  {
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
    year: 1940,
    id: 2088,
    difficulty: 'easy'
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    year: 1942,
    id: 2089,
    difficulty: 'medium'
  },
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    year: 1943,
    id: 2090,
    difficulty: 'easy'
  },
  {
    title: 'Ficciones',
    author: 'Jorge Luis Borges',
    year: 1944,
    id: 2091,
    difficulty: 'medium'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    year: 1945,
    id: 2092,
    difficulty: 'easy'
  },
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    year: 1947,
    id: 2093,
    difficulty: 'easy'
  },
  {
    title: 'The Plague',
    author: 'Albert Camus',
    year: 1947,
    id: 2094,
    difficulty: 'medium'
  },
  {
    title: 'The Aleph',
    author: 'Jorge Luis Borges',
    year: 1949,
    id: 2095,
    difficulty: 'medium'
  },
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    year: 1949,
    id: 2096,
    difficulty: 'easy'
  },
  {
    title: 'I, Robot',
    author: 'Isaac Asimov',
    year: 1950,
    id: 2097,
    difficulty: 'easy'
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C. S. Lewis',
    year: 1950,
    id: 2098,
    difficulty: 'easy'
  },
  {
    title: 'The Martian Chronicles',
    author: 'Ray Bradbury',
    year: 1950,
    id: 2099,
    difficulty: 'medium'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    year: 1951,
    id: 2100,
    difficulty: 'medium'
  },
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    year: 1951,
    id: 2101,
    difficulty: 'medium'
  },
  {
    title: 'Waiting for Godot',
    author: 'Samuel Beckett',
    year: 1952,
    id: 2102,
    difficulty: 'hard'
  },
  {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    year: 1952,
    id: 2103,
    difficulty: 'easy'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    year: 1953,
    id: 2104,
    difficulty: 'easy'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    year: 1954,
    id: 2105,
    difficulty: 'easy'
  },
  {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    year: 1955,
    id: 2106,
    difficulty: 'medium'
  },
  {
    title: 'Doctor Zhivago',
    author: 'Boris Pasternak',
    year: 1957,
    id: 2107,
    difficulty: 'hard'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    id: 2108,
    difficulty: 'easy'
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    year: 1961,
    id: 2109,
    difficulty: 'medium'
  },
  {
    title: 'Solaris',
    author: 'Stanisław Lem',
    year: 1961,
    id: 2110,
    difficulty: 'hard'
  },
  {
    title: 'One Flew Over the Cuckoo\'s Nest',
    author: 'Ken Kesey',
    year: 1962,
    id: 2111,
    difficulty: 'hard'
  },
  {
    title: 'A Clockwork Orange',
    author: 'Anthony Burgess',
    year: 1962,
    id: 2112,
    difficulty: 'hard'
  },
  {
    title: 'Pale Fire',
    author: 'Vladimir Nabokov',
    year: 1962,
    id: 2113,
    difficulty: 'hard'
  },
  {
    title: 'One Day in the Life of Ivan Denisovich',
    author: 'Aleksandr Solzhenitsyn',
    year: 1962,
    id: 2114,
    difficulty: 'hard'
  },
  {
    title: 'Cat\'s Cradle',
    author: 'Kurt Vonnegut',
    year: 1963,
    id: 2115,
    difficulty: 'medium'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    id: 2116,
    difficulty: 'medium'
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    year: 1967,
    id: 2117,
    difficulty: 'hard'
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    id: 2118,
    difficulty: 'medium'
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    year: 1968,
    id: 2119,
    difficulty: 'medium'
  },
  {
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke',
    year: 1968,
    id: 2120,
    difficulty: 'medium'
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    year: 1969,
    id: 2121,
    difficulty: 'hard'
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    year: 1969,
    id: 2122,
    difficulty: 'medium'
  },
  {
    title: 'Invisible Cities',
    author: 'Italo Calvino',
    year: 1972,
    id: 2123,
    difficulty: 'hard'
  },
  {
    title: 'The Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    year: 1973,
    id: 2124,
    difficulty: 'hard'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    id: 2125,
    difficulty: 'easy'
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    year: 1979,
    id: 2126,
    difficulty: 'easy'
  },
  {
    title: 'If on a winter\'s night a traveler',
    author: 'Italo Calvino',
    year: 1979,
    id: 2127,
    difficulty: 'hard'
  },
  {
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    year: 1980,
    id: 2128,
    difficulty: 'hard'
  },
  {
    title: 'Midnight\'s Children',
    author: 'Salman Rushdie',
    year: 1981,
    id: 2129,
    difficulty: 'hard'
  },
  {
    title: 'The House of the Spirits',
    author: 'Isabel Allende',
    year: 1982,
    id: 2130,
    difficulty: 'hard'
  },
  {
    title: 'The Unbearable Lightness of Being',
    author: 'Milan Kundera',
    year: 1984,
    id: 2131,
    difficulty: 'hard'
  },
  {
    title: 'Love in the Time of Cholera',
    author: 'Gabriel García Márquez',
    year: 1985,
    id: 2132,
    difficulty: 'hard'
  },
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    id: 2133,
    difficulty: 'hard'
  },
  {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    year: 1985,
    id: 2134,
    difficulty: 'easy'
  },
  {
    title: 'It',
    author: 'Stephen King',
    year: 1986,
    id: 2135,
    difficulty: 'medium'
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison',
    year: 1987,
    id: 2136,
    difficulty: 'hard'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    id: 2137,
    difficulty: 'easy'
  },
  {
    title: 'The Satanic Verses',
    author: 'Salman Rushdie',
    year: 1988,
    id: 2138,
    difficulty: 'hard'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 1990,
    id: 2139,
    difficulty: 'easy'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    year: 1996,
    id: 2140,
    difficulty: 'easy'
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling',
    year: 1997,
    id: 2141,
    difficulty: 'easy'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    year: 2001,
    id: 2142,
    difficulty: 'medium'
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    year: 2003,
    id: 2143,
    difficulty: 'easy'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    id: 2144,
    difficulty: 'easy'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    id: 2145,
    difficulty: 'easy'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    id: 2146,
    difficulty: 'medium'
  }
];
