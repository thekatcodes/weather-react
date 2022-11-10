import "./Forecast.css";

export default function ForecastDay(props) {
  let iconImage = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card card-custom">
      <img
        src={iconImage}
        alt="Forecast icon"
        id="icon"
        className="weather-icon"
        width="60"
        height="60"
      />
      <div className="card-body" id="forecast-body">
        <div className="temp-wrapper">
          <span className="temp temp-high">{maxTemp()}</span>
          °/
          <span className="temp temp-low">{minTemp()}</span>°
        </div>
        <h5 className="card-title">{day()}</h5>
      </div>
    </div>
  );
}
