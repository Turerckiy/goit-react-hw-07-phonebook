import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import { Provider } from "react-redux";
import { store } from "./components/PhoneBook/redux/store";
import App from "./components/PhoneBook/App";
// console.log('persistor', persistor.getState())
// console.log('store.getState(', store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
