import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './game-widget.scss';

const BLOCK_NAME = "game-widget";

const GameWidget = (props) => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Game</h2>
          <div className={`${BLOCK_NAME}_container`}>
            <Row>
              <Col></Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWidget;