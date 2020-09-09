const API_KEY = 'fee74ce15474bc68fac86d1cb999c3f7';

document.querySelector('.btn').onclick = getWeather;

function getWeather(e) {
  e.preventDefault();
  const city = document.querySelector('.city-name').value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(
        '.name'
      ).textContent = `City: ${data.name}, ${data.sys.country}`;

      document.querySelector('.degree').innerHTML = `Temperature: ${
        Math.round(data.main.temp - 273) + '&deg;'
      }`;

      document.querySelector('.disclaimer').textContent =
        data.weather[0]['description'];

      //https://openweathermap.org/img/wn/02d@2x.png
      document.querySelector(
        '.features'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
      // catch any errors
    });
}
