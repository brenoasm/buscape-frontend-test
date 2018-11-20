import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

export const cartInitialState = {
  cartItems: [],
  subtotal: {
    value: 0,
    installments: 5,
    installmentValue: 0
  },
  totalItems: 0
};

export const calculateSubtotal = (cartItems, installments) => {
  return cartItems.length > 0
    ? cartItems.reduce((newObj, cartItem) => {
        const value = (newObj.value ? newObj.value : 0) + cartItem.price.value;
        const installmentValue = Number((value / installments).toFixed(2));

        return {
          value,
          installmentValue,
          installments
        };
      }, {})
    : cartInitialState.subtotal;
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      const filteredCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );

      return {
        ...state,
        cartItems: filteredCartItems,
        totalItems: filteredCartItems.length,
        subtotal: calculateSubtotal(
          filteredCartItems,
          state.subtotal.installments
        )
      };

    case ADD_TO_CART:
      const parsedCartItems = [
        ...state.cartItems,
        {
          id: action.payload.id,
          imageUrl: action.payload.images[0].url,
          name: action.payload.name,
          price: action.payload.price
        }
      ];

      return {
        ...state,
        cartItems: parsedCartItems,
        totalItems: parsedCartItems.length,
        subtotal: calculateSubtotal(
          parsedCartItems,
          state.subtotal.installments
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
