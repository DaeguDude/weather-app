export default class TempUnit {
  constructor() {
    this.convertSwitch = document.querySelector(".convert-switch");
    this.checkBox = document.querySelector('.switch input[type="checkbox"]');

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  start() {
    this.checkBox.addEventListener("change", this.onChangeHandler);
  }

  onChangeHandler() {
    if (this.checkBox.checked) {
      document.querySelector(".metric").classList.remove("metric--checked");
      document.querySelector(".imperial").classList.add("imperial--checked");
    } else {
      document.querySelector(".metric").classList.add("metric--checked");
      document.querySelector(".imperial").classList.remove("imperial--checked");
    }
  }

  getCheckedUnit() {
    const input = document.querySelector('.switch input[type="checkbox"]');
    if (!input.checked) {
      return "metric";
    }

    return "imperial";
  }

  // 만약에 input이 체크가 안 되어있다면... metric
  // 만약에 input이 체크가 되어 있다면 ... fahrenheit
}
