import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Login from '..';

describe('Login', () => {
  const wrapper = mount(
    <MockedProvider>
      <Login />
    </MockedProvider>,
  );

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
