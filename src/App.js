// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./styles.css";
import Search from "./Search";
import Date from "./Date";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Vancouver" />
      <Date />
      <Forecast />
    </div>
  );
}
