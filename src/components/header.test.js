import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./header";
import InfoModal from "./info-modal";

describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders the title", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });

  it("shows and hides the info modal", () => {
    const wrapper = mount(<Header />);
    wrapper.instance().toggleInfoModal();
    expect(wrapper.find(InfoModal).length).toBe(1);
    const closeButton = wrapper.find(".close");
    closeButton.simulate("click");
    expect(wrapper.find(InfoModal).length).toBe(0);
  });
});
