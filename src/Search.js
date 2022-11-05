import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Search() {
  let city = "Vancouver";
  let [temp, setTemp] = useState(null);
  function searchResponse(response) {
    console.log(response);
    setTemp({
      temperature: response.data.main.temp,
    });
  }
  function search() {
    let apiKey = "bb476d1cfcfa03b30d9e1e73e7efd874";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(searchResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-city"
        id="search-city"
        placeholder="Search by city"
      />
      <button className="search" type="submit">
        Search
      </button>
      <button className="current-location">My location</button>
    </form>
  );
}
