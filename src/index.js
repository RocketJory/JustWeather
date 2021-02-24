import "./style.scss";

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faWind,
  faTint,
  faTachometerAlt,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
library.add(faWind, faTint, faTachometerAlt, faCloud);

document.querySelector("#wind-icon").innerHTML = icon({
  prefix: "fas",
  iconName: "wind",
}).html;
document.querySelector("#precip-icon").innerHTML = icon({
  prefix: "fas",
  iconName: "tint",
}).html;
document.querySelector("#pressure-icon").innerHTML = icon({
  prefix: "fas",
  iconName: "tachometer-alt",
}).html;
document.querySelector("#cloud-icon").innerHTML = icon({
  prefix: "fas",
  iconName: "cloud",
}).html;

// import "bootstrap";
// // import "bootstrap/js/dist/util";
// // import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

import { weatherController } from "./js/weatherController.js";

weatherController.makeWeatherCallGeolocation();
