import { curve, heroBackground, robot } from "../assets";
// import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/HeroDesign";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import "./Hero.css";
import Search from "./Search";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section
      className="hero-section"
      crosses
      crossesOffset="lg-translate-y"
      customPaddings
      id="hero"
    >
      <div className="hero-container" ref={parallaxRef}>
        <div className="hero-text">
          <h1 className="hero-title">
            Explore the Possibilities <br /> of AI Chatting with{" "}
            <span className="hero-highlight">
              Brainwave
              <img
                src={curve}
                className="hero-curve"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="hero-description">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <button href="/pricing">Get started</button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-background">
              <div className="hero-image-top-bar" />
              <div className="hero-image-content">
                <img
                  src={robot}
                  className="robot-image"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Search className="hero-generating" />
              </div>
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hero-icons-list">
                  {heroIcons.map((icon, index) => (
                    <li className="hero-icon-item" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification />
              </ScrollParallax>
            </div>
            <Gradient />
          </div>
          <div className="hero-background">
            <img
              src={heroBackground}
              className="hero-background-image"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="company-logos" />
      </div>
      <BottomLine />
    </section>
  );
};

export default Hero;
