import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameWidget from "../../molecules/game-widget";
import GameResults from "../../molecules/game-results";
import { saveLeaderboard } from "./helper";

import { getLeaderboardUrl } from "../../../core/api/endpoints";
import { fetchData } from "../../../core/api";

import "./tic-tac-toe.scss";

const TicTacToe = () => {
  const [leaderBoard, changeLeaderBoard] = useState([]);
  const [isLeaderboardFetching, changeIsLeaderboardFetching] = useState(true);
  const [isFetchingFailed, changeIsFetchingFailed] = useState(false);

  const onGameOver = (playerOne, playerTwo, wonBy) => {
    const results = saveLeaderboard(leaderBoard, playerOne, playerTwo, wonBy);
    changeLeaderBoard([...results]);
  };

  useEffect(() => {
    fetchData(
      {
        method: "GET",
      },
      getLeaderboardUrl
    ).then((data) => {
      changeIsLeaderboardFetching(false);
      if (data && data.leaderboard) {
        changeLeaderBoard(data.leaderboard);
      } else {
        changeIsFetchingFailed(true);
      }
    });
  }, []);

  return (
    <Container fluid className="main-container">
      <h1>Tic Tac Toe</h1>
      <Row>
        <Col lg={6}>
          <GameWidget onGameOver={onGameOver} />
        </Col>
        <Col lg={6}>
          <GameResults
            results={leaderBoard}
            isFetching={isLeaderboardFetching}
            isError={isFetchingFailed}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TicTacToe;
