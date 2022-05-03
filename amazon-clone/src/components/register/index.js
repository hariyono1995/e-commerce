import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../db/firebase";

const initialValues = {
  email: "",
  password: "",
};

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        console.log("auth", auth);
        if (auth) {
          navigate("/login");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="register__container">
        <h1>Create Account</h1>
        <form>
          {/* <h5>Your name</h5>
          <input
            type="text"
            value={values.displayName}
            name="displayName"
            onChange={handleInputChange}
          /> */}
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
            onClick={register}
            className="register__signupButton"
          >
            Create account
          </button>
        </form>

        <div className="register__signinText">
          <span>Do you have an account?</span>
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
