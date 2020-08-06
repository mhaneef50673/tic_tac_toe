import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameForm from "./game-form";
import Alert from "../../atoms/alert";
import "./game-widget.scss";

const BLOCK_NAME = "game-widget";

const GameWidget = (props) => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Game</h2>
          <div className={`${BLOCK_NAME}_container`}>
            <Row>
              <Col>
                {props.isError && (
                  <Alert
                    type="error"
                    msg="Player one and Player two name cannot be same"
                  />
                )}
                {props.shouldStartGame ? (
                  <h1>Game Started </h1>
                ) : (
                  <GameForm {...props} />
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWidget;
