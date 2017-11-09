import React from "react";
import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("sends the guess when submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = "34";
    wrapper.find("input.text").node.value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value);
  });
});
