import React from "react";
import { shallow } from "enzyme";

import Image from "./";

describe("Image", () => {
  it("matches the snapshot", () => {
    const imageProps = {
      src:
        "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
      alt: "Teste",
      width: 80,
      height: 80,
      onBrokenImageUrl: jest.fn()
    };

    const wrapper = shallow(<Image {...imageProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
