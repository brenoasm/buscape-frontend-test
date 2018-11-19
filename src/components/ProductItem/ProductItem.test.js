import React from "react";
import { shallow } from "enzyme";

import ProductItem from "./";

describe("ProductItem", () => {
  const product = {
    id: 2321312,
    name: "Smartphone Apple iPhone 7 128GB",
    images: [
      {
        url:
          "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
        selected: true
      },
      {
        url:
          "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274",
        selected: false
      },
      {
        url:
          "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138",
        selected: false
      },
      {
        url:
          "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730",
        selected: false
      }
    ],
    price: {
      value: 3509.1,
      installments: 10,
      installmentValue: 389.9
    },
    selectedImage:
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
    loading: false
  };

  it("matches the snapshot", () => {
    const wrapper = shallow(<ProductItem product={product} />);

    expect(wrapper).toMatchSnapshot();
  });

});
