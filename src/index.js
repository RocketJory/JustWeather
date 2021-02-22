import "./style.scss";

import { api } from "./js/weatherApi.js";
import { cityView } from "./js/cityInfo.js";
import { weatherController } from "./js/weatherController.js";

import { searchBar } from "./js/searchBar.js";

api.getWeatherForecast("Ottawa").then((data) => {
  cityView.renderCityInfo(data);
  weatherController.updateWeather(data);
});
