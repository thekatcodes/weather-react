import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Search.css";
import City from "./City";
import CurrentWeather from "./CurrentWeather";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function searchResponse(response) {
    // console.log(response);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    const apiKey = "fe1483f743b581b5520a1b725af03a49";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchResponse);
  }
  function searchLocation(response) {
    console.log(response);
    const apiKey = "fe1483f743b581b5520a1b725af03a49";
    let lat = response.coords.latitude;
    let lon = response.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchResponse);
  }
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
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
          <button className="current-location" onClick={getCurrentPosition}>
            My location
          </button>
        </form>
        <City data={weather} />
        <FormatDate date={weather.date} />
        <CurrentWeather data={weather} />
        <Forecast coord={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
