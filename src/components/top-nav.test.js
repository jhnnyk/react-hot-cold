import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("renders a `what` link", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find(".what")).to.have.length(1);
  });
});
