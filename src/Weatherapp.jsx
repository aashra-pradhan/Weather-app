import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  MagnifyingGlass,
  Sun,
  DropHalf,
  Wind,
  Divide,
  AddressBook,
  Parachute,
  Cloud,
  CloudRain,
  Snowflake,
} from "@phosphor-icons/react";

const Weatherapp = () => {
  let API_KEY = "0ee0df5365a8cb6c4458c0e2054f3ffa";

  const [location, setLocation] = useState("London");
  const [weatherdata, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  // const [search, setSearch] = useState("");

  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    setLocation(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // Call your function here
      handleEnter();
    }
  }

  function handleEnter(e) {
    // e.preventDefault(); // Prevent form submission because natra page reloads immediately
    setLocation(location);
    fetchData();
  }
  //   //if it is not empty, then our url will be constructed, then the followig things are carried out
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
  //   let response = await fetch(url);
  //   // fetch will bring data from api and store in this "response" variable
  //   // await ko meaning chai yo variable ma data aainasake samma next step ma move nahou
  //   let data = await response.json();
  //   // this was parsing data into json
  //   setWeatherData(data);

  //   console.log(data);

  //   // const humidity = document.getElementsByClassName("humidity-details");
  //   // const wind = document.getElementsByClassName("wind-details");
  //   // const temperature = document.getElementsByClassName("temperature");
  //   // const locationdisplay = document.getElementsByClassName("location");

  //   // humidity[0].innerHTML = data.main.humidity + "%";
  //   // wind[0].innerHTML = data.wind.speed + "km/hr";
  //   // temperature[0].innerHTML = data.main.temp + " deg. C";
  //   // locationdisplay[0].innerHTML = data.name;
  console.log(search);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError("");
      setLoaded(true);

      // if (
      //   weatherdata.weather[0].icon === "01d" ||
      //   weatherdata.weather[0].icon === "01n"
      // ) {
      //   setWicon(<Sun size={120} color="yellow" weight="thin" />);
      // }
      // if (
      //   weatherdata.weather[0].icon === "02d" ||
      //   weatherdata.weather[0].icon === "02n"
      // ) {
      //   setWicon(<Cloud size={120} color="white" weight="fill" />);
      // }

      // if (
      //   weatherdata.weather[0].icon === "03d" ||
      //   weatherdata.weather[0].icon === "03n" ||
      //   weatherdata.weather[0].icon === "04d" ||
      //   weatherdata.weather[0].icon === "04n"
      // ) {
      //   setWicon(<CloudRain size={120} color="lightblue" weight="fill" />);
      // }

      // if (
      //   weatherdata.weather[0].icon === "09d" ||
      //   weatherdata.weather[0].icon === "09n" ||
      //   weatherdata.weather[0].icon === "10d" ||
      //   weatherdata.weather[0].icon === "10n"
      // ) {
      //   setWicon(<CloudRain size={120} color="lightblue" weight="fill" />);
      // }
      // if (
      //   weatherdata.weather[0].icon === "13d" ||
      //   weatherdata.weather[0].icon === "13n"
      // ) {
      //   setWicon(<Snow size={120} color="white" weight="fill" />);
      // }
    } catch (error) {
      // console.log(response.data); //You can see all the weather data in console log
      console.error(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="browser">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="search"
              className="cityInput"
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <div className="search-icon" onClick={handleEnter}>
              <MagnifyingGlass size={32} color="black" weight="thin" />
            </div>
          </div>
          <div>
            {error ? (
              <p className="error-message">{error}</p>
            ) : loaded ? (
              <>
                <div className="temperature-container">
                  <div className="weather-icon">
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherdata?.weather[0].icon}@2x.png`}
                      alt="weather icon"
                    />
                  </div>
                  <div className="temperature">{weatherdata?.main.temp}°C</div>
                  <div className="location">{weatherdata?.name}</div>
                  <div className="description">
                    {weatherdata?.weather[0].description}
                  </div>
                </div>
                <div className="hum-wind-container">
                  <div className="humidity">
                    <div className="humidity-icon">
                      <DropHalf size={32} />
                    </div>
                    <div className="humidity-title">Humidity</div>
                    <div className="humidity-details">
                      {weatherdata?.main.humidity} %
                    </div>
                  </div>
                  <div className="wind speed">
                    <div className="windspeed-icon">
                      <Wind className="windspeed-icon" size={32} />
                    </div>
                    <div className="wind-title">Wind speed</div>
                    <div className="wind-details">
                      {weatherdata?.wind.speed} km/hr
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>Loading data</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weatherapp;
