/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// local Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
// Display Books
class UI {
  static showBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addToList(book));
  }

  static addToList(book) {
    const list = document.querySelector('.list-container');
    const newBook = document.createElement('div');

    newBook.innerHTML = `
        <p>"${book.title}" by ${book.author}</p>
        <button type="submit" class="delete">Remove</button>
      `;
    list.appendChild(newBook);
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.showBooks);
document.querySelector('form').addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addToList(book);
  Store.addBook(book);
  UI.clearFields();
});
document.querySelector('.list-container').addEventListener('click', (e) => {
  UI.removeBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
/* eslint-enable max-classes-per-file */

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

const date = new Date();

document.querySelector('.date-p').innerHTML = date;
