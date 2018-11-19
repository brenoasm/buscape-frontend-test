import React from "react";
import { shallow } from "enzyme";

import Toolbar from "./";

describe("Toolbar", () => {
  it("matches the snapshot", () => {
    const wrapper = shallow(<Toolbar menuOpen={false} totalItems={0} />);

    expect(wrapper).toMatchSnapshot();
  });

  it(`shows "Não há produtos no carrinho" when totalItems is zero`, () => {
    const wrapper = shallow(<Toolbar menuOpen={false} totalItems={0} />);
    expect(wrapper.find('ForwardRef').find('div').text()).toBe("Não há produtos no carrinho");
  });

  it(`has CartContainer when totalItems is more than zero`, () => {
    const wrapper = shallow(<Toolbar menuOpen={false} totalItems={1} />);
    expect(wrapper.find('Connect(CartContainer)')).toHaveLength(1);
  });

  it(`should not show the menu when "menuOpen" is false`, () => {
    const wrapper = shallow(<Toolbar menuOpen={false} totalItems={0} />);
    expect(wrapper.find("ForwardRef").prop("pose")).toBe("closed");
  });

  it(`should show the menu when "menuOpen" is true`, () => {
    const wrapper = shallow(<Toolbar menuOpen={true} totalItems={0} />);
    expect(wrapper.find("ForwardRef").prop("pose")).toBe("open");
  });
});
