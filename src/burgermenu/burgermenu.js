import React from "react";
import instagramlogo from "./instagramlogo.png";
import { Link } from "react-router-dom";
import "./burger.css";
import LoginButton from "../header/header-right/loginmodal/loginmodal";

const BurgerMenu = () => (
  <div className="burger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>
    <ul className="menu__box">
      <LoginButton />
      <li>
        <Link className="menu__item" to="/menu">
          Меню заведения
        </Link>
      </li>
      <li>
        <Link className="menu__item" to="/stocks">
          Акции
        </Link>
      </li>
      <li>
        <Link className="menu__item" to="/keshbek">
          Кэшбэк
        </Link>
      </li>
      <li>
        <Link className="menu__item" to="/about">
          О нас
        </Link>
      </li>
      <li>
        <Link className="menu__item" to="/dostavka">
          Доставка
        </Link>
      </li>
      <div className="social_burger">
        <a
          className="social_head"
          href="https://www.instagram.com/"
          target="blank"
        >
          <img
            className="instagramlogo-img"
            src={instagramlogo}
            alt="instagramlogo"
          />
        </a>
      </div>
    </ul>
  </div>
);

export default BurgerMenu;
