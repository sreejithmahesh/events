import React from 'react';
import HeaderCmp from './Header-component';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

describe('components --> header', () => {
  it('renders header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderCmp />, div);
  });
  it('should have header', () => {
    const _wrapper = shallow(<HeaderCmp />)
    expect(_wrapper.find('.header')).toHaveLength(1)
  })
  it('should have header-subsection', () => {
    const _wrapper = shallow(<HeaderCmp />)
    expect(_wrapper.find('.header-subsection')).toHaveLength(1)
  })

});
