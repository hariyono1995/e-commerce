import "./Subtotal.css";
import React from "react";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../StateProvider";

export default function Subtotal() {
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
              <strong>{calculateTotal(basket)}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}
