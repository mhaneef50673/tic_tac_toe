import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import GameWidget from "./";

describe("onGameOver Component", () => {
  it("should render the component", () => {
    const tree = mount(<GameWidget onGameOver={() => {}} />);
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});
