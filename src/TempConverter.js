import React from "react";

function TempConverter(props) {
  const { scale, onScaleChangeHandler } = props;

  const sliderRound =
    scale === "metric" ? (
      <span className="slider round">
        <span className="metric metric--checked">C</span>
        <span className="imperial">F</span>
      </span>
    ) : (
      <span className="slider round">
        <span className="metric">C</span>
        <span className="imperial imperial--checked">F</span>
      </span>
    );

  return (
    <div className="convert-switch">
      <label className="switch">
        <input type="checkbox" onChange={onScaleChangeHandler} />
        {sliderRound}
      </label>
    </div>
  );
}

class TempUnit {
  changeDisplayToImperial() {
    document.querySelectorAll(".degree").forEach((degree) => {
      const metric = Number(degree.innerText);
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
}

export default TempConverter;
