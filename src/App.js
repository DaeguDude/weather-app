import React, { useState } from "react";
import PropTypes from "prop-types";

import TempConverter from "./TempConverter";
import { checkStatus, getWeatherJson, getPrimaryWeatherInfo } from "./weather";
import { v4 as uuidv4 } from "uuid";
import City from "./city";

export default function App() {
  return (
    <div className="container">
      <PageTitle />
      <Weather />
    </div>
  );
}

function Weather(props) {
  const [cityToSearch, setCityToSearch] = useState("");
  const [scale, setScale] = useState("metric");
  // Initialize array in react state
  const [cityList, setCityList] = useState([]);

  const onChangeHandler = (e) => {
    setCityToSearch(e.target.value);
  };

  const onScaleChangeHandler = (e) => {
    if (scale === "metric") {
      return setScale("imperial");
    }

    return setScale("metric");
  };

  const onAddCity = (cityInfo) => {
    const cityInfoWithId = { ...cityInfo, id: uuidv4() };
    setCityList((prevState) => {
      return [...prevState, cityInfoWithId];
    });
  };

  const onSearchHandler = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=${scale}&appid=962edb7f9ab1add3416718398c95a830`
    )
      .then(checkStatus)
      .then(getWeatherJson)
      .then(getPrimaryWeatherInfo)
      .then((primaryInfo) => {
        onAddCity({ ...primaryInfo, scale });
      })
      .catch(function (err) {
        // error.show();
      });
  };

  return (
    <section className="weather">
      <SearchBox
        cityToSearch={cityToSearch}
        onChangeHandler={onChangeHandler}
        onSearchHandler={onSearchHandler}
      />
      <Error />
      <TempConverter
        scale={scale}
        onScaleChangeHandler={onScaleChangeHandler}
      />
      <Cities scale={scale} cityList={cityList} />
    </section>
  );
}

function SearchBox(props) {
  const cityToSearch = props.cityToSearch;
  const onChangeHandler = props.onChangeHandler;
  const onSearchHandler = props.onSearchHandler;

  return (
    <header className="search-box">
      <form>
        <input
          value={cityToSearch}
          onChange={onChangeHandler}
          type="text"
          name="search-city"
          placeholder="Enter your location"
        />
        <button
          type="submit"
          className="search-city-btn"
          onClick={onSearchHandler}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
}

SearchBox.propTypes = {
  cityToSearch: PropTypes.string.isRequired,
};

function PageTitle(props) {
  return (
    <header className="header">
      <h1>WEATHER APP</h1>
    </header>
  );
}

function Error(props) {
  return <p className="error">{"Your location haven't been found!"}</p>;
}

function Cities(props) {
  const cityList = props.cityList;

  let cities = null;
  if (cityList.length > 0) {
    cities = cityList.map((city) => {
      return <City scale={props.scale} key={city.id} cityInfo={city} />;
    });
  }

  return (
    <main>
      <ul className="cities">{cities}</ul>
    </main>
  );
}
