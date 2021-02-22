import "./style.scss";

import { weatherApi } from "./js/weatherApi.js";
import { weatherCard } from "./js/weatherCard.js";
import { cityInfo } from "./js/cityInfo.js";
import { weatherData } from "./js/weatherData.js";

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
