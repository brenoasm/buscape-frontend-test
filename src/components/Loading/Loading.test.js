import React from "react";
import { shallow } from "enzyme";

import Loading from "./";

describe("Loading", () => {
  it("matches the snapshot", () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
