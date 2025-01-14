import React from "react";
import { benefits } from "../../constants";
import "./benefit.css";

const Benefits = () => {
  return (
    <section id="features" className="benefits-section">
      <div className="container">
        <div className="heading">
          <h2>Chat Smarter, Not Harder with Brainwave</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <div
              className="benefit-card"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="benefit-card-content">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <div className="benefit-card-footer">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <span className="explore-more">Explore more</span>
                </div>
              </div>

              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="overlay-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
