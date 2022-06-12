import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Index";
import Home from "./components/home";
import Checkout from "./components/checkout";
import Login from "./components/login";
import Register from "./components/register";
import Payment from "./components/payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth } from "./db/firebase";
import { useStateValue } from "./StateProvider";

const stripePromise = loadStripe(
  "pk_test_51KvKzFDHpYT1fCMy72u6UveHItocznGeAaXommh06MX0QYQkxx60bltNeiJMRq0BGWsOaPzwRFROb1NllWYcelcn00U93agOx2"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //  will only run once when the app components loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
