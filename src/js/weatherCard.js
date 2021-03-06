import { weatherData } from "./weatherData.js";
import { unitSystem } from "./unitSystem.js";

/**
 * View class for weather card
 */
class weatherCard {
  /**
   * store all DOM elements
   */
  constructor() {
    this.cardDiv = document.querySelector("#weather-card");
    this.currentTemp = this.cardDiv.querySelector("#current-temp");
    this.feelsLikeTemp = this.cardDiv.querySelector("#feels-like-temp");
    this.weatherMain = this.cardDiv.querySelector("#weather-main");
    this.weatherDescription = this.cardDiv.querySelector(
      "#weather-description"
    );
    this.weatherIcon = this.cardDiv.querySelector("#weather-icon");
    this.windData = this.cardDiv.querySelector("#wind-data");
    this.pressureData = this.cardDiv.querySelector("#pressure-data");
    this.cloudData = this.cardDiv.querySelector("#cloud-data");

    this.precip = this.cardDiv.querySelector("#precip");
    this.precipData = this.precip.querySelector("#precip-data");
    this.precipIcon = this.precip.querySelector("#precip-icon");
  }

  /**
   * Take in a weather data model and render to the weather card
   * @param {weatherData} weatherData
   */
  renderWeather(weatherData) {
    this.weatherMain.innerHTML = weatherData.currentWeather;
    this.weatherDescription.innerHTML = weatherData.weatherDescription;
    this.currentTemp.innerHTML = unitSystem.formatTemperature(weatherData.temp);
    this.feelsLikeTemp.innerHTML = `Feels like ${unitSystem.formatTemperature(
      weatherData.feels_like
    )}`;
    this.weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weatherData.weatherIconId}.png`
    );
    this.windData.innerHTML = unitSystem.formatWind(
      weatherData.windSpeed,
      weatherData.windDeg
    );
    this.pressureData.innerHTML = unitSystem.formatPressure(
      weatherData.pressure
    );
    this.cloudData.innerHTML = unitSystem.formatCloud(weatherData.cloudPercent);
    console.log(weatherData);
    if ("snow1h" in weatherData) {
      this.precip.classList = "col";
      this.precipData.innerHTML = unitSystem.formatPrecip(weatherData.snow1h);
      this.precipIcon.classList = "fas fa-snowflake";
    } else if ("rain1h" in weatherData) {
      this.precip.classList = "col";
      this.precipData.innerHTML = unitSystem.formatPrecip(weatherData.rain1h);
      this.precipIcon.classList = "fas fa-tint";
    } else {
      this.precip.classList = "d-none";
    }

    this.showCard();
  }

  showCard() {
    this.cardDiv.classList.remove("d-none");
  }

  hideCard() {
    this.cardDiv.classList.add("d-none");
  }
}

export const weatherView = new weatherCard();
