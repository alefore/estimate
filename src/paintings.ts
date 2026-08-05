export interface Painting {
  title: string;
  artist: string;
  year: number;  // Conventional completion year; for works painted over a
                 // range, the commonly cited end year
}

export const paintings: Painting[] = [
  {title: 'The Arnolfini Portrait', artist: 'Jan van Eyck', year: 1434},
  {title: 'Primavera', artist: 'Sandro Botticelli', year: 1482},
  {title: 'The Birth of Venus', artist: 'Sandro Botticelli', year: 1486},
  {title: 'Lady with an Ermine', artist: 'Leonardo da Vinci', year: 1490},
  {title: 'The Last Supper', artist: 'Leonardo da Vinci', year: 1498},
  {
    title: 'The Garden of Earthly Delights',
    artist: 'Hieronymus Bosch',
    year: 1510
  },
  {title: 'The School of Athens', artist: 'Raphael', year: 1511},
  {
    title: 'The Creation of Adam (Sistine Chapel)',
    artist: 'Michelangelo',
    year: 1512
  },
  {title: 'Sistine Madonna', artist: 'Raphael', year: 1512},
  {title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1517},
  {title: 'The Assumption of the Virgin', artist: 'Titian', year: 1518},
  {title: 'The Ambassadors', artist: 'Hans Holbein the Younger', year: 1533},
  {title: 'Venus of Urbino', artist: 'Titian', year: 1538},
  {
    title: 'Netherlandish Proverbs',
    artist: 'Pieter Bruegel the Elder',
    year: 1559
  },
  {title: 'The Tower of Babel', artist: 'Pieter Bruegel the Elder', year: 1563},
  {
    title: 'Hunters in the Snow',
    artist: 'Pieter Bruegel the Elder',
    year: 1565
  },
  {title: 'The Burial of the Count of Orgaz', artist: 'El Greco', year: 1588},
  {title: 'The Calling of Saint Matthew', artist: 'Caravaggio', year: 1600},
  {title: 'The Supper at Emmaus', artist: 'Caravaggio', year: 1601},
  {
    title: 'The Elevation of the Cross',
    artist: 'Peter Paul Rubens',
    year: 1611
  },
  {
    title: 'Judith Slaying Holofernes',
    artist: 'Artemisia Gentileschi',
    year: 1613
  },
  {
    title: 'The Anatomy Lesson of Dr Nicolaes Tulp',
    artist: 'Rembrandt',
    year: 1632
  },
  {title: 'The Night Watch', artist: 'Rembrandt', year: 1642},
  {title: 'Las Meninas', artist: 'Diego Velázquez', year: 1656},
  {title: 'The Milkmaid', artist: 'Johannes Vermeer', year: 1658},
  {title: 'View of Delft', artist: 'Johannes Vermeer', year: 1661},
  {title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', year: 1665},
  {title: 'Self-Portrait with Two Circles', artist: 'Rembrandt', year: 1669},
  {title: 'Mr and Mrs Andrews', artist: 'Thomas Gainsborough', year: 1750},
  {title: 'The Swing', artist: 'Jean-Honoré Fragonard', year: 1767},
  {title: 'Watson and the Shark', artist: 'John Singleton Copley', year: 1778},
  {title: 'The Nightmare', artist: 'Henry Fuseli', year: 1781},
  {title: 'The Death of Marat', artist: 'Jacques-Louis David', year: 1793},
  {title: 'The Naked Maja', artist: 'Francisco Goya', year: 1800},
  {
    title: 'Napoleon Crossing the Alps',
    artist: 'Jacques-Louis David',
    year: 1801
  },
  {title: 'The Colossus', artist: 'Francisco Goya', year: 1812},
  {title: 'The Third of May 1808', artist: 'Francisco Goya', year: 1814},
  {
    title: 'Wanderer above the Sea of Fog',
    artist: 'Caspar David Friedrich',
    year: 1818
  },
  {title: 'The Raft of the Medusa', artist: 'Théodore Géricault', year: 1819},
  {title: 'The Hay Wain', artist: 'John Constable', year: 1821},
  {title: 'Saturn Devouring His Son', artist: 'Francisco Goya', year: 1823},
  {title: 'Liberty Leading the People', artist: 'Eugène Delacroix', year: 1830},
  {
    title: 'The Great Wave off Kanagawa',
    artist: 'Katsushika Hokusai',
    year: 1831
  },
  {title: 'The Oxbow', artist: 'Thomas Cole', year: 1836},
  {title: 'The Fighting Temeraire', artist: 'J. M. W. Turner', year: 1839},
  {title: 'Rain, Steam and Speed', artist: 'J. M. W. Turner', year: 1844},
  {
    title: 'Washington Crossing the Delaware',
    artist: 'Emanuel Leutze',
    year: 1851
  },
  {title: 'Ophelia', artist: 'John Everett Millais', year: 1852},
  {title: 'The Gleaners', artist: 'Jean-François Millet', year: 1857},
  {title: 'The Angelus', artist: 'Jean-François Millet', year: 1859},
  {title: 'Olympia', artist: 'Édouard Manet', year: 1863},
  {title: 'Luncheon on the Grass', artist: 'Édouard Manet', year: 1863},
  {title: 'The Origin of the World', artist: 'Gustave Courbet', year: 1866},
  {title: 'Whistler\'s Mother', artist: 'James McNeill Whistler', year: 1871},
  {title: 'Impression, Sunrise', artist: 'Claude Monet', year: 1872},
  {title: 'The Dance Class', artist: 'Edgar Degas', year: 1874},
  {
    title: 'Bal du moulin de la Galette',
    artist: 'Pierre-Auguste Renoir',
    year: 1876
  },
  {
    title: 'Luncheon of the Boating Party',
    artist: 'Pierre-Auguste Renoir',
    year: 1881
  },
  {title: 'A Bar at the Folies-Bergère', artist: 'Édouard Manet', year: 1882},
  {title: 'The Potato Eaters', artist: 'Vincent van Gogh', year: 1885},
  {
    title: 'A Sunday Afternoon on the Island of La Grande Jatte',
    artist: 'Georges Seurat',
    year: 1886
  },
  {title: 'Vase with Sunflowers', artist: 'Vincent van Gogh', year: 1888},
  {title: 'Café Terrace at Night', artist: 'Vincent van Gogh', year: 1888},
  {title: 'The Starry Night', artist: 'Vincent van Gogh', year: 1889},
  {title: 'Wheatfield with Crows', artist: 'Vincent van Gogh', year: 1890},
  {title: 'The Scream', artist: 'Edvard Munch', year: 1893},
  {
    title: 'At the Moulin Rouge',
    artist: 'Henri de Toulouse-Lautrec',
    year: 1895
  },
  {title: 'The Card Players', artist: 'Paul Cézanne', year: 1895},
  {
    title: 'Boulevard Montmartre at Night',
    artist: 'Camille Pissarro',
    year: 1897
  },
  {title: 'The Sleeping Gypsy', artist: 'Henri Rousseau', year: 1897},
  {
    title: 'Where Do We Come From? What Are We? Where Are We Going?',
    artist: 'Paul Gauguin',
    year: 1898
  },
  {title: 'Water Lilies (first series)', artist: 'Claude Monet', year: 1900},
  {title: 'The Old Guitarist', artist: 'Pablo Picasso', year: 1904},
  {title: 'Le bonheur de vivre', artist: 'Henri Matisse', year: 1906},
  {title: 'Les Demoiselles d\'Avignon', artist: 'Pablo Picasso', year: 1907},
  {
    title: 'Portrait of Adele Bloch-Bauer I',
    artist: 'Gustav Klimt',
    year: 1907
  },
  {title: 'The Kiss', artist: 'Gustav Klimt', year: 1908},
  {title: 'The Dance', artist: 'Henri Matisse', year: 1910},
  {title: 'I and the Village', artist: 'Marc Chagall', year: 1911},
  {
    title: 'Nude Descending a Staircase, No. 2',
    artist: 'Marcel Duchamp',
    year: 1912
  },
  {title: 'Composition VII', artist: 'Wassily Kandinsky', year: 1913},
  {title: 'Black Square', artist: 'Kazimir Malevich', year: 1915},
  {
    title: 'The Treachery of Images (Ceci n\'est pas une pipe)',
    artist: 'René Magritte',
    year: 1929
  },
  {title: 'The Great Masturbator', artist: 'Salvador Dalí', year: 1929},
  {title: 'American Gothic', artist: 'Grant Wood', year: 1930},
  {title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931},
  {title: 'Guernica', artist: 'Pablo Picasso', year: 1937},
  {title: 'Portrait of Dora Maar', artist: 'Pablo Picasso', year: 1937},
  {title: 'The Two Fridas', artist: 'Frida Kahlo', year: 1939},
  {
    title: 'Self-Portrait with Thorn Necklace and Hummingbird',
    artist: 'Frida Kahlo',
    year: 1940
  },
  {title: 'Nighthawks', artist: 'Edward Hopper', year: 1942},
  {title: 'Broadway Boogie Woogie', artist: 'Piet Mondrian', year: 1943},
  {title: 'The Broken Column', artist: 'Frida Kahlo', year: 1944},
  {title: 'No. 5, 1948', artist: 'Jackson Pollock', year: 1948},
  {title: 'Christina\'s World', artist: 'Andrew Wyeth', year: 1948},
  {title: 'Campbell\'s Soup Cans', artist: 'Andy Warhol', year: 1962},
  {title: 'Marilyn Diptych', artist: 'Andy Warhol', year: 1962},
  {title: 'Whaam!', artist: 'Roy Lichtenstein', year: 1963},
  {title: 'The Son of Man', artist: 'René Magritte', year: 1964},
  {title: 'A Bigger Splash', artist: 'David Hockney', year: 1967},
  {
    title: 'Portrait of an Artist (Pool with Two Figures)',
    artist: 'David Hockney',
    year: 1972
  },
  {title: 'Untitled (Skull)', artist: 'Jean-Michel Basquiat', year: 1981},
  {title: 'Balloon Girl (There Is Always Hope)', artist: 'Banksy', year: 2002},
];
