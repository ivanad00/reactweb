import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <>
      <div className="input-box">
        <h1>SIGN UP</h1>
        <form className="forms">
          <input type="email" placeholder="Email" className="footer-input" />
          <input
            type="password"
            placeholder="Password"
            className="footer-input"
          />
        </form>
      </div>
    </>
  );
}
