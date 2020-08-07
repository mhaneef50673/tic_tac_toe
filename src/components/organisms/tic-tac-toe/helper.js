import findIndex from "lodash/findIndex";

export const getLeaderboardFromStorage = () => {
  const data = JSON.parse(localStorage.getItem("ticTacToeLeaderboard"));
  if (data) {
    return data;
  }
  return [];
};

export const setLeaderboardToStorage = (playerOne, playerTwo, wonBy) => {
  const data = localStorage.getItem("ticTacToeLeaderboard")
    ? JSON.parse(localStorage.getItem("ticTacToeLeaderboard"))
    : [];
  const existingPlayerOneIndex = findIndex(
    data,
    (val) => val.name === playerOne ? true: false
  );
  const existingPlayerTwoIndex = findIndex(
    data,
    (val) => val.name === playerTwo ? true: false
  );
  if (existingPlayerOneIndex > -1) {
    const existingPlayerOneResult = data[existingPlayerOneIndex];
    existingPlayerOneResult.points =
      existingPlayerOneResult.points + (wonBy === playerOne ? 1 : 0);
    data[existingPlayerOneIndex] = existingPlayerOneResult;
  } else {
    data.push({
      name: playerOne,
      points: wonBy === playerOne ? 1 : 0,
    });
  }
  if (existingPlayerTwoIndex > -1) {
    const existingPlayerTwoResult = data[existingPlayerTwoIndex];
    existingPlayerTwoResult.points =
      existingPlayerTwoResult.points + (wonBy === playerTwo ? 1 : 0);
    data[existingPlayerTwoIndex] = existingPlayerTwoResult;
  } else {
    data.push({
      name: playerTwo,
      points: wonBy === playerTwo ? 1 : 0,
    });
  }
  localStorage.setItem("ticTacToeLeaderboard", JSON.stringify(data));
  return data;
};
