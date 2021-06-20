let favoriteBooks = [];

const addFavoriteBook = (bookTitle) => {
  if (!bookTitle.toLowerCase().includes('great')) {
    favoriteBooks.push(bookTitle);
  }
};

const printFavoriteBooksCount = () => {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
};

const printFavoriteBooks = () => {
  favoriteBooks.forEach((book) => {
    console.log(book);
  });
};

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't know JS");

printFavoriteBooksCount();
printFavoriteBooks();
