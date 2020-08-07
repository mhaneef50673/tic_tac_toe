import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import { calculateWinner } from "./helper";
import { ROW_COUNT, COL_COUNT } from './constants';
import TicTacToeBoard from "./tic-tac-toe-board";

export default class Game extends React.Component {
  state = {
    squares: Array(9).fill(null),
    isPlayerOneNext: true,
  };

  squareClickHanlder = (clickedSquaredIndex) => {
    const { squares, isPlayerOneNext } = this.state;
    const { playerOne, playerTwo, onGameOver } = this.props;
    if (squares[clickedSquaredIndex]) {
      return;
    }
    squares[clickedSquaredIndex] = isPlayerOneNext ? "X" : "O";
    this.setState({
      squares,
      isPlayerOneNext: !isPlayerOneNext,
    });
    const wonBy = calculateWinner(squares, playerOne, playerTwo);
    if (wonBy) {
      onGameOver(playerOne, playerTwo, wonBy);
    }
  };

  resetState = () => {
    this.setState({
      squares: Array(9).fill(null),
      isPlayerOneNext: true,
    });
  };

  handleRematch = () => {
    this.resetState();
  };

  handleNewMatch = () => {
    this.resetState();
    this.props.resetGameState();
  };

  render() {
    const { squares, isPlayerOneNext } = this.state;
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
          {gameStatus ? (
            <div>
              <span className="game-over">
                {gameStatus === "draw" ? (
                  <h3>Oops, its a draw !!</h3>
                ) : (
                  <React.Fragment>
                    <h3>Winner is {wonBy}</h3>
                    <span className="winner-trophy-icon">
                      <FontAwesomeIcon color="#FFD700" icon={faTrophy} />
                    </span>
                  </React.Fragment>
                )}
              </span>
              <button
                className="underline-btn-class"
                onClick={this.handleRematch}
              >
                Re-match
              </button>
              <button
                className="underline-btn-class"
                onClick={this.handleNewMatch}
              >
                New Game
              </button>
            </div>
          ) : (
            <React.Fragment>
              <h3 className="game-started">!! Game Started !!</h3>
              <TicTacToeBoard
                squares={squares}
                squareClickHanlder={(i) => this.squareClickHanlder(i)}
                noOfRows={ROW_COUNT}
                noOfColumns={COL_COUNT}
              />
              <div className="game-next-turn">
                <div>{`Next turn: ${
                  isPlayerOneNext ? playerOne : playerTwo
                }`}</div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
