import { engWords } from './english-words.js';

// convert array
const electionVotes = [
  'Sara',
  'Margaret',
  'Bob',
  'Mark',
  'Sara',
  'Carl',
  'Steve',
  'Ann',
  'Barbara',
  'Joe',
  'Sara',
  'Margaret',
  'Ann',
  'Barbara',
  'Joe',
  'Sara',
  'Margaret',
  'Bob',
];

const tallyVotes = (votes) =>
  votes.reduce(
    (acc, candidateName) => ({
      ...acc,
      [candidateName]: (acc[candidateName] || 0) + 1,
    }),
    {}
  );

console.log(tallyVotes(electionVotes));

// anagram
const myWords = [
  'pencil',
  'crayon',
  'pen',
  'elvis',
  'lives',
  'reload',
  'vile',
  'evil',
  'live',
  'reload',
  'lively',
  'nep',
  'pne',
  'veil',
];

const countTimes = (array) =>
  array.reduce((acc, str) => ({ ...acc, [str]: (acc[str] || 0) + 1 }), {});

const hasSameLetterCount = (word1, word2) => {
  const word1Count = countTimes(word1.split(''));
  const word2Count = countTimes(word2.split(''));
  return Object.keys(word1Count).every(
    (letter) =>
      word1Count[letter] === word2Count[letter] &&
      Object.keys(word1Count).length === Object.keys(word2Count).length
  );
};

const findAnagrams = (myWord, allWords) => {
  // allWords.filter((word) =>
  //   word
  //     .split('')
  //     .every((letter) => myWord.split('').includes(letter) && myWord !== word)
  // );

  return allWords
    .filter((word) => hasSameLetterCount(myWord, word))
    .filter((anagram) => anagram !== myWord);
};

// console.log(findAnagrams('ladder', engWords));

const currentInputValues = {
  firstName: 'bob',
  lastName: '',
  zipCode: '21455',
  state: '',
};

const inputCriteria = {
  firstName: [(value) => (value.length > 1 ? '' : 'Invalid first name')],
  lastName: [(value) => (value.length > 1 ? '' : 'Invalid last name')],
  zipCode: [(value) => (value.length === 5 ? '' : 'Invalid zip code')],
  state: [(value) => (value.length === 2 ? '' : 'Invalid state')],
};

const getErrorMessages = (inputs, criteria) => {
  // const errors = [];
  // Object.keys(inputs).forEach((inputName) => {
  //   const inputValue = inputs[inputName];
  //   const inputCriteria = criteria[inputName];
  //   inputCriteria.forEach((criterion) => {
  //     const errorMessage = criterion(inputValue);
  //     if (errorMessage) {
  //       errors.push(errorMessage);
  //     }
  //   });
  // });
  // return errors;

  return Object.keys(inputs).reduce((acc, fieldName) => {
    return [
      ...acc,
      ...criteria[fieldName]
        .map((test) => test(inputs[fieldName]))
        .filter((message) => message),
    ];
  }, []);
};

console.log(getErrorMessages(currentInputValues, inputCriteria));
