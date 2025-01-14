import React from "react";
import { socials } from "../../constants";
import "./Footer.css";
const Footer = () => {
  return (
    <section crosses className="footer">
      <div className="footer-container">
        <p className="footer-caption">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="footer-socials">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <img
                src={item.iconUrl}
                alt={item.title}
                className="footer-social-icon"
              />
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
