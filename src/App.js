import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <Search />
        <p>
          <a href="https://github.com/yejin-km/react-weather">
            Open source code
          </a>{" "}
          by Yejin Kim
        </p>
      </div>
    </div>
  );
}
