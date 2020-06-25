import React from 'react';
import Card from './card';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

describe('components --> Card', () => {
  it('renders Card without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={'Title'} />, div);
  });
  it('should have card-title', () => {
    const _wrapper = shallow(<Card title={'Title'} />)
    expect(_wrapper.find('.card-title')).toHaveLength(1)
  })
  it('should have card-title-line', () => {
    const _wrapper = shallow(<Card title={'Title'} />)
    expect(_wrapper.find('.card-title-line')).toHaveLength(1)
  })

});
