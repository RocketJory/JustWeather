export class cityInfo {
  constructor() {
    this.cityHeader = document.querySelector("#city-name");
  }

  setName(cityName) {
    this.cityHeader.innerHTML = cityName;
  }
}
