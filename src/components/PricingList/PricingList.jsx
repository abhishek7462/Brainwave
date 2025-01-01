import React from "react";
import { pricing } from "../../constants";
import "./PricingList.css";
import { check } from "../../assets";
const PricingList = () => {
  return (
    <>
      <div className="row price-container">
        {pricing.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div className="pay-card">
              <h4 style={{ color: plan.color }}>{plan.title}</h4>
              <p>{plan.description}</p>
              <div
                className="price"
                style={{ opacity: plan.price === null ? 0 : 1 }}
              >
                $ <span>{plan.price}</span>
              </div>
              <div className="clip-fill-btn">
                <a className="btn" href="#">
                  Get started
                </a>
                <svg width="21" height="44" viewBox="0 0 21 44">
                  <path
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                  />
                </svg>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <img src={check} width={24} height={24} alt="Check" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingList;
