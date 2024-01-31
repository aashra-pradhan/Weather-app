import React from "react";
import { MagnifyingGlass, Sun, DropHalf, Wind } from "@phosphor-icons/react";

const Weatherapp = () => {
  return (
    <div className="browser">
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="search" />
          <div className="search-icon">
            <MagnifyingGlass size={32} color="black" weight="thin" />
          </div>
        </div>
        <div className="temperature-container">
          <div className="weather-icon">
            <Sun size={120} color="yellow" weight="fill" />
          </div>
          <div className="temperature">29 deg. C</div>
          <div className="location">London</div>
        </div>
        <div className="hum-wind-container">
          <div className="humidity">
            <div className="humidity-icon">
              <DropHalf size={32} />
            </div>
            <div className="humidity-details">87% Humidity</div>
          </div>
          <div className="wind speed">
            <div className="windspeed-icon">
              <Wind size={32} />
            </div>
            <div className="humidity-details">8.26 km/hr</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherapp;
