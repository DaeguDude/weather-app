import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Error from "./error";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("body")
);

function startApp() {
  const error = new Error();

  activateSearchCityBtn(error);
}

function activateSearchCityBtn(error, tempUnit) {
  console.log("activateSearchCityBtn");
}

startApp();
