import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import { createStore, applyMiddleware } from "redux";
import mainReducers from "./reducers/mainReducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let store = createStore(mainReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
