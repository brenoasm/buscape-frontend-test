import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { cartInitialState } from "../../reducers/cartReducer";

import CartContainer from "./";

const mockStore = configureStore([]);

describe("CartContainer", () => {
  it("maps state and actions properly", () => {
    const initialState = {
      cartState: {
        ...cartInitialState
      }
    };

    const expectedResult = JSON.stringify({
      cartItems: [],
      subtotal: {
        value: 0,
        installments: 5,
        installmentValue: 0
      },
      handleProductRemoveClick: () => {}
    });

    const store = mockStore(initialState);

    const wrapper = shallow(<CartContainer />, { context: { store } });

    expect(JSON.stringify(wrapper.props())).toBe(expectedResult);
  });
});
