import React from "react";
import { shallow } from "enzyme";

import CartItem from "./";

describe("CartItem", () => {
  const cartItem = {
    id: 2321312,
    imageUrl:
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
    name: "Smartphone Apple iPhone 7 128GB",
    price: { installmentValue: 389.9, installments: 10, value: 3509.1 }
  };

  it("matches the snapshot", () => {
    const wrapper = shallow(<CartItem cartItem={cartItem} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("calls the fn once when clicked", () => {
    const fn = jest.fn();
    const wrapper = shallow(<CartItem cartItem={cartItem} handleProductRemoveClick={fn} />);
    wrapper.find('div[data-test-button]').simulate("click");
    expect(fn).toBeCalled();
  });
});
