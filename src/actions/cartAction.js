import { ADD_TO_CART, REMOVE_FROM_CART } from "./";

import { setLoading } from "../actions/shoppingAction";

export const handleProductAddToCartClick = product => dispatch => {
  dispatch(setLoading(product, true));
  setTimeout(() => { // Timeout para simular o atraso a uma chamada de API
    dispatch(addToCart(product));
    return dispatch(setLoading(product, false));
  }, 2000);
};

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const handleProductRemoveClick = product => ({
  type: REMOVE_FROM_CART,
  payload: product
})
