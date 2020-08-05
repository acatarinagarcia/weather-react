import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <a href="/" className="btn btn-dark active">
          ºC
        </a>{" "}
        <a href="/" onClick={convertToFahrenheit} className="btn btn-dark">
          ºF
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <a href="/" className="btn btn-dark">
          ºC
        </a>{" "}
        <a href="/" onClick={convertToCelsius} className="btn btn-dark active">
          ºF
        </a>
      </div>
    );
  }
}
