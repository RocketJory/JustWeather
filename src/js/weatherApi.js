import { unitSystem } from "./unitSystem.js";

/**
 * Class used to make calls to the OpenWeatherMap api
 */
export class weatherApi {
  constructor() {
    this.rootURL = "https://api.openweathermap.org/data/2.5/";
    this.apiKey = "9d2c6d51c89133c2d093bdfd29ed47cb";
  }

  /**
   * get a 4-hour weather forecast for a given city
   * @param {String} city - name of city
   * @param {String} unit - the unit system to use
   */
  getWeatherForecast(city, unit = "imperial") {
    const apiURL = `${this.rootURL}/weather?q=${city}&appid=${
      this.apiKey
    }&units=${unitSystem.getUnits()}`;

    const response = fetch(apiURL)
      .then((data) => {
        return data.json();
      })
      .finally((data) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }
}
