import React from "react";
import { smallSphere, stars } from "../assets";
import brackets from "../assets/svg/Brackets";

// import Heading from "./Heading";
// import { LeftLine, RightLine } from "./design/Pricing";
import "./Pricing.css";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <div className="pay-section">
      <div className="container">
        <div className="pay-forever">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="stars-background">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <span className="heading-top flex-heading">
          {brackets("left")}
          <span className="heading-text">Get started with Brainwave</span>
          {brackets("right")}
        </span>

        <h2>Pay once, use forever</h2>
        <div>
          <PricingList />
        </div>
        <div class="full-details">
          <a class="full-details-link" href="/pricing">
            See the full details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
