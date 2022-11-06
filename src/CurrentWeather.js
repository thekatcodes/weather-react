import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

export default function CurrentWeather(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2" id="main-info">
          <img src="{props.data.icon}" alt="Weather icon" />
        </div>
        <div className="col-2" id="main-info">
          <h3 className="temp" id="display-temp">
            {Math.round(props.data.temperature)}
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
              {props.data.description}
            </span>
            <span className="today-forecast">
              <FontAwesomeIcon icon={faDroplet} />
              Humidity:
              <span className="humidity">{props.data.humidity}</span>%
            </span>
            <span className="today-forecast">
              <FontAwesomeIcon icon={faWind} /> Wind:
              <span className="wind">{Math.round(props.data.wind)}</span> km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
