import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import GameForm from "./game-form";

describe("GameForm Component", () => {
  it("should render the component", () => {
    const tree = mount(
      <GameForm
        playerOne="player1"
        playerTwo="player2"
        onInputChange={() => {}}
        onGameStartHandler={() => {}}
      />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});
