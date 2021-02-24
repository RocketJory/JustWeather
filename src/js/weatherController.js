import { weatherView } from "./weatherCard.js";
import { weatherModel } from "./weatherData.js";

import { cityView } from "./cityInfo.js";
import { api } from "./weatherApi.js";
import { searchBar } from "./searchBar.js";

/**
 *
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
}

export const weatherController = new WeatherController(
  weatherModel,
  weatherView
);
