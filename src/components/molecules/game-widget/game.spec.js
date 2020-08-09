import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Game from "./game";

describe("Game Component", () => {
  it("should render the component", () => {
    const tree = mount(<Game playerOne="player1" playerTwo="player2" onGameOver={() => {}} />);
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it("should change setState when onGameOver change is called", () => {
    const tree = mount(<Game playerOne="player1" playerTwo="player2" onGameOver={() => {}} />);
    const instance = tree.instance();
    expect(instance.state.squares).toEqual(Array(9).fill(null));
    tree.find(".board-square").at(0).simulate('click');
    expect(instance.state.squares).toEqual(['X', null, null, null, null, null, null, null, null]);
    expect(instance.state.isPlayerOneNext).toEqual(false);
  });
});
