import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import "./game-results.scss";

const BLOCK_NAME = "game-results";

const GameResult = (props) => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Leaderboard</h2>
          <div className={`${BLOCK_NAME}_container`}>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Haneef</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Sumi</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
