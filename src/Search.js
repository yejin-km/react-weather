import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(" ");
  let [humidity, setHumidity] = useState(" ");
  let [wind, setWind] = useState(" ");
  let [icon, setIcon] = useState(null);

  function cityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function buttonClicked(event) {
    event.preventDefault();
    let key = "bc2cd97eaa209e7d22d8f3c84081655f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="search for a city"
          onChange={cityName}
        />
        <input type="submit" value="Search" onClick={buttonClicked} />
      </form>
      <div>
        <ul>
          <li>Temperature:{temperature}°F</li>
          <li>Description: {description}</li>
          <li>Humidity:{humidity}%</li>
          <li>Wind:{wind} mph</li>

          <img src={icon} alt="" />
        </ul>
      </div>
    </div>
  );
}
