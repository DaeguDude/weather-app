const weatherInfo = {
  name: "New York",
  country: "US",
  temperature: 5,
  icon: "snow",
  description: "clear sky",
};

function makeCity(weatherInfo) {
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
      <i class="city__icon fas fa-snowflake"></i>
      <span class="city__info">${description}</span>
      <button class="city__close"><i class="fas fa-times"></i></button>
    </li>
  `);
}
