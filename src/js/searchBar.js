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

  loadGoogleMapsAPI();

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

  /**
   * Load google maps API and then wire up autocomplete
   */
  function loadGoogleMapsAPI() {
    const existingScript = document.getElementById("googleMaps");

    if (!existingScript) {
      // add script tag
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_KEY}&libraries=places`;
      script.id = "googleMaps";
      document.body.appendChild(script);

      // once script tag has loaded, wire up autocomplete functionality
      script.addEventListener("load", setupAutocomplete);
    }
  }

  /**
   * Add autocomplete functionality to the search form input element
   */
  function setupAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(searchInput, {
      types: ["(cities)"],
    });
    google.maps.event.addListener(autocomplete, "place_changed", function () {
      const place = autocomplete.getPlace();
    });
  }
})();
