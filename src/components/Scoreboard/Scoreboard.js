import React from "react";
import "./Scoreboard.css";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Scoreboard = ({ data, score }) => {
  return (
    <div className="scoreboard_container">
      <h1>You scored {score}/10</h1>
      {data.map((question, id) => (
        <div className="scoreboard_card" key={id}>
          <div className="scoreboard_list">
            {question.user_answer === question.correct_answer ? (
              <GiCheckMark
                size={35}
                className="scoreboard_icon"
                color="#03634a"
              />
            ) : (
              <GiCrossMark
                size={35}
                className="scoreboard_icon"
                color="#a30023"
              />
            )}
            <p
              dangerouslySetInnerHTML={{
                __html: question.question,
              }}
            />
          </div>
        </div>
      ))}

      <Link
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        <button className="scoreboard_button" type="button">
          Play again?
        </button>
      </Link>
    </div>
  );
};

export default Scoreboard;
