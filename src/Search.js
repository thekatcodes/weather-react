import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Search.css";
import City from "./City";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function searchResponse(response) {
    console.log(response);
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humdity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchResponse);
  }
  if (weather.ready) {
    return (
      <div className="weatherSearch">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-city"
            id="search-city"
            placeholder="Search by city"
            onChange={updateCity}
          />
          <button className="search" type="submit">
            Search
          </button>
          <button className="current-location">My location</button>
        </form>
        <City data={weather} />;
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
