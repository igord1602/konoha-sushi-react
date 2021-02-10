import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import KeshbekInfo from "./keshbekinfo/keshbekinfo";

const Keshbek = (props) => (
  <Switch>
    <Route path="/keshbek">
      <Keshbekitem />
      <KeshbekInfo />
    </Route>
  </Switch>
);

const Keshbekitem = (props) => (
  <div className="main_content">
    <div className="main__top">
      <div className="main__container">
        <h1>Кэшбэк</h1>
        <div className="bx-breadcrumb_wrp">
          <div className="bx-breadcrumb cl">
            <div className="bx-breadcrumb-item">
              <Link to="/">
                <span>Главная</span>
              </Link>
              <i>/</i>
            </div>
            <div className="bx-breadcrumb-item">
              <span>Кэшбэк Konoha sushi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Keshbek;
