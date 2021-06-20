const button = document.querySelector('.my-button');
const boxes = document.querySelectorAll('.box');

button.addEventListener('click', () => {
  clearBoxBackground();
  addBoxBackground(getRandomBox());
});

const getRandomBox = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

const clearBoxBackground = () => {
  boxes.forEach((box) => {
    box.classList.remove('blue-background');
  });
};

const addBoxBackground = (randomBox) => {
  boxIndex = randomBox - 1;
  boxes[boxIndex].classList.add('blue-background');
};
