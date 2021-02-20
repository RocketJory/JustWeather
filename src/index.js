import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { weatherApi } from "./js/weatherApi.js";
import { weatherCard } from "./js/weatherCard.js";
import { cityInfo } from "./js/cityInfo.js";
import { weatherData } from "./js/weatherData.js";

import { unitSystem } from "./js/unitSystem.js";

const api = new weatherApi();

const weatherModel = new weatherData();

const cityView = new cityInfo();
const cardView = new weatherCard();

api.getWeatherForecast("Ottawa").then((data) => {
  cityView.setName(data.name);
  weatherModel.parseWeather(data);

  cardView.renderWeather(weatherModel);
});
