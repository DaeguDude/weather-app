import "../style.css";
import { checkStatus, getWeatherJson, getPrimaryWeatherInfo } from "./weather";
import showCity from "./showCity";

const searchCityBtn = document.querySelector(".search-city-btn");

function getUserInput() {
  return document.querySelector('input[name="search-city"]').value;
}

searchCityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cityToFind = getUserInput();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityToFind}&appid=962edb7f9ab1add3416718398c95a830`
  )
    .then(checkStatus)
    .then(getWeatherJson)
    .then(getPrimaryWeatherInfo)
    .then((primaryInfo) => {
      const cities = document.querySelector(".cities");
      cities.appendChild(showCity(primaryInfo));
    })
    .catch(function (err) {
      console.log(err);
    });
});
