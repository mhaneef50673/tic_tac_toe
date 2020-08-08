import React from "react";

import BoardSquare from "../../atoms/board-square";

const TicTacToeBoard = (props) => {
  const { noOfRows, noOfColumns, squares, squareClickHanlder, winningSquares } = props;
  const renderSquare = (index) => {
    return (
      <BoardSquare
        key={index}
        squareValue={squares[index]}
        squareClickHanlder={() => squareClickHanlder(index)}
        isWinning={winningSquares.includes(index)}
      />
    );
  };

  return (
    <div>
      {[...new Array(noOfRows)].map((x, rowIndex) => {
        return (
          <div className="square-row-container" key={rowIndex}>
            {[...new Array(noOfColumns)].map((y, colIndex) =>
              renderSquare(rowIndex * noOfColumns + colIndex)
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToeBoard;
