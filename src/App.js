// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./styles.css";
import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Vancouver" />
      <Forecast />
    </div>
  );
}
