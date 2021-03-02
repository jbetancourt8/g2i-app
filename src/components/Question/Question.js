import React from "react";
import "./Question.css";

const Question = ({ currentQuestion, numOfQuestions, question }) => {
  console.log(question);
  return (
    <div className="question_container">
      <div className="question_card_title">
        <div className="question_card_content">
          <p className="question_title">{question.category}</p>
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
