import React from "react";
import "../../global.css";
import "./Navbar.css";
import GradientButton from "../GradientButton/GradientButton";
import { Link, NavLink } from "react-router-dom";
import MenuSvg from "../../assets/svg/MenuSvg";
import { useState } from "react";
// import { HamburgerMenu } from "../design/HeroDesign";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="header-top">
        <div className="container-fluid">
          <div className="logo">
            <Link className="brainwaveLogo" to="/">
              <img src="./brainwave.png" alt="Brainwave" />
            </Link>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
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
          </nav>
          <div className="header-right">
            <a href="#">New Account</a>
            <GradientButton>Sign in</GradientButton>
          </div>
          {/* <HamburgerMenu /> */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GradientButton>
                <MenuSvg />
              </GradientButton>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
