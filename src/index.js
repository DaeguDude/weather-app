import "../style.css";
import { checkStatus, getWeatherJson, getPrimaryWeatherInfo } from "./weather";
import showCity from "./showCity";
import Error from "./error";
import { resetSearchInput, getUserInput } from "./helper";

const error = new Error();

const searchCityBtn = document.querySelector(".search-city-btn");

searchCityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cityToFind = getUserInput();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityToFind}&units=metric&appid=962edb7f9ab1add3416718398c95a830`
  )
    .then(checkStatus)
    .then(getWeatherJson)
    .then(getPrimaryWeatherInfo)
    .then((primaryInfo) => {
      const cities = document.querySelector(".cities");
      cities.appendChild(showCity(primaryInfo));
      error.hide();
      resetSearchInput();
    })
    .catch(function (err) {
      error.show();
    });
});
