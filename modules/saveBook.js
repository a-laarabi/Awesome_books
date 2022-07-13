const bookToGet = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

const addBook = (book) => {
  const books = bookToGet();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const deleteBook = (author) => {
  const books = bookToGet();

  books.forEach((book, index) => {
    if (book.author === author) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
};

export { bookToGet, addBook, deleteBook };