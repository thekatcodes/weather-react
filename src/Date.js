import "./Date.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Date() {
  let date = "Monday, August 31";
  let time = "12:30";
  return (
    <h2 className="date">
      {date} <br /> {time}
    </h2>
  );
}
