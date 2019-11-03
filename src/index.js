import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./app";

console.log("Enviroment:", process.env.MODE.toUpperCase());
String.empty = "";

window.onload = () => new App().init();
