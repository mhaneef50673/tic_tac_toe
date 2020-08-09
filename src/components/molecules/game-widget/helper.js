import { ROW_COUNT, COL_COUNT } from '../../../constants';

const getHorizontalWinningCombination = () => {
  const totalHorizontalCombination = (ROW_COUNT * COL_COUNT) / COL_COUNT;
  let counter = 0;
  var verticalArr = [...new Array(totalHorizontalCombination)].map(() => {
    var tempArr = [...new Array(ROW_COUNT)].map(
      (val1, index) => index + counter
    );
    counter += ROW_COUNT;
    return tempArr;
  });

  return verticalArr;
};

const getVerticalWinningCombination = () => {
  const totalVerticalCombination = (ROW_COUNT * COL_COUNT) / ROW_COUNT;
  return [...new Array(totalVerticalCombination)].map((y, finalArrIndex) => {
    return [...new Array(ROW_COUNT)].map((y, index) => {
      if (index === 0) {
        return finalArrIndex;
      }
      return finalArrIndex + ROW_COUNT * index;
    });
  });
};

const getDiagonalWinningCombination = () => {
  const possibleDiagonalCombination = 2;
  return [...new Array(possibleDiagonalCombination)].map(
    (y, finalArrIndex) => {
      if (finalArrIndex === 0) {
        return [...new Array(ROW_COUNT)].map(
          (y, index) => index * (ROW_COUNT + 1)
        );
      } else {
        const firstVal = ROW_COUNT - 1;
        return [...new Array(ROW_COUNT)].map((y, index) => {
          if (index === 0) return firstVal;
          else return firstVal * (index + 1);
        });
      }
    }
  );
};

/**
 * return the maximum winning combination possible as Array
 * if the board is 3x3, then it will return array of 8 length  = 3 (rows) + 3 (columns) + 2 (diagonals)
 * if the board is 4x4, then it will return array of 10 length = 4 (rows) + 4 (columns) + 2 (diagonals)
 */
export const getPossibleWinningCombination = () => {
  const horizontalWinningCombination = getHorizontalWinningCombination();
  const verticalWinningCombination = getVerticalWinningCombination();
  const diagonalWinningCombination = getDiagonalWinningCombination();
  return [
    ...horizontalWinningCombination,
    ...verticalWinningCombination,
    ...diagonalWinningCombination,
  ];
};

const winningCombination = getPossibleWinningCombination();

export const calculateWinner = (squares, playerOne, playerTwo) => {
  const lines = winningCombination;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        playerName : squares[a] === "X" ? playerOne : playerTwo,
        winningSquares: lines[i],
      };
    }
  }
  return null;
};
