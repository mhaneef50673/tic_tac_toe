import React from "react";

const GameForm = (props) => {
  const { playerOne, playerTwo, onInputChange, onGameStartHandler } = props;
  return (
    <form onSubmit={onGameStartHandler}>
      <label className="input-label">Player one Name</label>
      <input
        type="text"
        className="input-text"
        placeholder="Enter player one name"
        onChange={(e) => onInputChange(e, "playerOne")}
        value={playerOne}
        required
      />
      <label className="input-label">Player two Name</label>
      <input
        type="text"
        className="input-text"
        placeholder="Enter player two name"
        onChange={(e) => onInputChange(e, "playerTwo")}
        value={playerTwo}
        required
      />
      <button className="btn" type="submit">
        Start Game
      </button>
    </form>
  );
};

export default GameForm;
