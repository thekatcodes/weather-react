import "./CurrentWeather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentWeather() {
  let temp = "20";
  let humid = "40";
  let wind = "15";
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2" id="main-info">
          <img src="" alt="cloudy" id="icon" className="weather-icon" />
        </div>
        <div className="col-2" id="main-info">
          <h3 className="temp" id="display-temp">
            {temp}
          </h3>
          <a href="#" className="link-c disable-link">
            °C
          </a>
          <span className="separate"> |</span>
          <a href="#" className="link-f">
            °F
          </a>
        </div>
        <div className="col-2" id="main-info">
          <div className="today-info">
            <span className="today-forecast" id="forecast-desc"></span>
            <span className="today-forecast">
              <i className="fa-solid fa-droplet"></i> Humidity:
              <span className="humidity">{humid}</span>%
            </span>
            <span className="today-forecast">
              <i className="fa-solid fa-wind"></i> Wind:
              <span className="wind">{wind}</span> km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
