import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function searchForecast() {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    const apiKey = "be60748992fab0f5da8162563fb21245";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="card-deck" id="forecast">
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    searchForecast();
    return "Loading";
  }
}
