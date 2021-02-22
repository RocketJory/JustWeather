import { api } from "./weatherApi.js";
import { cityView } from "./cityInfo.js";
import { weatherController } from "./weatherController.js";

export const searchBar = (function () {
  const searchForm = document.forms["search-form"];

  searchForm.addEventListener("submit", function (e) {
    if (true) {
      e.preventDefault(); //stop form from submitting
      const searchLocation = searchForm["location"].value;
      console.log(searchLocation);

      api.getWeatherForecast(searchLocation).then((data) => {
        cityView.renderCityInfo(data);
        weatherController.updateWeather(data);
      });
    }
  });
})();
