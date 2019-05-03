import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./assets/styles/main.sass"
import App from "./components/Property";
import * as serviceWorker from "./serviceWorker";
import PropertyStore from "./stores/Property";

const propertyStore = new PropertyStore();

ReactDOM.render(
  <Provider propertyStore={propertyStore}>
    <App propertyStore={propertyStore} />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
