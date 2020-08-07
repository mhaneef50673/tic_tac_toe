import React from "react";

import './board-square.scss';

const BLOCK_NAME = "board-square";

const BoardSquare = (props) => {
  const { squareClickHanlder, squareValue } = props;
  return (
    <button className={BLOCK_NAME} onClick={squareClickHanlder}>
      {squareValue}
    </button>
  );
};

export default BoardSquare;
