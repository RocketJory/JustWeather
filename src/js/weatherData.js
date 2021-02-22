/**
 * data class used to represent relevant weather information.
 * processes data from the open weather map api.
 * connects to the weather card view class.
 */
class WeatherData {
  constructor() {}

  /**
   * parse data coming from the OpenWeatherMap api into the data model
   */
  parseWeather(data) {
    this.temp = data.main.temp;
    this.feels_like = data.main.feels_like;
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.currentWeather = data.weather[0].main;
    this.weatherDescription = data.weather[0].description;
    this.weatherIconId = data.weather[0].icon;
    this.windSpeed = data.wind.speed;
    this.windDeg = data.wind.deg;
    this.windGust = data.wind.gust;
    this.cloudPercent = data.clouds.all;
    if ("snow" in data) {
      this.snow1h = data.snow["1h"];
    }
    if ("rain" in data) {
      this.rain1h = data.rain["1h"];
    }
  }
}

export const weatherModel = new WeatherData();
