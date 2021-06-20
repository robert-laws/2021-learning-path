var myName = 'bob';
var myAge = 34;
var clubMember = true;
var schoolSupplies = ['pencil', 'notebook', 'pen', 'eraser'];
var schoolSchedule = {
  math: 'Advanced Algebra',
  science: 'Physics',
  literature: 'Modern Chinese Literature',
};

function studentProfile() {
  console.log(`student name: ${myName}`);
}

// studentProfile();

let studentName = 'melvin';

function greetStudent() {
  console.log(`Greetings, ${studentName}!`);
}

// greetStudent();

function getStudentGrade() {
  testResults = [75, 86, 93, 87];
  var testResultsAverage =
    testResults.reduce((a, b) => a + b) / testResults.length;
  return testResultsAverage;
}

// console.log(getStudentGrade());

// console.log(testResults);

if (true) {
  let newName = 'ned';
  myPlace = 'home';
}

// console.log(newName);
// console.log(myPlace);

function chooseClub() {
  let clubSelection = 'chess club';
  console.log(clubSelection);
}

// console.log(clubSelection);

if (10 > 5) {
  let answer = 'Ten is greater than five';
  const newAnswer = 34;
}

// console.log(answer);

const friendName = 'Kalvin';

function sayFriendName() {
  const friendAge = 45;
  console.log(`hi, ${friendName}!`);
}

// sayFriendName();
// console.log(newAnswer);

if ('pizza' === 'pizza') {
  const favoriteFood = 'cheese pizza';
}

// console.log(favoriteFood); // ERROR - 'favoriteFood' is only accessible within the block scope

const mathAssignment = {
  partOne: 'Read the textbook',
  partTwo: 'Complete the homework questions',
};

// mathAssignment.partThree = 'Take the quiz';

// console.log(mathAssignment);
let instructor = 'jim';

function newCourse() {
  let courseName = 'Math I';
  console.log(courseName);

  function listCourse() {
    let courseTime = '10am';
    console.log(
      `Course: ${courseName}, at time: ${courseTime}, taught by ${instructor}`
    );
  }
  listCourse();
  // console.log(courseTime);
}

newCourse();
