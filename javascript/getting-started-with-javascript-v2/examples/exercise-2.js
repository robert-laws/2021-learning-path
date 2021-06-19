// Exercise 2
class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookTitle) {
    if (!bookTitle.toLowerCase().includes('great')) {
      this.favoriteBooks.push(bookTitle);
    }
  }

  printFavoriteBooksCount() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
  }

  printFavoriteBooks() {
    this.favoriteBooks.forEach((book) => {
      console.log(book);
    });
  }
}

const BOOK_API = 'https://some.url/api';

const loadBooks = (bookshelf) => {
  fakeAjax(BOOK_API, (bookNames) => {
    bookNames.forEach((book) => {
      bookshelf.addFavoriteBook(book);
    });
    bookshelf.printFavoriteBooks();
  });
};

const fakeAjax = (url, cb) => {
  setTimeout(() => {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      'You Dont know JS',
    ]);
  }, 1000);
};

let myBookshelf = new Bookshelf();
loadBooks(myBookshelf);
