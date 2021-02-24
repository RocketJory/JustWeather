import "./style.scss";
import "bootstrap";

import { weatherController } from "./js/weatherController.js";
import { searchBar } from "./js/searchBar.js";

weatherController.makeWeatherCallGeolocation();
