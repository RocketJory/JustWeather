import { unitSystem } from "./unitSystem.js";
import { spinner } from "./loadingIcon.js";

/**
 * Class used to make calls to the OpenWeatherMap api
 */
class weatherApi {
  constructor() {
    this.rootURL = "https://api.openweathermap.org/data/2.5/";
    this.apiKey = process.env.WEATHER_KEY; // from dotenv
  }

  /**
   * get a 4-hour weather forecast for a given city
   * @param {String} city - name of city
   * @param {String} unit - the unit system to use
   */
  getWeatherForecast(city, unit = "imperial") {
    spinner.showSpinner();

    const apiURL = `${this.rootURL}/weather?q=${city}&appid=${
      this.apiKey
    }&units=${unitSystem.getUnits()}`;

    const response = fetch(apiURL)
      .then(this.handleErrors)
      .then((res) => {
        return res.json();
      })
      .finally(() => {
        spinner.hideSpinner();
      })
      .catch((err) => {
        throw Error(response.status);
      });
    return response;
  }

  getWeatherForecastLatLon(lat, lon, unit = "imperial") {
    spinner.showSpinner();

    const apiURL = `${this.rootURL}/weather?lat=${lat}&lon=${lon}&appid=${
      this.apiKey
    }&units=${unitSystem.getUnits()}`;

    const response = fetch(apiURL)
      .then(this.handleErrors)
      .then((res) => {
        return res.json();
      })
      .finally(() => {
        spinner.hideSpinner();
      })
      .catch((err) => {
        console.error(err);
        throw Error(response.status);
      });
    return response;
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  }
}

export const api = new weatherApi();
