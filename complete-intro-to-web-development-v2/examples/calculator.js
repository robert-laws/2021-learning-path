// CALCULATOR
const calculator = document.querySelector('.calculator');
const resultCell = document.querySelector('.calculations');

calculator.addEventListener('click', (event) => {
  if (event.target.title !== 'RESULT') {
    buildCalculation(event.target.title, event.target.innerText);
  }
  event.stopPropagation();
});

let firstNumber = '';
let secondNumber = '';
let operationType = '';

const buildCalculation = (type, value) => {
  switch (type) {
    case 'EQUALS':
      doCalculation();
      break;

    case 'NUMBER':
      putNumber(value);
      break;

    case 'OPERATION':
      putOperation(value);
      break;

    case 'CLEAR':
      clearAll();

    default:
      break;
  }

  setResult();
};

const doCalculation = () => {
  let result = 0;
  if (firstNumber !== '' && operationType !== '') {
    let numberOne = parseInt(firstNumber);
    let numberTwo = parseInt(secondNumber);
    if (operationType === '+') {
      result = numberOne + numberTwo;
    } else if (operationType === '-') {
      result = numberOne - numberTwo;
    } else if (operationType === '/') {
      result = numberOne / numberTwo;
    } else if (operationType === 'x') {
      result = numberOne * numberTwo;
    }
  }
  firstNumber = result;
  secondNumber = '';
  operationType = '';
  setResult();
};

const putNumber = (number) => {
  if (operationType === '') {
    firstNumber = firstNumber.toString() + number.toString();
  } else {
    secondNumber = secondNumber.toString() + number.toString();
  }
};

const putOperation = (operation) => {
  if (operationType !== '') {
    doCalculation();
    operationType = operation;
  } else {
    operationType = operation;
  }
};

const clearAll = () => {
  firstNumber = '0';
  secondNumber = '';
  operationType = '';
  setResult();
};

const setResult = () => {
  if (operationType === '') {
    resultCell.innerText = firstNumber;
  } else {
    resultCell.innerText = secondNumber;
  }
};
