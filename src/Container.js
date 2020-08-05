import React, { useState } from "react";
import Footer from "./Footer";
import "./Container.css";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";

import axios from "axios";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Container(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "994cfaf2a113ce08ce060fdaaac64122";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <div className="weather-app">
          <div className="row location">
            <div className="col">
              <a href="/" className="btn btn-dark active" id="celsius-link">
                ºC
              </a>{" "}
              <a href="/" className="btn btn-dark" id="fahrenheit-link">
                ºF
              </a>
            </div>
            <div className="col-5">
              <form onSubmit={handleSubmit} className="search-form">
                <input
                  type="search"
                  placeholder="Take me to..."
                  className="search-city"
                  autofocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="GO!" />
              </form>
            </div>
            <div className="col">
              <p className="text-right">
                Currently in...
                <button className="my-location" type="submit">
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
            <div className="col-4 align-self-center">
              {weatherData.temperature}
            </div>
            <div className="col-4 align-self-end">
              <div className="todayicon">
                <span className="current-date">
                  <FormattedDate date={weatherData.date} />
                </span>
                <img src={weatherData.imgUrl} alt="" id="icon" />
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
            <div className="col">
              <span>13:00</span>
              <img src={weatherData.imgUrl} alt="" id="icon" />
              <div className="temp">
                30°|<strong>30°</strong>
              </div>
            </div>
            <div className="col">
              <span>16:00</span>
              <img src={weatherData.imgUrl} alt="" id="icon" />
              <div className="temp">
                28°|<strong>29°</strong>
              </div>
            </div>
            <div class="col">
              <span>16:00</span>
              <img src={weatherData.imgUrl} alt="" id="icon" />
              <div className="temp">
                28°|<strong>29°</strong>
              </div>
            </div>
            <div class="col">
              <span>16:00</span>
              <img src={weatherData.imgUrl} alt="" id="icon" />
              <div className="temp">
                28°|<strong>29°</strong>
              </div>
            </div>
            <div class="col">
              <span>16:00</span>
              <img src={weatherData.imgUrl} alt="" id="icon" />
              <div className="temp">
                28°|<strong>29°</strong>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
