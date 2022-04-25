import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      {" "}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionsLineOne">Hello, Guest</span>
          <span className="header__optionsLineTwo">Sign In</span>
        </div>

        <div className="header__options">
          <span className="header__optionsLineOne">Returns</span>
          <span className="header__optionsLineTwo">& Orders </span>
        </div>

        <div className="header__options">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>

        <div className="header__optionsBasket">
          <ShoppingBasketIcon />
          <span className="header-optionsLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}