import React from "react";
import { shallow } from "enzyme";

import ProductPreviewImageItem from "./";

describe("ProductPreviewImageItem", () => {
  const initialProps = {
    url:
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
    productId: 2321312
  };

  it("matches the snapshot", () => {
    const wrapper = shallow(<ProductPreviewImageItem {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
