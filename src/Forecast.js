import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loader from "./Loader";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function searchForecast() {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div class="card-deck" id="forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="card-deck" id="forecast" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    searchForecast();
    return <Loader />;
  }
}
