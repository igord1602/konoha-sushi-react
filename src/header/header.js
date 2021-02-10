import React from "react";
import BurgerMenu from "../burgermenu/burgermenu";
//import HeaderCartBasket from "./headercartbasket/headercartbasket";
import HeaderLeft from "./header-left/headerleft";
import HeaderRight from "./header-right/headerright";
import "./header.css";

const Header = (props) => (
  <div className="header">
    <div className="main_header">
      <HeaderLeft />
      <HeaderRight />
      <BurgerMenu />
    </div>
  </div>
);

export default Header;
