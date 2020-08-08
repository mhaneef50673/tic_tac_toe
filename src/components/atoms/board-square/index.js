import React from "react";

import './board-square.scss';

const BLOCK_NAME = "board-square";

const BoardSquare = (props) => {
  const { squareClickHanlder, squareValue, isWinning } = props;
  return (
    <button className={`${BLOCK_NAME} ${isWinning ? 'winning-square' : ''}`} onClick={squareClickHanlder}>
      {squareValue}
    </button>
  );
};

export default BoardSquare;
