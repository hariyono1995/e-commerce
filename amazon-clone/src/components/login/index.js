import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />

          <button className="login__signinButton" type="submit">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>{" "}
      </div>
    </div>
  );
}
