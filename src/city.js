export default class City {
  constructor(weatherInfo) {
    const { name, country, temperature, icon, description } = weatherInfo;
    this.name = name;
    this.country = country;
    this.temperature = temperature;
    this.icon = icon;
    this.description = description;

    this.elem = null;
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  render(tempUnit) {
    const result = document.createRange().createContextualFragment(`
      <li class="city">
        <span class="city__name"
          >${this.name} <sup class="city__country">${this.country}</sup></span
        >

        <div class="city__weather">
          <span class="degree">${this.temperature}</span>
          <sup class="unit">°${tempUnit === "metric" ? "C" : "F"}</span>
        </div>
        <img class="city__icon" src="http://openweathermap.org/img/wn/${
          this.icon
        }@2x.png">
        <span class="city__info">${this.description}</span>
        <button class="city__close"><i class="fas fa-times"></i></button>
      </li>
    `);

    this.elem = result.querySelector(".city");
    result
      .querySelector(".city__close")
      .addEventListener("click", this.deleteHandler);
    return result;
  }

  deleteHandler() {
    this.elem.remove();
  }
}
