import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import BoardSquare from "./index";

describe("BoardSquare Component", () => {
  it("should render the component", () => {
    const tree = mount(
      <BoardSquare
        isWinning={true}
        squareValue={1}
        squareClickHanlder={() => {}}
      />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});
