import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameWidget from "../../molecules/game-widget";
import GameResults from "../../molecules/game-results";

import "./tic-tac-toe.scss";

export default class TicTacToe extends React.Component {
  render() {
    return (
      <Container fluid className="main-container">
        <h1>Tic Tac Toe</h1>
        <Row>
          <Col sm={6}>
            <GameWidget />
          </Col>
          <Col sm={6}>
            <GameResults />
          </Col>
        </Row>
      </Container>
    );
  }
}
