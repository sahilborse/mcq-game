import React from 'react';

function Question({ question, onAnswerClick }) {
    return (
        <div>
            <h2>{question.questionText}</h2>
            <div>
                {question.answerOptions.map((answerOption, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswerClick(answerOption.isCorrect)}
                    >
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
