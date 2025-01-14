import React from "react";
import brackets from "../../assets/svg/Brackets";
import "./Roadmap.css";
import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../assets";
import GradientButton from "../GradientButton/GradientButton";

const Roadmap = () => {
  return (
    <>
      <div className="working-section">
        <div className="container">
          <div className="heading-top flex-heading">
            {brackets("left")}
            <span>Ready to get started</span>
            {brackets("right")}
          </div>
          <h2>What we’re working on</h2>
          {/* <div className="row"> */}
          <div className="roadmap-grid">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";

              return (
                <div
                  className={`roadmap-card ${
                    item.colorful ? "colorful" : "neutral"
                  }`}
                  key={item.id}
                >
                  <div className="card-content">
                    <div className="card-background">
                      <img src={grid} width={550} height={550} alt="Grid" />
                    </div>
                    <div className="card-body">
                      <div className="card-header">
                        <div className="date-status">
                          {brackets("left")}
                          <span>{item.date}</span>
                          {brackets("right")}
                        </div>
                        <div className={`status-label ${item.status}`}>
                          <img
                            src={item.status === "done" ? check2 : loading1}
                            width={16}
                            height={16}
                            alt={status}
                          />
                          <span>{status}</span>
                        </div>
                      </div>
                      <div className="card-image">
                        <img
                          src={item.imageUrl}
                          width={628}
                          height={426}
                          alt={item.title}
                        />
                      </div>
                      <div className="card-details">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <Gradient /> */}
          </div>

          {/* <div className="roadmap-footer">
        <Button href="/roadmap">Our roadmap</Button>
      </div> */}

          {/* </div> */}
          <div className="roadmapButton">
            <GradientButton>Our Roadmap</GradientButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
