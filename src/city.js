import React from "react";
import { toCelsius, toFahrenheit, tryConvert } from "./tempConversion";

export default function City(props) {
  const {
    name,
    country,
    temperature,
    icon,
    description,
    scale,
  } = props.cityInfo;

  const generalScale = props.scale;

  const metric =
    scale === "metric" ? temperature : tryConvert(temperature, toCelsius);
  const imperial =
    scale === "imperial" ? temperature : tryConvert(temperature, toFahrenheit);

  const imgSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <li className="city">
      <span className="city__name">
        {name}
        <sup className="city__country">{country}</sup>
      </span>
      <div className="city__weather">
        <span className="degree">
          {generalScale === "metric" ? metric : imperial}
        </span>
        {/* <sup className="unit">°F</sup> */}
        <sup className="unit">°{generalScale === "metric" ? "C" : "F"}</sup>
      </div>
      <img className="city__icon" src={imgSrc} />
      <span className="city__info">{description}</span>
      <button className="city__close">
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>
    </li>
  );
}
