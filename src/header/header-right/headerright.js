import React from "react";
import tel from "./tel.jpg";
import instagramlogo from "./instagramlogo.png";
import LoginButton from "./loginmodal/loginmodal";

const HeaderRight = (props) => (
  <div className="header_right">
    <div className="phone_header">
      <a className="phone_head" href="tel:2470">
        <img className="tel-img" src={tel} alt="tel" />
      </a>
    </div>
    <div>
      <a className="phone" href="tel:7226">
        2470
      </a>
    </div>
    <div className="social_header">
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
    <LoginButton />
  </div>
);

export default HeaderRight;
