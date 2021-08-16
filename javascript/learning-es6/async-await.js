// async/await

const API_KEY = '';
const locations = ['chicago', 'miami', 'new+york', 'boston', 'seattle'];

const get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.status));
      }
    };
    xhr.send();
  });
};

const tempToF = (kelvin) => {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
};

const successHandler = (data) => {
  const parsedData = JSON.parse(data);
  const temp = tempToF(parsedData.main.temp);
  return temp;
};

const failHandler = (status) => {
  const errorMessage = `Request failed with status: ${status}`;
  return errorMessage;
};

const urls = locations.map(
  (location) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
);

let getWeather = async () => {
  try {
    let responses = [];
    for (let url of urls) {
      responses.push(await get(url));
    }
    let literals = responses.map((response) => successHandler(response));
    console.log(literals.join(', '));
  } catch (error) {
    console.log(failHandler(error));
  } finally {
    console.log('Done!');
  }
};

getWeather();
