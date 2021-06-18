// CALCULATOR 2
let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.calculations');
const calculator = document.querySelector('.calculator');

calculator.addEventListener('click', (event) => {
  if (event.target.title !== 'RESULT') {
    divClick(event.target.innerText);
  }
  event.stopPropagation();
});

const divClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
};

const handleNumber = (value) => {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
};

const handleSymbol = (value) => {
  switch (value) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOperator = null;
      rerender();
      break;

    case '=':
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = '' + runningTotal;
      runningTotal = 0;
      break;

    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;

    default:
      handleMath(value);
      break;
  }
};

const handleMath = (value) => {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = '0';
};

const flushOperation = (intBuffer) => {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === 'x') {
    runningTotal *= intBuffer;
  } else if (previousOperator === '/') {
    runningTotal /= intBuffer;
  }
};

const rerender = () => {
  screen.innerText = buffer;
};
