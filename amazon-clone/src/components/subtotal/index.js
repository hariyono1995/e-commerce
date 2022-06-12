import "./Subtotal.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

export default function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  const calculateTotal = (basket) => {
    return basket.reduce((price, item) => item.price + price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*  part of the homework */}
              Subtotal (
              {`${basket?.length}  item${basket?.length > 1 ? "s" : ""}`}):{" "}
              <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={calculateTotal(basket)} // part of homework
        value={getBasketTotal(basket)} // part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {basket?.length >= 1 ? (
        <button
          style={{ backgroundColor: "#f0c14b" }}
          onClick={(e) => navigate("/payment")}
        >
          Proceed to Checkout
        </button>
      ) : (
        <button
          disabled={true}
          style={{ backgroundColor: "darkgrey" }}
          onClick={(e) => navigate("/payment")}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}
