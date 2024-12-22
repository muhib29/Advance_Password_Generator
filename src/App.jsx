import React, { useState } from 'react';

const App = () => {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      answer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "H2"],
      answer: "H2O",
    },
  ];

  const [question, setQuestion] = useState("Quiz App");
  const [options, setOptions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleClick = () => {
    setQuizStarted(true);
    setSelectedOption(null); // Reset selected option for new question
    if (currentQuestionIndex < quizQuestions.length) {
      const selectQuestion = quizQuestions[currentQuestionIndex];
      setQuestion(selectQuestion.question);
      setOptions(selectQuestion.options);
    }
  };

  const checkAnswer = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestionIndex].answer) {
      if (currentQuestionIndex === quizQuestions.length - 1) {
        alert("Quiz Over!");
      } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          handleClick();
      }
    }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-blue-900 to-purple-900 text-white'>
        <div className='mb-12 text-center'>
          <h1 className='text-5xl font-extrabold mb-4'>{question}</h1>
        </div>
        <div className='flex flex-col gap-6'>
          {options.map((option, i) => (
            <div key={i}>
              <button
                onClick={() => checkAnswer(option)}
                className={`${
                  selectedOption === option
                    ? option === quizQuestions[currentQuestionIndex].answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-600"
                } w-[300px] p-4 rounded-lg text-start cursor-pointer transition-all duration-300 hover:bg-gray-500 hover:scale-105`}
              >
                {option}
              </button>
            </div>
          ))}
          <button onClick={handleClick} className='py-3 rounded-lg quiz-button1 bg-purple-600'>
            {quizStarted ? 'Next Question!' : "Start Quiz!"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
