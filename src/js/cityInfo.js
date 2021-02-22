export class cityInfo {
  constructor() {
    this.cityDiv = document.querySelector("#city-info");
    this.cityHeader = this.cityDiv.querySelector("#city-name");
    this.cityTime = this.cityDiv.querySelector("#city-time");
    this.cityCoords = this.cityDiv.querySelector("#city-coords");
  }

  renderCityInfo(data) {
    this.cityHeader.innerHTML = data.name;
    this.cityTime.innerHTML = new Date().toDateString();
    this.cityCoords.innerHTML = `${Number(data.coord.lat).toFixed(
      4
    )}\u00B0, ${Number(data.coord.lon).toFixed(4)}\u00B0`;
  }
}
