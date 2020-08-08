import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import GameResult from "./index";

describe("GameResult Component", () => {
  it("should render the component", () => {
    const tree = mount(
      <GameResult results={[]} isFetching={true} isError={false} />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it("should render the component with results", () => {
    const tree = mount(
      <GameResult
        results={[
          {
            name: "Player1",
            points: 3,
          },
          {
            name: "Player2",
            points: 2,
          },
        ]}
        isFetching={true}
        isError={false}
      />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it("should render the component with error", () => {
    const tree = mount(
      <GameResult results={[]} isFetching={false} isError={true} />
    );
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});
