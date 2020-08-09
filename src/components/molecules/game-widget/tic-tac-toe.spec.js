import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TicTacToeBoard from "./tic-tac-toe-board";

describe("TicTacToeBoard Component", () => {
  it("should render the component", () => {
    const tree = mount(
      <TicTacToeBoard
        noOfRows={3}
        noOfColumns={3}
        squares={[null, null, null, null, null, null, null, null, null]}
        squareClickHanlder={() => {}}
        winningSquares={[]}
      />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});
