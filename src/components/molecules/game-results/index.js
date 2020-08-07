import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import "./game-results.scss";

const BLOCK_NAME = "game-results";

const GameResult = (props) => {
  const { results } = props;
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>
            Leaderboard
            <span className="trophy-icon">
              <FontAwesomeIcon color="#FFD700" icon={faTrophy} />
            </span>
          </h2>
          <div className={`${BLOCK_NAME}_container`}>
            <Row>
              <Col>
                {results.length > 0 ? (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => 
                        (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{result.name}</td>
                            <td>{result.points}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                ) : (
                  <h3 style={{ textAlign: "center" }}> No results to show </h3>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
