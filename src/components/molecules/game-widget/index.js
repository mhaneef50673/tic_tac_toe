import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameForm from "./game-form";
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
                  <div className="alert error-info">
                    Player one and Player two name cannot be same
                  </div>
                )}
                <GameForm {...props} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWidget;
