import { weatherView } from "./weatherCard.js";
import { weatherModel } from "./weatherData.js";

import { cityView } from "./cityInfo.js";
import { api } from "./weatherApi.js";
import { searchBar } from "./searchBar.js";

/**
 * Controller class for weather data
 */
export class WeatherController {
  /**
   * @param {weatherModel} model
   * @param {weatherView} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Update the weather model from the resulting api data
   * @param {Object} apiData
   */
  updateWeather(apiData) {
    this.model.parseWeather(apiData);
    this.model.setUnits();
    this.renderWeatherView(this.model);
  }

  /**
   * render the weather card from the current model
   */
  renderWeatherView() {
    this.view.renderWeather(this.model);
  }

  /**
   * Call OpenWeatherMap api with location (city name) and render results
   * @param {String} location
   */
  makeWeatherCall(location) {
    api
      .getWeatherForecast(location)
      .then((data) => {
        cityView.renderCityInfo(data);
        this.updateWeather(data);
      })
      .finally(() => searchBar.isValid())
      .catch((err) => {
        console.log(err);
        searchBar.isInvalid();
      });
  }

  /**
   * Call OpenWeatherMap api with geolocation result and render results
   */
  makeWeatherCallGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          api
            .getWeatherForecastLatLon(pos.coords.latitude, pos.coords.longitude)
            .then((data) => {
              cityView.renderCityInfo(data);
              this.updateWeather(data);
            })
            .finally(() => searchBar.isValid())
            .catch((err) => {
              console.log(err);
              searchBar.isInvalid();
            });
        },
        geoLocationError,
        {
          timeout: 3000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      makeWeatherCall("Ottawa");
    }

    function geoLocationError() {
      console.warn("error getting geolocation");
    }
  }
}

export const weatherController = new WeatherController(
  weatherModel,
  weatherView
);
