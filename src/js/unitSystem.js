import { weatherApi } from "./weatherApi.js";
import { cityView } from "./cityInfo.js";
import { weatherController } from "./weatherController.js";

export let unitSystem = (function () {
  let units = "metric";
  let tempUnit = "\u00B0C";
  let speedUnit = "m/s";
  let pressUnit = "hPa";

  const unitBtnGroup = document.querySelector("#unit-btns");

  highlightUnitBtns();

  // set up unit event listeners
  Array.from(unitBtnGroup.children).forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleUnits(btn.dataset.unit);
    });
  });

  const getUnits = function () {
    return units;
  };

  const setUnits = function (unit) {
    if (["imperial", "metric", "standard"].includes(unit)) {
      units = unit;
      setTempUnits();
      setSpeedUnits();
      highlightUnitBtns();
    } else {
      console.warn("incorrect units");
    }
  };

  const setTempUnits = function () {
    if (units == "standard") {
      tempUnit = "\u00B0K";
    } else if (units == "imperial") {
      tempUnit = "\u00B0F";
    } else if (units == "metric") {
      tempUnit = "\u00B0C";
    }
  };

  const setSpeedUnits = function () {
    if (units == "standard") {
      speedUnit = "m/s";
    } else if (units == "imperial") {
      speedUnit = "miles/hr";
    } else if (units == "metric") {
      speedUnit = "m/s";
    }
  };

  /**
   * convert a number to a temperature string for the given unit system
   * @param {Number} temp
   */
  const formatTemperature = (temp) => `${temp.toFixed(0)} ${tempUnit}`;

  const formatWind = (speed, dir) =>
    `${speed.toFixed(0)} ${speedUnit} ${dir}\u00B0`;

  const formatPressure = (press) => `${press.toFixed(0)} ${pressUnit}`;

  const formatCloud = (cloudPct) => `${cloudPct} %`;

  const formatPrecip = (precip) => `${precip} mm`;

  function highlightUnitBtns() {
    Array.from(unitBtnGroup.children).forEach((btn) => {
      btn.classList.remove("active");
    });
    const unitBtn = unitBtnGroup.querySelector(`[data-unit=${units}]`);
    unitBtn.classList.add("active");
  }

  function toggleUnits(unit) {
    setUnits(unit);
    highlightUnitBtns();
    weatherController.makeWeatherCall(cityView.cityName, units);
  }

  return {
    getUnits,
    setUnits,
    formatTemperature,
    formatWind,
    formatPressure,
    formatCloud,
    formatPrecip,
    toggleUnits,
  };
})();
