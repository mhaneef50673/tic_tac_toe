import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Alert from './index';

describe('Alert Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <Alert
        type= "error"
        msg="test message"
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});