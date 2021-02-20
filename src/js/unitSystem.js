export let unitSystem = (function () {
  let units = "metric";
  let tempUnit = "\u00B0C";

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
    } else if ((units = "imperial")) {
      tempUnit = "\u00B0F";
    } else if ((units = "metric")) {
      tempUnit = "\u00B0C";
    }
  };

  /**
   * convert a number to a temperature string for the given unit system
   * @param {Number} temp
   */
  const formatTemperature = function (temp) {
    return `${temp.toFixed(0)} ${tempUnit}`;
  };

  return {
    getUnits,
    setUnits,
    formatTemperature,
  };
})();
