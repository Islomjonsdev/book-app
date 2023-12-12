import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
    };
    console.log(userData);
  };
  return (
    <div className="auth">
      <div className="container">
        <div className="auth__container">
          <div className="auth__wrapper">
            <h2>Sign up</h2>
            <form className="auth__form" onSubmit={loginUser}>
              <label>Your name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                required
              />

              <label>Your email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />

              <button>Sign up</button>
            </form>

            <span>
              Already signed up? <Link to="/signin">Go to sign in.</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
