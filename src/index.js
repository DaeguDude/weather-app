import "../style.css";
import { checkStatus, getWeatherJson, getPrimaryWeatherInfo } from "./weather";
import City from "./city";
import Error from "./error";
import { resetSearchInput, getUserInput } from "./helper";
import TempUnit from "./tempUnit";

const tempUnit = new TempUnit();
tempUnit.start();

const error = new Error();

const searchCityBtn = document.querySelector(".search-city-btn");

searchCityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(tempUnit.getCheckedUnit());
  const cityToFind = getUserInput();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityToFind}&units=${tempUnit.getCheckedUnit()}&appid=962edb7f9ab1add3416718398c95a830`
  )
    .then(checkStatus)
    .then(getWeatherJson)
    .then(getPrimaryWeatherInfo)
    .then((primaryInfo) => {
      const cities = document.querySelector(".cities");
      const city = new City(primaryInfo);

      cities.appendChild(city.render());
      error.hide();
      resetSearchInput();
    })
    .catch(function (err) {
      error.show();
    });
});
