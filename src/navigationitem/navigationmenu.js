import React from "react";
import MenuZavedenia from "./menuzavedenia/menuzavedenia";
import Stocks from "./stocks/stocks";
import Keshbek from "./keshbek/keshbek";
import About from "./about/about";
import Dostavka from "./dostavka/dostavka";

const NavigationMenu = (props) => (
  <React.Fragment>
    <MenuZavedenia />
    <Stocks />
    <Keshbek />
    <About />
    <Dostavka />
  </React.Fragment>
);

export default NavigationMenu;
