import { weatherView } from "./weatherCard.js";
import { weatherModel } from "./weatherData.js";

import { weatherApi } from "./weatherApi.js";

/**
 *
 */
export class WeatherController {
  /**
   *
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
    this.renderWeatherView(this.model);
  }

  /**
   * render the weather card from the current model
   */
  renderWeatherView() {
    this.view.renderWeather(this.model);
  }
}

export const weatherController = new WeatherController(
  weatherModel,
  weatherView
);
