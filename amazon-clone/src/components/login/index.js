import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../db/firebase";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        console.log("auth", auth);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });

    //  some fancy firebase login shittt...
  };

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
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Link to="/register">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}
