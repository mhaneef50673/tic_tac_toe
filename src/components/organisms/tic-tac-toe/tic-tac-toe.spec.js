import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TicTacToe from "./index";

describe("TicTacToe Component", () => {
  it("should render the component", () => {
    const tree = mount(<TicTacToe />);
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it("should change setState when onGameOver change is called", () => {
    const tree = mount(<TicTacToe />);
    const instance = tree.instance();
    expect(instance.state.leaderBoard).toEqual([]);
    instance.onGameOver("player1", "player2", "player1");
    instance.forceUpdate();
    expect(instance.state.leaderBoard).toEqual([
      { name: "player1", points: 1 },
      { name: "player2", points: 0 },
    ]);
  });
});
