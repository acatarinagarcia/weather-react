import React, { useState } from "react";
import Footer from "./Footer";
import "./Container.css";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Container(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  function handleForecastResponse(response) {
    setForecast({
      ready: true,
      data: response.data,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = "994cfaf2a113ce08ce060fdaaac64122";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleForecastResponse);
    });
  }

  function search() {
    let apiKey = "994cfaf2a113ce08ce060fdaaac64122";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
  }

  if (weatherData.ready && forecast.ready) {
    return (
      <div className="Container">
        <div className="weather-app">
          <div className="row location">
            <div className="col">
              <div className="button">
                <a href="/" className="btn btn-dark" onClick={showCelsius}>
                  ºC
                </a>{" "}
                <a href="/" onClick={showFahrenheit} className="btn btn-dark">
                  ºF
                </a>
              </div>
            </div>
            <div className="col-5">
              <form onSubmit={handleSubmit} className="search-form">
                <input
                  type="search"
                  placeholder="Take me to..."
                  className="search-city"
                  autofocus="off"
                  onChange={handleCityChange}
                />
                <input type="submit" value="GO!" />
              </form>
            </div>
            <div className="col">
              <p className="text-right">
                <strong>Currently in...</strong>
                <button
                  className="my-location"
                  type="submit"
                  onClick={displayLocation}
                >
                  <FontAwesomeIcon icon={faLocationArrow} />{" "}
                </button>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-4 align-self-start">
              <h1>{weatherData.city}</h1>
              <h2>{weatherData.country}</h2>
              <ul>
                <li>
                  Humidity: {weatherData.humidity}
                  <span className="humidity" />%
                </li>
                <li>
                  Wind: {weatherData.wind}
                  <span className="wind" /> km/h
                </li>
              </ul>
            </div>
            <WeatherTemperature temp={weatherData.temperature} unit={unit} />
            <div className="col-4 align-self-end">
              <div className="todayicon">
                <span className="current-date">
                  <FormattedDate date={weatherData.date} />
                </span>
                <div>
                  <WeatherIcon code={weatherData.icon} />
                </div>
                <span className="text-capitalize current-description">
                  {weatherData.description}
                </span>
                <p className="current-time">
                  {" "}
                  <FormattedHour date={weatherData.date} />
                </p>
              </div>
            </div>
          </div>
          <span className="forecast-banner" />
          <div className="row weather-forecast">
            <WeatherForecastPreview data={forecast.data.list[0]} />
            <WeatherForecastPreview data={forecast.data.list[1]} />
            <WeatherForecastPreview data={forecast.data.list[2]} />
            <WeatherForecastPreview data={forecast.data.list[3]} />
            <WeatherForecastPreview data={forecast.data.list[4]} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return <div>Loading...Please wait... </div>;
  }
}
