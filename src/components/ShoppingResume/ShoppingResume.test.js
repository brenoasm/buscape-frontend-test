import React from "react";
import { shallow } from "enzyme";

import ShoppingResume from "./";

describe("ShoppingResume", () => {
  const subtotal = {
    installments: 5,
    installmentValue: 500,
    value: 2500
  }

  it("matches the snapshot", () => {
    const wrapper = shallow(<ShoppingResume price={subtotal} />);

    expect(wrapper).toMatchSnapshot();
  });
});
