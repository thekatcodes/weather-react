import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="text"
        className="search-city"
        id="search-city"
        placeholder="Search by city"
      />
      <button className="search" type="submit">
        Search
      </button>
      <button className="current-location">My location</button>
    </form>
  );
}
