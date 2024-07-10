import React, { useState } from 'react';
import Question from './pages/Quesion';
import Result from './pages/Result';
import "./App.css"

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Madrid', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Lisbon', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    // Add more questions as needed
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='app'>
            {showScore ? (
                <Result score={score} totalQuestions={questions.length} />
            ) : (
                <Question
                    question={questions[currentQuestion]}
                    onAnswerClick={handleAnswerButtonClick}
                />
            )}
        </div>
    );
}

export default App;
