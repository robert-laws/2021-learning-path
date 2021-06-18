const myButton = document.querySelector('.my-button');

myButton.addEventListener('click', () => {
  alert('hello!');
});

const myInput = document.querySelector('.my-input');
const myParagraph = document.querySelector('.my-paragraph');

myInput.addEventListener('keyup', () => {
  myParagraph.innerText = `${myInput.value}...`;
});
