import React from "react";
import TicTacToe from "../../organisms/tic-tac-toe";

/**
 * Renders when any url doesnt match the route
 */
const Home = (props) => {
  return (
    <>
      <div
        style={{
          padding: "0 15px",
        }}
      >
        <iframe
          title="test ifrmae"
          src={
            "https://graphics.reuters.com/USA-ELECTION/RESULTS-LIVE-US/gjnpwlbyyvw/media-embed.html?headline=false"
          }
          width="100%"
          height={"3350px"}
          style={{
            border: "none",
          }}
        />
      </div>
      <TicTacToe />
    </>
  );
};

export default Home;
