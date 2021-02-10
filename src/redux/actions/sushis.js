export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchSushis = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  fetch(
    `/sushis?${category !== null ? `category=${category}` : ""}&_sort=${
      sortBy.type
    }&_order=${sortBy.order}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(setSushis(json));
    });
};

export const setSushis = (items) => ({
  type: "SET_SUSHIS",
  payload: items,
});
