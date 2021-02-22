export let unitSystem = (function () {
  let units = "metric";
  let tempUnit = "\u00B0C";
  let speedUnit = "m/s";
  let pressUnit = "hPa";

  const getUnits = function () {
    return units;
  };
  const setUnits = function (unit) {
    units = unit;
    setTempUnits();
  };

  const setTempUnits = function () {
    if ((units = "standard")) {
      tempUnit = "\u00B0K";
      speedUnit = "m/s";
    } else if ((units = "imperial")) {
      tempUnit = "\u00B0F";
      speedUnit = "miles/hr";
    } else if ((units = "metric")) {
      tempUnit = "\u00B0C";
      speedUnit = "m/s";
    }
  };

  /**
   * convert a number to a temperature string for the given unit system
   * @param {Number} temp
   */
  const formatTemperature = function (temp) {
    return `${temp.toFixed(0)} ${tempUnit}`;
  };

  const formatWind = function (speed, dir) {
    return `${speed.toFixed(0)} ${speedUnit} ${dir}\u00B0`;
  };

  const formatPressure = function (press) {
    return `${press.toFixed(0)} ${pressUnit}`;
  };

  const formatCloud = function (cloudPct) {
    return `${cloudPct} %`;
  };

  const formatPrecip = function (precip) {
    return `${precip} mm`;
  };

  return {
    getUnits,
    setUnits,
    formatTemperature,
    formatWind,
    formatPressure,
    formatCloud,
    formatPrecip,
  };
})();
