import React from "react";
import PropTypes from 'prop-types';

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

BoardSquare.propTypes = {
  isWinning: PropTypes.bool,
  squareValue: PropTypes.number,
  squareClickHanlder: PropTypes.func,
}

export default BoardSquare;
