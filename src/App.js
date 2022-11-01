import axios from "axios";
import "./App.css";

function App() {
  let city = "Tokyo";
  function test(response) {
    alert(`it is ${response.data.main.temp} in ${city}`);
  }
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(test);
  return (
    <div className="App">
      <h1> Hello world</h1>
    </div>
  );
}

export default App;
