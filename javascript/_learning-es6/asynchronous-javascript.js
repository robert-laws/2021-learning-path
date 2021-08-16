// promises
const delay = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof seconds === 'number') {
        resolve(`complete after ${seconds} seconds.`);
      } else {
        reject(`error: ${seconds} is not a number`);
      }
    }, seconds * 1000);
  });
};

// delay(2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// load data with a promise
const spacePeople = () => {
  return new Promise((resolve, reject) => {
    const api = 'http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject(`error: ${request.status}`);
      }
    };
    request.onerror = (error) => reject(error);
    request.send();
  });
};

// spacePeople().then((data) => {
//   console.log(data);
// });

// promises with fetch
const moreSpacePeople = () => {
  const data = fetch('http://api.open-notify.org/astros.json');
  return data;
};

// moreSpacePeople()
//   .then((data) => {
//     return data.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// async/await
const asyncDelay = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds === 'number') {
      resolve(`complete after ${seconds} seconds.`);
    } else {
      reject(`error: ${seconds} is not a number`);
    }
  });
};

// const countToFive = async () => {
//   let result = await asyncDelay(4);
//   console.log(result);
// };

// countToFive();

// async/await with fetch
const gitHubRequest = async (login) => {
  let response = await fetch(`https://api.github.com/users/${login}`);
  let json = await response.json();
  let summary = `${json.name}, ${json.company}`;
  return summary;
};

let gitHubUser = async (user) => {
  let myUser = await gitHubRequest(user);
  console.log(myUser);
};

gitHubUser('robert-laws');
