import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Navbar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer.component";
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from "./redux";

import "./styles/index.scss";

const Home = lazy(() => import('./pages/home.page'));
const Login = lazy(() => import('./pages/login.page'));




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="738619888334-vqh3p0u5gkm96ea77bv2k5ufgto1g1ee.apps.googleusercontent.com">

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Suspense>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
