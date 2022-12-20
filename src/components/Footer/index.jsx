import React from "react";
import "./style.scss"
import Logo from "./../../assets/png/github.png";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <img src={Logo} alt="footer logo" className="footer__logo--img" />
              <h3 className="footer__title">&copy: 2022 Github, inc,</h3>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Security
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Status
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Docs
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Contact Github
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Pricing
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Api
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Training
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__item--link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
