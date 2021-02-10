import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header/header";
import NavigationMenu from "./navigationitem/navigationmenu";
import InfoAdvantages from "./infoadvantages/advantages";
import InfoCnt from "./infocnt/infocnt";
import Slider from "./slider/slider";
import Fotter from "./footer/fotter";
import CartBasket from "./menuitem/button/button";
import Cart from "./menuitem/cart";

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <NavigationMenu />
      <Slider />
      <InfoAdvantages />
      <InfoCnt />
      <CartBasket />
      <Cart />
      <Fotter />
    </React.Fragment>
  </Router>
);

export default App;
