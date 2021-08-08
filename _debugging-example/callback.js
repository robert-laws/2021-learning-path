const API_KEY = 'a74e4a56e51013cf2acc075cc35b7097';
const url = `https://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=${API_KEY}`;

let httpRequest = new XMLHttpRequest();

const get = (url, success, failure) => {
  httpRequest.open('GET', url);
  httpRequest.onload = () => {
    if (httpRequest.status === 200) {
      success(httpRequest.responseText);
    } else {
      failure(httpRequest.status);
    }
  };
  httpRequest.send();
};

function tempToF(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

const successHandler = (data) => {
  const parsedData = JSON.parse(data);
  const temp = tempToF(parsedData.main.temp);
  return temp;
};

const failHandler = (status) => {
  const errorMessage = `Request failed with status: ${status}`;
  return errorMessage;
};

get(url, successHandler, failHandler);
// successHandler(httpRequest.responseText);
