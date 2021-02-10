import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AboutInfo from "./aboutinfo/aboutinfo";

const About = (props) => (
  <Switch>
    <Route path="/about">
      <Aboutitem />
      <AboutInfo />
    </Route>
  </Switch>
);

const Aboutitem = (props) => (
  <div className="main_content">
    <div className="main__top">
      <div className="main__container">
        <h1>Заказать роллы в Гродно на дом</h1>
        <div className="bx-breadcrumb_wrp">
          <div className="bx-breadcrumb cl">
            <div className="bx-breadcrumb-item">
              <Link to="/">
                <span>Главная</span>
              </Link>
              <i>/</i>
            </div>
            <div className="bx-breadcrumb-item">
              <span>О нас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
