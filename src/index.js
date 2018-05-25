import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import esriConfig from "./esriConfig";
import "react-hot-loader/patch";
import "./index.css";
import "arcgis-js-api/themes/light/main.css";
import "@dojo/shim/Promise";

ReactDOM.render(<App />, document.getElementById("root"));
