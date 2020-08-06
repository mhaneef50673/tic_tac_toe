import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameWidget from "../../molecules/game-widget";
import GameResults from "../../molecules/game-results";

import "./tic-tac-toe.scss";

export default class TicTacToe extends React.Component {
  state = {
    playerOne: "",
    playerTwo: "",
    isError: false,
    shouldStartGame: false,
  };

  onInputChange = (e, inputName) => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

  onGameStartHandler = (event) => {
    event.preventDefault();
    const { playerOne, playerTwo } = this.state;
    if (playerOne === playerTwo) {
      this.setState({
        isError: true,
      });
    } else {
      this.setState({
        shouldStartGame: true,
        isError: false,
      })
    }
  };

  render() {
    const { playerOne, playerTwo, isError, shouldStartGame } = this.state;
    return (
      <Container fluid className="main-container">
        <h1>Tic Tac Toe</h1>
        <Row>
          <Col lg={6}>
            <GameWidget
              playerOne={playerOne}
              playerTwo={playerTwo}
              onInputChange={this.onInputChange}
              onGameStartHandler={this.onGameStartHandler}
              isError={isError}
              shouldStartGame={shouldStartGame}
            />
          </Col>
          <Col lg={6}>
            <GameResults />
          </Col>
        </Row>
      </Container>
    );
  }
}
