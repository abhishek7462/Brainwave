import React from "react";
import "../global.css";
// import Button from "./Button";
import GradientButton from "./GradientButton";
function Header() {
  return (
    <>
      <div className="header-top">
        <div className="container-fluid">
          <div className="logo">
            <a className="brainwaveLogo" href="#">
              <img src="./brainwave.png" alt="Brainwave" />
            </a>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">How to use</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <a href="#">New Account</a>
            <GradientButton>Sign in</GradientButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
