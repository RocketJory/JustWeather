import { api } from "./weatherApi.js";
import { cityView } from "./cityInfo.js";
import { weatherController } from "./weatherController.js";

/**
 * IIFE module for the search bar
 */
export const searchBar = (function () {
  let searchForm = document.forms["search-form"];
  let searchFormEl = document.querySelector("#search-form");
  let searchInput = searchFormEl.querySelector("input");

  /**
   * on form submission
   */
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); //stop form from submitting
    const searchLocation = searchForm["location"].value;

    getWeather(searchLocation);
  });

  const getWeather = function (location) {
    api
      .getWeatherForecast(location)
      .then((data) => {
        cityView.renderCityInfo(data);
        weatherController.updateWeather(data);
      })
      .finally(() => isValid())
      .catch((err) => {
        console.log(err);
        isInvalid();
      });
  };

  const isInvalid = function () {
    searchInput.classList.add("is-invalid");
  };
  const isValid = function () {
    searchInput.classList.remove("is-invalid");
  };
})();
