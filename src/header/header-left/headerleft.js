import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const HeaderLeft = (props) => (
  <div className="header_left">
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
    <nav className="menu">
      <ul className="menu">
        <li className="menu">
          <Link to="/menu">Меню заведения</Link>
        </li>
        <li className="menu">
          <Link to="/stocks">Акции</Link>
        </li>
        <li className="menu">
          <Link to="/keshbek">Кэшбэк</Link>
        </li>
        <li className="menu">
          <Link to="/about">О нас</Link>
        </li>
        <li className="menu">
          <Link to="/dostavka">Доставка</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default HeaderLeft;
