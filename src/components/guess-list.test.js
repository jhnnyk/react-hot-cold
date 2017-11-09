import React from "react";
import { shallow, mount } from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("renders without crashing", () => {
    shallow(<GuessList guesses={["34", "45"]} />);
  });
});
