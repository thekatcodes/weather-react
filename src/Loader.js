import "./Loader.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        visible={true}
      />
    </div>
  );
}
