import React from "react";
import "./GradientButton.css";

const GradientButton = ({ children, ...props }) => {
  return (
    <button className="gradient-button" {...props}>
      <div className="gradient-border">
        <div className="button-content"></div>
      </div>
      <span className="button-text">{children}</span>
    </button>
  );
};

export default GradientButton;
