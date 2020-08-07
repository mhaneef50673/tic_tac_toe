import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameWidget from "../../molecules/game-widget";
import GameResults from "../../molecules/game-results";
import { getLeaderboardFromStorage, setLeaderboardToStorage } from './helper';

import "./tic-tac-toe.scss";

const TicTacToe = () => {

  const [ leaderBoard, changeLeaderBoard ] = useState(getLeaderboardFromStorage());

  const onGameOver = (playerOne, playerTwo, wonBy) => {
    const results = setLeaderboardToStorage(playerOne, playerTwo, wonBy);
    changeLeaderBoard(results);
  }

  return (
    <Container fluid className="main-container">
      <h1>Tic Tac Toe</h1>
      <Row>
        <Col lg={6}>
          <GameWidget onGameOver={onGameOver} />
        </Col>
        <Col lg={6}>
          <GameResults results={leaderBoard}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TicTacToe;
