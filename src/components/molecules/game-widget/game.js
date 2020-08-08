import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import { calculateWinner } from "./helper";
import { ROW_COUNT, COL_COUNT } from "../../../constants";
import TicTacToeBoard from "./tic-tac-toe-board";

export default class Game extends React.Component {
  state = {
    squares: Array(9).fill(null),
    isPlayerOneNext: true,
    winningSquares: [],
  };

  squareClickHanlder = (clickedSquaredIndex) => {
    const { squares, isPlayerOneNext } = this.state;
    const { playerOne, playerTwo, onGameOver } = this.props;
    if (
      squares[clickedSquaredIndex] ||
      calculateWinner(squares, playerOne, playerTwo)
    ) {
      return;
    }
    squares[clickedSquaredIndex] = isPlayerOneNext ? "X" : "O";
    const wonBy = calculateWinner(squares, playerOne, playerTwo);
    this.setState(
      {
        squares,
        isPlayerOneNext: !isPlayerOneNext,
        winningSquares: wonBy ? wonBy.winningSquares : [],
      },
      () => {
        if (wonBy) {
          onGameOver(playerOne, playerTwo, wonBy.playerName);
        }
      }
    );
  };

  resetState = () => {
    this.setState({
      squares: Array(9).fill(null),
      isPlayerOneNext: true,
      winningSquares: [],
    });
  };

  handleRematch = () => {
    this.resetState();
  };

  handleNewMatch = () => {
    this.resetState();
    this.props.resetGameState();
  };

  renderBtns = () => {
    return (
      <div className="centered">
        <button className="underline-btn-class" onClick={this.handleRematch}>
          Re-match
        </button>
        <button className="underline-btn-class" onClick={this.handleNewMatch}>
          New Game
        </button>
      </div>
    );
  };

  render() {
    const { squares, isPlayerOneNext, winningSquares } = this.state;
    const { playerOne, playerTwo } = this.props;
    const wonBy = calculateWinner(squares, playerOne, playerTwo);
    let gameStatus = null;
    if (wonBy) {
      gameStatus = "won";
    } else if (!squares.includes(null)) {
      gameStatus = "draw";
    }

    return (
      <div className="game">
        <div className="game-container">
          {gameStatus && (
            <div>
              <span className="game-over">
                {gameStatus === "draw" ? (
                  <h3>Oops, its a draw !!</h3>
                ) : (
                  <React.Fragment>
                    <h3>Winner is {wonBy.playerName}</h3>
                    <span className="winner-trophy-icon">
                      <FontAwesomeIcon color="#FFD700" icon={faTrophy} />
                    </span>
                  </React.Fragment>
                )}
              </span>
              {this.renderBtns()}
            </div>
          )}
          <React.Fragment>
            <TicTacToeBoard
              squares={squares}
              squareClickHanlder={(i) => this.squareClickHanlder(i)}
              noOfRows={ROW_COUNT}
              noOfColumns={COL_COUNT}
              winningSquares={winningSquares}
            />
            <div className="game-next-turn">
              <div>
                {!gameStatus ? (
                  <span style={{ fontWeight: "bold", fontStyle: "italic"}}>
                    {`Next turn: ${isPlayerOneNext ? playerOne : playerTwo}`}
                  </span>
                ) : (
                  <h3>Game Over !!</h3>
                )}
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  playerOne: PropTypes.string,
  playerTwo: PropTypes.string,
  onGameOver: PropTypes.func,
};
