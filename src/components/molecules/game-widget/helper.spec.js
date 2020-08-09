import { getPossibleWinningCombination, calculateWinner } from "./helper";

describe("Helper function", () => {
  it("test getPossibleWinningCombination function", () => {
    const result = getPossibleWinningCombination();
    expect(result).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]);
  });
  it("test calculateWinner function", () => {
    const squares = ["X", "O", "X", "O", "X", "O", "O", "O", "X"];
    const wonBy = calculateWinner(squares, "player1", "player2");
    expect(wonBy.playerName).toEqual("player1");
    const wonBy1 = calculateWinner(
      [null, null, null, null, null, null, null, "X", "O"],
      "player1",
      "player2"
    );
    expect(wonBy1).toEqual(null);
  });
});
