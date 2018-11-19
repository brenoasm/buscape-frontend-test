import React from "react";
import { shallow } from "enzyme";

import Cart from "./";

describe("Cart", () => {
  const cartItems = [
    {
      id: 2321312,
      imageUrl:
        "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
      name: "Smartphone Apple iPhone 7 128GB",
      price: { installmentValue: 389.9, installments: 10, value: 3509.1 }
    }
  ];

  it("matches the snapshot", () => {
    const wrapper = shallow(<Cart />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders the same quantity of cartItems passed as props", () => {
    const wrapper = shallow(<Cart cartItems={cartItems} />);

    expect(wrapper.find('CartItem')).toHaveLength(1);
  });
});
