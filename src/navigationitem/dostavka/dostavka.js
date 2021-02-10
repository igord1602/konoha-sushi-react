import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import DostavkaInfo from "./dostavkainfo/dostavkainfo";

const Dostavka = (props) => (
  <Switch>
    <Route path="/dostavka">
      <Dostavkaitem />
      <DostavkaInfo />
    </Route>
  </Switch>
);

const Dostavkaitem = (props) => (
  <div className="main_content">
    <div className="main__top">
      <div className="main__container">
        <h1>Доставка Суши</h1>
        <div className="bx-breadcrumb_wrp">
          <div className="bx-breadcrumb cl">
            <div className="bx-breadcrumb-item">
              <Link to="/">
                <span>Главная</span>
              </Link>
              <i>/</i>
            </div>
            <div className="bx-breadcrumb-item">
              <span>Доставка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dostavka;
