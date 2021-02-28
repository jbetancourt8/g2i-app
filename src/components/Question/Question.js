import React from "react";
import "./Question.css";

const Question = ({ currentQuestion, numOfQuestions, question }) => {
  return (
    <div className="question_container">
      <div className="question_card_content">
        <p className="question_title">
          Question {currentQuestion + 1} / {numOfQuestions}
        </p>
      </div>
      <div className="question_card_content">
        <h2
          className="question_text"
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        />
      </div>
    </div>
  );
};

export default Question;
