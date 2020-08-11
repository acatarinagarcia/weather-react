import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }
  function temperatureMax() {
    let temperatureMax = Math.round(props.data.main.temp_max);
    return `${temperatureMax}°C`;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data.main.temp_min);
    return `${temperatureMin}°C`;
  }

  return (
    <div className="col">
      <span>{hours()}</span>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="temp">
        {temperatureMin()}|<strong>{temperatureMax()}</strong>
      </div>
    </div>
  );
}
