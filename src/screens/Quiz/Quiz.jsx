import React, { useState, useEffect } from "react";
import "./Quiz.css";
import Scoreboard from "../../components/Scoreboard";

const API_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    const answers = questions[currentQuestion];
    answers["user_answer"] = isCorrect;
    if (isCorrect === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return questions.length > 0 ? (
    showScore ? (
      <div className="quiz_container_score">
        <Scoreboard data={questions} score={score} />
      </div>
    ) : (
      <div className="quiz_container">
        <p>
          Question {currentQuestion + 1} / {questions.length}
        </p>
        <h2
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion].question,
          }}
        />
        <div className="quiz_button_container">
          <button
            type="button"
            onClick={() => handleAnswerOptionClick("True")}
            className="quiz_button quiz_button_true"
          >
            TRUE
          </button>
          <button
            type="button"
            onClick={() => handleAnswerOptionClick("False")}
            className="quiz_button quiz_button_false"
          >
            False
          </button>
        </div>
      </div>
    )
  ) : (
    <div className="quiz_container">
      <h2>Loading...</h2>
    </div>
  );
}

export default Quiz;
