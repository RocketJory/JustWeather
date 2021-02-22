import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

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
  console.log(data);

  cityView.renderCityInfo(data);
  weatherModel.parseWeather(data);

  cardView.renderWeather(weatherModel);
});
