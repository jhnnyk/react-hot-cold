import React from "react";
import { shallow, mount } from "enzyme";

import GuessSection from "./guess-section";
import GuessForm from "./guess-form";

describe("<GuessSection />", () => {
  it("renders without crashing", () => {
    shallow(<GuessSection />);
  });

  it("renders the feedback header", () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.find("#feedback").length).toBe(1);
  });

  it("renders the <GuessForm /> component", () => {
    const wrapper = shallow(<GuessSection />);
    expect(wrapper.find(GuessForm).length).toBe(1);
  });

  it("has props", () => {
    const wrapper = shallow(<GuessSection feedback="Make your guess!" />);
    expect(wrapper.instance().props.feedback).toEqual("Make your guess!");
  });
});
