import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { shoppingInitialState } from "../../reducers/shoppingReducer";

import ProductListContainer from "./";

const mockStore = configureStore([]);

describe("ProductListContainer", () => {
  it("maps state and actions properly", () => {
    const initialState = {
      shoppingState: {
        ...shoppingInitialState
      }
    };

    const expectedResult = JSON.stringify({
      products: shoppingInitialState.items,
      onSelectedImageChange: () => {},
      handleProductAddToCartClick: () => {}
    });

    const store = mockStore(initialState);

    const wrapper = shallow(<ProductListContainer />, { context: { store } });

    expect(JSON.stringify(wrapper.props())).toBe(expectedResult);
  });
});
