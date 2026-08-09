export enum Category {
  Birth = 'birth',
  HistoricalEvent = 'historical-event',
  Book = 'book',
  Film = 'film',
  Invention = 'invention',
  Painting = 'painting',
  Structure = 'structure',
  Company = 'company',
}

export function emojiFor(category: Category): string {
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
