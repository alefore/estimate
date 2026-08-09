export enum Category {
  Birth = 'Births',
  HistoricalEvent = 'Historical Events',
  Book = 'Books',
  Film = 'Films',
  Invention = 'Inventions',
  Painting = 'Paintings',
  Structure = 'Structures',
  Company = 'Companies',
}

export function emojiForCategory(category: Category): string {
  switch (category) {
    case Category.Birth:
      return '👶';
    case Category.HistoricalEvent:
      return '';
    case Category.Book:
      return '📖';
    case Category.Film:
      return '🎥';
    case Category.Invention:
      return '💡';
    case Category.Painting:
      return '🎨';
    case Category.Structure:
      return '🏛️';
    case Category.Company:
      return '💼';
  }
}
