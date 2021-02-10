import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./menuzavedenia.css";
import MenuItem from "../../menuitem/menuitem";

const MenuZavedenia = () => (
  <Switch>
    <Route path="/menu">
      <Menu />
      <MenuItem />
    </Route>
  </Switch>
);

const Menu = () => (
  <div className="main_content">
    <div className="main__top">
      <div className="main__container">
        <h1>Меню Konoha Sushi</h1>
        <div className="bx-breadcrumb_wrp">
          <div className="bx-breadcrumb cl">
            <div className="bx-breadcrumb-item">
              <Link to="/">
                <span>Главная</span>
              </Link>
              <i>/</i>
            </div>
            <div className="bx-breadcrumb-item">
              <span>Меню</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuZavedenia;
