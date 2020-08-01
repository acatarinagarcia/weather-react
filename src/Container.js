import React from "react";
import Footer from "./Footer";
import "./Container.css";

export default function Container() {
  let data = {
    city: "Porto",
    country: "PT",
    temperature: 32,
    date: "Thursday 16 Jul , 2020",
    description: "Clear Sky",
    time: "21:13",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 38,
    wind: 4,
  };

  return (
    <div className="Container">
      <div className="weather-app">
        <div className="row" id="location">
          <div className="col">
            <a href="/" class="btn btn-dark active" id="celsius-link">
              ºC
            </a>{" "}
            <a href="/" class="btn btn-dark" id="fahrenheit-link">
              ºF
            </a>
          </div>
          <div className="col-5">
            <form className="search-form" id="search-form">
              <input
                type="search"
                placeholder="Take me to..."
                id="search-city"
              />
              <input type="submit" value="GO!" />
            </form>
          </div>
          <div className="col">
            <p className="text-right">
              Currently in...
              <button
                className="my-location"
                type="submit"
                id="my-location"
              ></button>
            </p>
          </div>
        </div>

        <div className="row" id="now-forecast">
          <div className="col-4 align-self-start">
            <h1>{data.city}</h1>
            <h2>{data.country}</h2>
            <ul>
              <li>
                Humidity: {data.humidity}
                <span id="humidity" />%
              </li>
              <li>
                Wind: {data.wind}
                <span id="wind" /> km/h
              </li>
            </ul>
          </div>
          <div className="col-4 align-self-center" id="current-temp">
            {data.temperature}
          </div>
          <div className="col-4 align-self-end">
            <div className="todayicon">
              <span className="current-date" id="current-date">
                {data.date}
              </span>
              <img src={data.imgUrl} alt="" id="icon" />
              <span id="current-description">{data.description}</span>
              <p className="currentTime" id="current-time">
                {data.time}
              </p>
            </div>
          </div>
        </div>
        <span id="forecast-banner" />
        <div className="row weather-forecast" id="forecast">
          <div className="col">
            <span>13:00</span>
            <img src={data.imgUrl} alt="" id="icon" />
            <div className="temp">
              30°|<strong>30°</strong>
            </div>
          </div>
          <div className="col">
            <span>16:00</span>
            <img src={data.imgUrl} alt="" id="icon" />
            <div className="temp">
              28°|<strong>29°</strong>
            </div>
          </div>
          <div class="col">
            <span>16:00</span>
            <img src={data.imgUrl} alt="" id="icon" />
            <div className="temp">
              28°|<strong>29°</strong>
            </div>
          </div>
          <div class="col">
            <span>16:00</span>
            <img src={data.imgUrl} alt="" id="icon" />
            <div className="temp">
              28°|<strong>29°</strong>
            </div>
          </div>
          <div class="col">
            <span>16:00</span>
            <img src={data.imgUrl} alt="" id="icon" />
            <div className="temp">
              28°|<strong>29°</strong>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
