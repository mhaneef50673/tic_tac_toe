import findIndex from "lodash/findIndex";

import { saveLeaderboardUrl } from "../../../core/api/endpoints";
import { fetchData } from "../../../core/api";

export const postData = (postData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  };
  return fetchData(requestOptions, saveLeaderboardUrl).then((results) => {
    console.log(results);
  });
};

export const saveLeaderboard = (data, playerOne, playerTwo, wonBy) => {
  const existingPlayerOneIndex = findIndex(data, (val) =>
    val.name === playerOne ? true : false
  );
  const existingPlayerTwoIndex = findIndex(data, (val) =>
    val.name === playerTwo ? true : false
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

  // post data to sever
  postData(data);
  return data;
};
