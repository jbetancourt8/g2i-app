import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Score.css";

function Score() {
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  return (
    <div className="score_container">
      <h1>You scored</h1>
      <h2>{location.state.data}/10</h2>
      <div className="score_button" onClick={() => history.replace("/")}>
        Play again?
      </div>
    </div>
  );
}

export default Score;
