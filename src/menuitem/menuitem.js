/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Categories from "./Categories/Categories";
import "./menuitem.css";
import SortPopup from "./sort/sort";
import Sushiblock from "./sushiblock/sushiblock";
import LoadingBlock from "./sushiblock/LoadingBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchSushis } from "../redux/actions/sushis";

const categoryNames = [
  "ПРЕМИУМ",
  "МЕДИУМ",
  "ЗАПЕЧЕННЫЕ",
  "СЕТЫ",
  "СОУСЫ",
  "Напитки",
];
const sortIems = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function MenuItem() {
  const dispatch = useDispatch();
  const items = useSelector(({ sushis }) => sushis.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ sushis }) => sushis.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSushis(sortBy, category));
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddSushiToCart = (obj) => {
    dispatch({
      type: "ADD_SUSHI_CART",
      payload: obj,
    });
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}
            />
            <SortPopup
              activeSortType={sortBy.type}
              items={sortIems}
              onClickSortType={onSelectSortType}
            />
          </div>
          <h2 className="content__title">Все</h2>
          <div className="content__items">
            {isLoaded
              ? items.map((obj) => (
                  <Sushiblock
                    onClickAddSushi={handleAddSushiToCart}
                    key={obj.id}
                    addedCount={
                      cartItems[obj.id] && cartItems[obj.id].items.length
                    }
                    {...obj}
                  />
                ))
              : Array(12)
                  .fill(0)
                  .map((_, index) => <LoadingBlock key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
