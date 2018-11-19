import React from 'react';
import { shallow } from 'enzyme';

import AddToCartButton from './';

describe('AddToCartButton', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<AddToCartButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('calls the fn when clicked', () => {
    const fn = jest.fn();
    const wrapper = shallow(<AddToCartButton handleProductAddToCartClick={fn} />);
    wrapper.simulate('click');

    expect(fn).toBeCalled();
  });
});
