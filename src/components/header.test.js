import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders the title", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });
});
