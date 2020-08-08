import React from "react";
import Proptypes from 'prop-types';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameForm from "./game-form";
import Game from "./game";
import Alert from "../../atoms/alert";
import "./game-widget.scss";

const BLOCK_NAME = "game-widget";

export default class GameWidget extends React.Component {
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
      });
    }
  };

  resetGameState = () => {
    this.setState({
      playerOne: "",
      playerTwo: "",
      shouldStartGame: false,
    });
  };

  render() {
    const { playerOne, playerTwo, isError, shouldStartGame } = this.state;
    return (
      <div className={BLOCK_NAME}>
        <div className="panel-wrapper">
          <div className="panel-container">
            <h2>Game</h2>
            <div className={`${BLOCK_NAME}_container`}>
              <Row>
                <Col>
                  {isError && (
                    <Alert
                      type="error"
                      msg="Player one and Player two name cannot be same"
                    />
                  )}
                  {shouldStartGame ? (
                    <Game
                      playerOne={playerOne}
                      playerTwo={playerTwo}
                      resetGameState={this.resetGameState}
                      onGameOver={this.props.onGameOver}
                    />
                  ) : (
                    <GameForm
                      playerOne={playerOne}
                      playerTwo={playerTwo}
                      onInputChange={this.onInputChange}
                      onGameStartHandler={this.onGameStartHandler}
                      isError={isError}
                      shouldStartGame={shouldStartGame}
                    />
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameWidget.propTypes = {
  onGameOver: Proptypes.func,
}