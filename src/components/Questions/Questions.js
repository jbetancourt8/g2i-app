import React from "react";

const Questions = ({ data: { question, correct_answer } }) => {
  console.log(question);
  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default Questions;
