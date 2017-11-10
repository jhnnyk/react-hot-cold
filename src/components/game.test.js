import React from "react";
import { shallow, mount } from "enzyme";

import Game from "./game";
import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";

describe("<Game />", () => {
  it("renders without crashing", () => {
    shallow(<Game />);
  });

  it("renders each component", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(GuessSection).length).toBe(1);
    expect(wrapper.find(GuessCount).length).toBe(1);
    expect(wrapper.find(GuessList).length).toBe(1);
  });

  it("updates the guess count", () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().guess("10");
    wrapper.instance().guess("20");
    wrapper.update();
    expect(wrapper.state("guesses").length).toEqual(2);
  });

  it("displays the guesses", () => {
    const wrapper = mount(<Game />);
    const value = "23";
    wrapper.instance().guess(value);
    wrapper.update();
    expect(wrapper.find("#count").text()).toBe("1");
    expect(wrapper.find("#guessList").text()).toBe(value);
  });
});
