import React, { useRef} from "react";
import "./LoginSignup.css";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function LoginFile() {
  const emailref = useRef("");
  const passref = useRef("");
  const history = useNavigate();

  const submithandler = async (event) => {
    event.preventDefault();

    const Userdetails = {
      email: emailref.current.value,
      password: passref.current.value,
      returnSecureToken: true,
    };
    localStorage.setItem("email", emailref.current.value);
    emailref.current.value = "";
    passref.current.value = "";
    try {
      const respose = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVbGzw7xuKffOUOTFhU0XIWQLzpJ3zIyY",
        Userdetails
      );

      console.log("User has successfully logged in", respose.data.idToken);

       history("/home");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <form onSubmit={submithandler}>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" ref={emailref} required />
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
      

      <div className="submit-container">
        <button className="submit">Login</button>
        <button className="submit"><Link className="submitdata" to="/">Sign Up Now</Link></button>
      </div>
      </div>
    </form>
  );
}

export default LoginFile;
