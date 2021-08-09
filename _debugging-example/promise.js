// const API_KEY = 'YOUR_API_KEY';
const url = `https://api.openweathermap.org/data/2.5/weather?q=location&APPID=${API_KEY}`;

const weatherDiv = document.querySelector('#temperature');
const locations = ['new+york,us', 'houston,us', 'seattle,us'];

const urls = locations.map((location) => {
  return url.replace('location', location);
});

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

Promise.all([get(urls[0]), get(urls[1]), get(urls[2])])
  .then((results) => {
    return results.map((result) => {
      return successHandler(result);
    });
  })
  .then((temperatures) => {
    weatherDiv.innerHTML = `<h4>Temperatures</h4><div>${temperatures.join(
      '---'
    )}</div>`;
  })
  .catch((status) => {
    weatherDiv.innerHTML = failHandler(status);
  })
  .finally(() => {
    console.log('promise completed');
  });
