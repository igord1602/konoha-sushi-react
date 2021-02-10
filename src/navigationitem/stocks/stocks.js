import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Stocks = (props) => (
  <Switch>
    <Route path="/stocks">
      <Stockss />
    </Route>
  </Switch>
);

const Stockss = (props) => (
  <div className="main_content">
    <div className="main__top">
      <div className="main__container">
        <h1>Акции Konoha Sushi</h1>
        <div className="bx-breadcrumb_wrp">
          <div className="bx-breadcrumb cl">
            <div className="bx-breadcrumb-item">
              <Link to="/">
                <span>Главная</span>
              </Link>
              <i>/</i>
            </div>
            <div className="bx-breadcrumb-item">
              <span>Акции</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stocks;
