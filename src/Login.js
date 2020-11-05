import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://png2.cleanpng.com/dy/cec5fac1c994d99559d8065c188cd2aa/L0KzQYm3VcAyN5NwiZH0aYP2gLBuTgR4cZRqRd54Z3Awe373jCAucqp1Rdd3dHX1hLLwjv1mdqUyjOY2YXzlhb60gB93baMyTdNuOHa6SbW7g8Y5QGMzSKc9NEO5R4e4VcI2OmI8Sao6M0G2PsH1h5==/kisspng-twice-logo-k-pop-jyp-entertainment-tt-album-cover-5ae8f79d4c6882.054436761525217181313.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the TWICE FAKE STORE conditions of Use &
          Sale. Please see our Privacy Notice, our cookies notice and out
          interest-based ads notice
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Once Account
        </button>
      </div>
    </div>
  );
}

export default Login;
