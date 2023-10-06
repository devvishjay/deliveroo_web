import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Navbar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/index.scss";

import Home from "./pages/home.page";

import store from "./redux";

import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer.component";
import Login from "./pages/login.page";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="738619888334-vqh3p0u5gkm96ea77bv2k5ufgto1g1ee.apps.googleusercontent.com">

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
