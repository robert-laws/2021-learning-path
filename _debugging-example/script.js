const button = document.querySelector('.my-button');
const boxes = document.querySelectorAll('.box');

button.addEventListener('click', () => {
  clearBoxBackground();
  // addBoxBackground(getRandomBox());
  let result = isEven(2);
  console.log(result);
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

function isEven(n) {
  if (n == 0) {
    result = true;
  } else if (n == 1) {
    result = false;
  } else {
    let number = n - 2;
    isEven(number);
  }
  return result;
}

console.log(isEven(2));
