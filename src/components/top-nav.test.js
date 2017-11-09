import React from "react";
import { shallow, mount } from "enzyme";

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("renders a `what` link", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find(".what").length).toBe(1);
  });

  it("`what` link fires the onInfo callback when clicked", () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onInfo={callback} />);
    wrapper.find(".what").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
