import React from "react";
import CordinatorCmp from "./Cordinator-component";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

const mockError = {
  title: "*Please enter your title.",
  description: "*Please enter your description.",
  responsible: "*Please enter your coordinator.",
  email: "*Please enter your email-ID.",
};
const mockList = [
  {
    id: 0,
    name: "Daniel",
    lastname: "Mitchell",
    email: "daniel.mitchell@hussa.rs",
  },
  {
    id: 1,
    name: "Albert",
    lastname: "Alexander",
    email: "albert.alexander@hussa.rs",
  },
];

describe("components --> coordinator", () => {
  it("renders coordinator without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CordinatorCmp errors={mockError} responsibleList={mockList} />,
      div
    );
  });
  it("should have field-container", () => {
    const _wrapper = shallow(
      <CordinatorCmp errors={mockError} responsibleList={mockList} />
    );
    expect(_wrapper.find(".field-container")).toHaveLength(2);
  });
  it("should have error message class", () => {
    const _wrapper = shallow(
      <CordinatorCmp errors={mockError} responsibleList={mockList} />
    );
    expect(_wrapper.find(".errorMsg")).toHaveLength(2);
  });
  it("should have 1 Card", () => {
    const _wrapper = shallow(
      <CordinatorCmp errors={mockError} responsibleList={mockList} />
    );
    expect(_wrapper.find("Card")).toHaveLength(1);
  });
});
