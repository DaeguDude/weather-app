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
      this.changeDisplayToImperial();
    } else {
      document.querySelector(".metric").classList.add("metric--checked");
      document.querySelector(".imperial").classList.remove("imperial--checked");
      this.changeDisplayToMetric();
    }
  }

  changeDisplayToImperial() {
    document.querySelectorAll(".degree").forEach((degree) => {
      const metric = Number(degree.innerText);
      console.log(metric);
      degree.innerText = this.convertToImperial(metric);

      document.querySelectorAll(".unit").forEach((unit) => {
        unit.innerText = "°F";
      });
    });
  }

  changeDisplayToMetric() {
    document.querySelectorAll(".degree").forEach((degree) => {
      const imperial = Number(degree.innerText);
      console.log(imperial);
      degree.innerText = this.convertToMetric(imperial);

      document.querySelectorAll(".unit").forEach((unit) => {
        unit.innerText = "°C";
      });
    });
  }

  convertToImperial(metric) {
    return Math.trunc(1.8 * metric + 32);
  }

  convertToMetric(imperial) {
    return Math.trunc((imperial - 32) / 1.8);
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
