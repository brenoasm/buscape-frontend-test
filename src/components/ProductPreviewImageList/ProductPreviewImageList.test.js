import React from "react";
import { shallow } from "enzyme";

import ProductPreviewImageList from "./";

describe("ProductPreviewImageList", () => {
  const initialProps = {
    productId: 1,
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
    selectedImage: "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg"
  }

  it("matches the snapshot", () => {
    const wrapper = shallow(<ProductPreviewImageList {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
