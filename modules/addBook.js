import { bookToGet } from './saveBook.js';

const addToList = (book) => {
  const list = document.querySelector('.list-container');
  const newBook = document.createElement('div');
  newBook.innerHTML = `
  <p>"${book.title}" by ${book.author}</p>
  <span class="d-btn"><a href="#" class="delete">Remove</a></span>
  `;
  list.appendChild(newBook);
};

const showBooks = () => {
  const books = bookToGet();
  books.forEach((book) => addToList(book));
};

export { addToList, showBooks };