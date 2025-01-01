import React from "react";
import {
  service1,
  service2,
  service3,
  check,
  play,
  brainwaveWhiteSymbol,
} from "../assets";
import "./GenerativeSection.css";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Search from "./Search";

const GenerativeSection = () => {
  return (
    <div className="Generative-section">
      <div className="container">
        <h2>Generative AI made for creators.</h2>
        <span>Brainwave unlocks the potential of AI-powered applications</span>
        <div className="row first-row">
          <div className="col-md-8">
            <div className="service-pic-1">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
          </div>
          <div className="col-md-4 smartai-section">
            <h4>Smartest AI</h4>
            <p>Brainwave unlocks the potential of AI-powered applications</p>

            <ul className="smartai-service">
              {brainwaveServices.map((item, index) => (
                <li key={index} className="">
                  <img width={24} height={24} src={check} />
                  <p className="">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="process">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="service-card service-1">
              <span className="addsvg">
                <div className="generate-label">
                  Hey Brainwave, enhance this photo
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="37">
                  <path
                    className="fill-n-6"
                    d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                  ></path>
                </svg>
              </span>
              <h4>Photo editing</h4>
              <p>
                Automatically enhance your photos using our AI app's photo
                editing feature. Try it now!
              </p>
              <div className="service-photo">
                <img src={service2} alt="Photo Editing" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-top">
                <h4>Video generation</h4>
                <p>
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul>
                  {brainwaveServicesIcons.map((item, index) => (
                    <li key={index} className={`${index === 2}`}>
                      <div className={index === 2}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-pic">
                <img src={service3} alt="Service 2" />
                <div className="video-generated-container">
                  Video generated!
                  <div className="icon-container">
                    <img
                      src={brainwaveWhiteSymbol}
                      width={26}
                      height={26}
                      alt="Brainwave"
                      className="icon"
                    />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="37"
                  >
                    <path
                      className="fill-n-6"
                      d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                    ></path>
                  </svg>
                  <p className="tagline">just now</p>
                </div>
                <div className="video-bar-container">
                  <img
                    src={play}
                    width={24}
                    height={24}
                    alt="Play"
                    className="play-icon"
                  />
                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeSection;
