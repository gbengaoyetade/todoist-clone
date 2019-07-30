import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Login from '.';

describe('Login', () => {
  const wrapper = shallow(<Login />);

  it('should render without crashing', () => {
    expect(wrapper.find('input').length).to.equal(2);
  });
});
