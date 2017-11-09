import React from "react";
import { shallow, mount } from "enzyme";

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("renders without crashing", () => {
    shallow(<GuessCount />);
  });

  it("displays the count", () => {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper.find("#count").length).toBe(1);
  });
});
