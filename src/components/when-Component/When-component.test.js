import React from 'react';
import WhenCmp from './When-component';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

const mockError = {
  title: "*Please enter your title.",
  description: "*Please enter your description.",
  coordinator: "*Please enter your coordinator.",
  email: "*Please enter your email-ID."
}

describe('components --> WhenCmp', () => {
  it('renders WhenCmp without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WhenCmp errors={mockError} />, div);
  });
  it('should have field-container', () => {
    const _wrapper = shallow(<WhenCmp errors={mockError} />)
    expect(_wrapper.find('.field-container')).toHaveLength(2)
  })
  it('should have 1 Card', () => {
    const _wrapper = shallow(<WhenCmp errors={mockError} />)
    expect(_wrapper.find('Card')).toHaveLength(1);
  })
});
