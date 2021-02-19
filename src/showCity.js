function showCity(weatherInfo) {
  const { name, country, temperature, icon, description } = weatherInfo;

  return document.createRange().createContextualFragment(`
    <li class="city">
      <span class="city__name"
        >${name} <sup class="city__country">${country}</sup></span
      >

      <div class="city__weather">
        <span class="degree">${temperature}</span>
        <sup class="unit">°C</span>
      </div>
      <img class="city__icon" src="http://openweathermap.org/img/wn/${icon}@2x.png">
      <span class="city__info">${description}</span>
      <button class="city__close"><i class="fas fa-times"></i></button>
    </li>
  `);
}

export default showCity;
