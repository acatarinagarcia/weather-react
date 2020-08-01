import React from "react";
import Footer from "./Footer";
import "./Container.css";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <form className="search-form">
              <input
                type="search"
                placeholder="Take me to..."
                className="search-city"
                autofocus="on"
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
          <div className="col-4 align-self-center">{data.temperature}</div>
          <div className="col-4 align-self-end">
            <div className="todayicon">
              <span className="current-date">{data.date}</span>
              <img src={data.imgUrl} alt="" id="icon" />
              <span className="current-description">{data.description}</span>
              <p className="current-time">{data.time}</p>
            </div>
          </div>
        </div>
        <span className="forecast-banner" />
        <div className="row weather-forecast">
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
