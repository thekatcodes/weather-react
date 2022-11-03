import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind, faSun } from "@fortawesome/free-solid-svg-icons";

export default function CurrentWeather() {
  let temp = "20";
  let humid = "40";
  let wind = "15";
  let desc = "cloudy";
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2" id="main-info">
          <FontAwesomeIcon id="icon" className="weather-icon" icon={faSun} />
          {/* <img src="" alt="cloudy" /> */}
        </div>
        <div className="col-2" id="main-info">
          <h3 className="temp" id="display-temp">
            {temp}
          </h3>
          <a href="/" className="link-c disable-link">
            °C
          </a>
          <span className="separate"> |</span>
          <a href="/" className="link-f">
            °F
          </a>
        </div>
        <div className="col-2" id="main-info">
          <div className="today-info">
            <span className="today-forecast" id="forecast-desc">
              {desc}
            </span>
            <span className="today-forecast">
              <FontAwesomeIcon icon={faDroplet} />
              Humidity:
              <span className="humidity">{humid}</span>%
            </span>
            <span className="today-forecast">
              <FontAwesomeIcon icon={faWind} /> Wind:
              <span className="wind">{wind}</span> km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
