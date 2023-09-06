import React, { useRef } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function SignUpFile() {
  const nameref = useRef("");
  const emailref = useRef("");
  const passref = useRef("");
  let history = useNavigate();

  const submithandler = async (event) => {
    event.preventDefault();

    const Userdetails = {
      email: emailref.current.value,
      password: passref.current.value,
      returnSecureToken: true,
    };
    nameref.current.value = "";
    nameref.current.value = "";
    passref.current.value = "";
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVbGzw7xuKffOUOTFhU0XIWQLzpJ3zIyY",
        Userdetails
      );

      alert("User has successfully signed up");
      history("/login");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <form onSubmit={submithandler}>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" ref={nameref} required />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              ref={emailref}
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              ref={passref}
              required
            />
          </div>
        </div>

        <div className="submit-container">
          <button className="submit">Sign Up</button>
          <button className="submit"><Link className="submitdata" to="/login">Login </Link></button>
        </div>
      </div>
  
    </form>
  );
}

export default SignUpFile;
