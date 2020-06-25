import React from 'react';
import AboutCmp from './About-component';
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
describe('components --> AboutCmp', () => {
  it('renders AboutCmp without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutCmp errors={mockError} categorylist={[]} />, div);
  });
  it('should have 1 Card', () => {
    const _wrapper = shallow(<AboutCmp errors={mockError} categorylist={[{ "id": 0, "name": "Cycling" }]} />)
    expect(_wrapper.find('Card')).toHaveLength(1);
  })
  it('should have textarea', function () {
    const _wrapper = shallow(<AboutCmp errors={mockError} categorylist={[{ "id": 0, "name": "Cycling" }]} />)
    const textarea = _wrapper.find({ id: 'description' })
    expect(textarea.exists()).toEqual(true)
  })
});
