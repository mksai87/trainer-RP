import React, { useState } from "react";

const MockInterview: React.FC = () => {
  const [answer, setAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submit logic
    alert("Answer submitted");
  };

  const handleHint = () => {
    // Handle hint logic
    alert("Showing hint");
  };

  return (
    <div className="mock-interview-container">
      <h2 className="title">Mock Interview</h2>
      <div className="question-panel">
        <p className="question">
          <b>Describe your experience with React and TypeScript.</b>
        </p>
      </div>
      <div className="answer-section">
        <textarea
          value={answer}
          onChange={handleChange}
          className="text-input"
          placeholder="Enter your answer here..."
        />
        <button onClick={handleHint} className="hint-button">
          Hint
        </button>
      </div>
      <div className="submit-section">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="suggestion-section">
        <h3>Suggestions</h3>
        <p>
          Make sure to structure your answer clearly and provide relevant
          examples.
        </p>
      </div>
    </div>
  );
};

export default MockInterview;
