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

export default TempConverter;
