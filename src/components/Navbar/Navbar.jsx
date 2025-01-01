import React from "react";
import "../../global.css";
import GradientButton from "../GradientButton/GradientButton";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header-top">
        <div className="container-fluid">
          <div className="logo">
            <Link className="brainwaveLogo" to="/">
              <img src="./brainwave.png" alt="Brainwave" />
            </Link>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <NavLink to="/">Features</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/howtouse">How to use</NavLink>
              </li>
              <li>
                <NavLink to="/roadmap">Roadmap</NavLink>
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
};

export default Navbar;
