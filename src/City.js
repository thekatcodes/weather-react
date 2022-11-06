import "./City.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function City(props) {
  return <h1 className="city">{props.data.city}</h1>;
}
