import { weatherData } from "./weatherData.js";
import { unitSystem } from "./unitSystem.js";
/**
 * View class for weather card
 */
export class weatherCard {
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
  }
}
