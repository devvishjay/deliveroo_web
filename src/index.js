import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Navbar from "./components/navbar.component";

import "./styles/index.scss";

import Home from "./pages/home.page";

import store from "./redux";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
