import { addBook, deleteBook } from './modules/saveBook.js';
import { removeBook, clear } from './modules/addRemove.js';
import { addToList, showBooks } from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.addEventListener('DOMContentLoaded', showBooks);
document.querySelector('form').addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  addToList(book);
  addBook(book);
  clear();
});
document.querySelector('.list-container').addEventListener('click', (e) => {
  removeBook(e.target);
  deleteBook(e.target.parentElement.previousElementSibling.textContent);
});

const listLink = document.querySelector('.list');
const addNew = document.querySelector('.add_new');
const contact = document.querySelector('.contact');
const listMain = document.querySelector('.list-main');
const formContainer = document.getElementById('new-book');
const contactPage = document.querySelector('.contact-page');

document.addEventListener('DOMContentLoaded', () => {
  listMain.classList.remove('hide');
  formContainer.classList.add('hide');
  contactPage.classList.add('hide');
});
listLink.addEventListener('click', () => {
  listMain.classList.remove('hide');
  formContainer.classList.add('hide');
  contactPage.classList.add('hide');
});

addNew.addEventListener('click', () => {
  listMain.classList.add('hide');
  formContainer.classList.remove('hide');
  contactPage.classList.add('hide');
});

contact.addEventListener('click', () => {
  listMain.classList.add('hide');
  formContainer.classList.add('hide');
  contactPage.classList.remove('hide');
});

document.querySelector('.date-p').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);