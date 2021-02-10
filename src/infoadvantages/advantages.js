import React from "react";
import "./advantages.css";
import { Switch, Route } from "react-router-dom";
import logodevel from "./images.png";

const InfoAdvantages = () => (
  <Switch>
    <Route exact path="/">
      <Advantages />
    </Route>
  </Switch>
);

const Advantages = () => (
  <React.Fragment>
    <div className="advantages">
      <div className="main_container">
        <div className="main_banner-txt">
          <img src={logodevel} alt="logo" />
          <h1>ДОСТАВЛЯЕМ УДОВОЛЬСТВИЕ</h1>
          <p>
            Работаем для Вас вс - чт с 11:00 до 23:00; пт, сб с 11:00 до 00:00
          </p>
        </div>
        <div className="h2">Мы гордимся нашим сервисом и качеством</div>
        <p>
          Отказавшись от гостевого зала и брендинга упаковки, мы максимально
          сократили наши затраты, чтобы предложить Вам высочайшее качество блюд
          по минимальной цене.
        </p>

        <div className="advantages_inner">
          <div className="advatages_col">
            <div className="advatages_tt1">Разнообразно</div>
            <p>
              Мы сделали максимальный ассортимент роллов на одном сайте, что
              позволяет Вам максимально удобно сделать заказ на любой вкус не
              блуждая по просторам интернета.
            </p>
          </div>
          <div className="advatages_col">
            <div className="advatages_tt1">Выгодно</div>
            <p>
              Роллы на нашем сайте имеют разный ценовой сегмент. Это позволяет
              сделать выбор не только на любой вкус, но и на любой кошелек. А
              так же у нас действуют привлекательные акции.
            </p>
          </div>
          <div className="advatages_col">
            <div className="advatages_tt1">Удобно</div>
            <p>
              Мы привезем заказ в указанное Вами место и максимально быстро. А
              так же Вы можете сделать заказ на определенное время. Есть и
              возможность забрать заказ самостоятельно, если Вам так будет
              удобней.
            </p>
          </div>

          <div className="advatages_right">
            <span className="color-green">Всегда свежие продукты</span>
            <span className="color-orange">и лучшая цена</span>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default InfoAdvantages;
