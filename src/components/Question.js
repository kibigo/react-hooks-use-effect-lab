import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  const MinusOne = () => {
    if(timeRemaining > 1){
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
    }else{
      setTimeRemaining(0)
      onAnswered(false)
    }
  }

  useEffect (() => {
    const timeOut = setTimeout(MinusOne, 1000);

    return () => {
      clearTimeout(timeOut)
    }
    
  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
