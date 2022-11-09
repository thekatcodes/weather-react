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
    <div class="card card-custom">
      <img
        src={iconImage}
        alt="Forecast icon"
        id="icon"
        class="weather-icon"
        width="60"
        height="60"
      />
      <div class="card-body" id="forecast-body">
        <div class="temp-wrapper">
          <span class="temp temp-high">{maxTemp()}</span>
          °/
          <span class="temp temp-low">{minTemp()}</span>°
        </div>
        <h5 class="card-title">{day()}</h5>
      </div>
    </div>
  );
}
