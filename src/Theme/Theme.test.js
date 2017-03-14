/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Theme from './Theme';

it('renders correctly', () => {
  const wrapper = mount(
    <Theme>
      <div>Child</div>
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});
