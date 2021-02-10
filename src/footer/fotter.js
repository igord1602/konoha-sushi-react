import React from "react";
import "./fotter.css";
import logofotter from "./logo.png";
import instagramlogo from "./instagramlogo.png";
import { Link } from "react-router-dom";

const Fotter = () => (
  <div className="footer">
    <div className="main_container">
      <Link className="logo" to="/">
        <img src={logofotter} alt="logo" />
      </Link>
      <div className="footer_centr">
        <div className="copyright">
          © Copyright 2021 ООО «Konoha Sushi» Все права защищены. Возраст 6+
        </div>
        <a href="/#">Политика обработки персональных данных</a>
      </div>
      <div className="social_footer">
        <a className="social" href="https://www.instagram.com/" target="blank">
          <img src={instagramlogo} alt="insta"></img>
        </a>
      </div>
    </div>
  </div>
);

export default Fotter;
