import React from "react";
import { shallow } from "enzyme";

import CartSubtotal from "./";

describe("CartSubtotal", () => {
  const price = {
    installmentValue: 389.9,
    installments: 10,
    value: 3509.1
  };

  it("matches the snapshot", () => {
    const wrapper = shallow(<CartSubtotal />);

    expect(wrapper).toMatchSnapshot();
  });

  it("matches the snapshot with price being passed", () => {
    const wrapper = shallow(<CartSubtotal price={price} />);

    expect(wrapper).toMatchSnapshot();
  });
});
