const form = document.querySelector('.myForm');
const firstName = document.querySelector('#firstName');
const age = document.querySelector('#age');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formFirstName = firstName.value;
  const formAge = age.value;

  let ageType = typeof formAge;
  return ageType;
});
