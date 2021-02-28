import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import quizLogo from "../../assets/app-icon.png";
function Home() {
  return (
    <div className="home_container">
      <img height="175" src={quizLogo} alt="quiz-logo" />
      <h1 className="home_title">Welcome to the Trivia Challenge!</h1>
      <p className="home_text">
        You will be presented with 10 True or False questions.
      </p>
      <p className="home_text">Can you score 100%?</p>
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
