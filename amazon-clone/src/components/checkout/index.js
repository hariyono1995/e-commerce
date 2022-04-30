import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct";
import Subtotal from "../subtotal";

import "./Checkout.css";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  console.log("basket", basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
