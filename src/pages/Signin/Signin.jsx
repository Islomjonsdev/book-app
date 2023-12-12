import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.scss"

const Signin = () => {
  const [signinUsername, setSigninUsername] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  console.log(signinUsername, signinEmail, signinPassword);
  return (
    <div className="signin">
      <div className="container">
        <div className="signin__container">
          <div className="signin__wrapper">
            <h2>Sign in</h2>

            <form>
              <label>Your username Enter your username</label>
              <input onChange={(e) => setSigninUsername(e.target.value)} type="text" placeholder="Enter your username" />

              <label>Your email Enter your email</label>
              <input onChange={(e) => setSigninEmail(e.target.value)} type="email" placeholder="Enter your email" />

              <label>Your password Enter your password</label>
              <input onChange={(e) => setSigninPassword(e.target.value)} type="password" placeholder="Enter your password" />

              <button>Sign in</button>
            </form>

            <span>Already signed up? <Link to="/">Go to sign up.</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
