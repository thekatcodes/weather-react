import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="code-source-link">
      <a
        href="https://github.com/thekatcodes/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Katie Liu
    </div>
  );
}
