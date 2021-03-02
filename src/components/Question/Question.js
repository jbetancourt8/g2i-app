import React from "react";
import "./Question.css";

const Question = ({ currentQuestion, numOfQuestions, question }) => {
  return (
    <div className="question_container">
      <div className="question_card_title">
        <div className="question_card_content">
          <h2 className="question_title">{question.category}</h2>
          <p className="question_index">
            Question {currentQuestion + 1} / {numOfQuestions}
          </p>
        </div>
      </div>

      <div className="question_card_question">
        <h2
          className="question_text"
          dangerouslySetInnerHTML={{
            __html: question.question,
          }}
        />
      </div>
    </div>
  );
};

export default Question;
