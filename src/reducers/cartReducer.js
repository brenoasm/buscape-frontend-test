const cartInitialState = {
  cartItems: [],
  subtotal: {
    value: 0,
    installments: 5,
    installmentValue: 0
  },
  totalItems: 0
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
