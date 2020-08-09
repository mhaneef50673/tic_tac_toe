import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameWidget from "../../molecules/game-widget";
import GameResults from "../../molecules/game-results";
import { saveLeaderboard } from "./helper";

import { getLeaderboardUrl } from "../../../core/api/endpoints";
import { fetchData } from "../../../core/api";

import "./tic-tac-toe.scss";

export default class TicTacToe extends React.Component {
  state = {
    leaderBoard: [],
    isLeaderboardFetching: true,
    isFetchingFailed: false,
  };

  componentDidMount() {
    fetchData(
      {
        method: "GET",
      },
      getLeaderboardUrl
    )
      .then((data) => {
        if (data && data.leaderboard) {
          this.setState({
            isLeaderboardFetching: false,
            leaderBoard: data.leaderboard,
          });
        }
      })
      .catch(() => {
        this.setState({
          isLeaderboardFetching: false,
          isFetchingFailed: false,
        });
      });
  }

  onGameOver = (playerOne, playerTwo, wonBy) => {
    const results = saveLeaderboard(this.state.leaderBoard, playerOne, playerTwo, wonBy);
    this.setState({
      leaderBoard: results,
    });
  };

  render() {
    const { leaderBoard, isFetchingFailed, isLeaderboardFetching } = this.state;
    return (
      <Container fluid className="main-container">
        <h1>Tic Tac Toe</h1>
        <Row>
          <Col lg={6}>
            <GameWidget onGameOver={this.onGameOver} />
          </Col>
          <Col lg={6}>
            <GameResults
              results={leaderBoard}
              isFetching={isLeaderboardFetching}
              isError={isFetchingFailed}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
