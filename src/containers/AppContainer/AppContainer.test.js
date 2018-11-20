import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { toolbarMenuInitialState } from "../../reducers/toolbarMenuReducer";
import { cartInitialState } from "../../reducers/cartReducer";

import AppContainer from "./";

const mockStore = configureStore([]);

describe("AppContainer", () => {
  it("maps state and actions properly", () => {
    const initialState = {
      toolbarMenuState: {
        ...toolbarMenuInitialState
      },
      cartState: {
        ...cartInitialState
      }
    };

    const expectedResult = JSON.stringify({
      menuOpen: false,
      totalItems: 0,
      toggleMenuVisibility: () => {}
    });

    const store = mockStore(initialState);

    const wrapper = shallow(<AppContainer />, { context: { store } });

    expect(JSON.stringify(wrapper.props())).toBe(expectedResult);
  });
});
