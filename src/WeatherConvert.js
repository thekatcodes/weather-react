import React, { useState } from "react";
import "./CurrentWeather.css";

export default function WeatherConvert(props) {
  const [unit, setUnit] = useState("celsius");
  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="col-2" id="main-info">
        <h3 className="temp" id="display-temp">
          {Math.round(props.celsius)}
        </h3>
        <a href="/" className="link-c disable-link">
          <b>°C</b>
        </a>
        <span className="separate"> |</span>
        <a href="/" className="link-f" onClick={showF}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = Math.round(props.celsius * 1.8 + 32);
    return (
      <div className="col-2" id="main-info">
        <h3 className="temp" id="display-temp">
          {" "}
          {fahrenheit}
        </h3>
        <a href="/" className="link-c" onClick={showC}>
          °C
        </a>
        <span className="separate"> |</span>
        <a href="/" className="link-f">
          <b>°F</b>
        </a>
      </div>
    );
  }
}
