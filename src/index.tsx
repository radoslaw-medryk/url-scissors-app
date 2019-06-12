import * as React from "react";
import * as ReactDOM from "react-dom";
import "@babel/polyfill";
import "normalize.css";
import { ReactApp } from "./components/ReactApp";
import "./styles/colors.css";
import "./styles/fonts.css";

ReactDOM.render(<ReactApp />, document.getElementById("react-app"));
