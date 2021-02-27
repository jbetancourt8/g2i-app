import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/quiz"
      >
        <button className="home_button">Begin</button>
      </Link>
    </div>
  );
}

export default Home;
