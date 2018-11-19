import React from "react";
import { shallow } from "enzyme";

import ProductList from "./";

describe("ProductList", () => {
  const products = [
    {
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
    }
  ];

  it("matches the snapshot", () => {
    const wrapper = shallow(<ProductList products={products} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders the same quantity of cartItems passed as props", () => {
    const wrapper = shallow(<ProductList products={products} />);

    expect(wrapper.find('ProductItem')).toHaveLength(1);
  });

});
