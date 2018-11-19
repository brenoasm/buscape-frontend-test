import React from "react";
import { shallow } from "enzyme";

import Tag from "./";

describe("Tag", () => {
  it("matches the snapshot", () => {
    const wrapper = shallow(<Tag text="Teste" />);

    expect(wrapper).toMatchSnapshot();
  });
});
