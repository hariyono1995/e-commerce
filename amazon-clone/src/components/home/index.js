import React from "react";
import Product from "../product";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg"
          alt="amazon-hero-img"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81S-xWVH8kL._AC_SY195_.jpg"
          />
          <Product
            id="2"
            title="Control all the Things Video Game Controller T-shirt"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71WMVT+u+yL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Twitch Embroidered Glitch Snapback Grey"
            price={20.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/91n1EpY+xeL._AC_UL320_.jpg"
          />
          <Product
            id="4"
            title="Heartbeat of a Gamer 2 Adult Hooded Sweatshirt"
            price={36.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/616PbyOB4dL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="5"
            title="Nintendo Men's Pixel Cast T-Shirt"
            price={17.88}
            rating={3}
            image="https://m.media-amazon.com/images/I/81JqT1pLnhL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable"
            price={39.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY545_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
