import React from 'react';
import Button from './Button';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

describe('components --> Button', () => {
  it('renders Button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button label={'button'} className={'publish-btn'} />, div);
  });
});
