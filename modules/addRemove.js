const removeBook = (el) => {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
};

const clear = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};

export { removeBook, clear };