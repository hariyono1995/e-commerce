import "./Payment.css";
import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct";
import { Link } from "react-router-dom";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout
          <Link to="/checkout">
            ({basket.length} Item{basket.length > 1 ? "s" : ""})
          </Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>
              Jl. Imam Bonjol No.26. Kel. Alai Gelombang, Kec. Pariaman Tengah.
              Kota Pariaman - Sumatera Barat.
            </p>
            <p>085 888 295 671</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>review items and delivery</h3>
          </div>
          <div className="payment__items">
            {(basket || []).map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
