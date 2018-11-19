import React from "react";
import { shallow } from "enzyme";

import ProductSubtotal from "./";

describe("ProductSubtotal", () => {
  const price = {
    installments: 5,
    installmentValue: 500,
    value: 2500
  }

  it("matches the snapshot", () => {
    const wrapper = shallow(<ProductSubtotal price={price} />);

    expect(wrapper).toMatchSnapshot();
  });
});
