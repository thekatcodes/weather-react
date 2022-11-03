// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./styles.css";
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Date />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}
