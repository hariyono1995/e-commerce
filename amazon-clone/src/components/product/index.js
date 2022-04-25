import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";

export default function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon style={{ color: "orange" }} />
              </p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="product-img" />

      <button>Add to Cart</button>
    </div>
  );
}
