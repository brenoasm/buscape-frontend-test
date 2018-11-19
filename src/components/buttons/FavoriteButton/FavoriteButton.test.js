import React from 'react';
import { shallow } from 'enzyme';

import FavoriteButton from './';

describe('FavoriteButton', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<FavoriteButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
