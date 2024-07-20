import React, { useState } from "react";
interface Question {
  aptitude: string;
  verbal: string;
  technical: string;
  coding: string;
}

const DilyChal: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({});
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const question: Question = {
    aptitude: "What is 2+2?",
    verbal: "Define antonym.",
    technical: "Explain polymorphism in OOP.",
    coding: "Write a function to reverse a string.",
  };

  const handleOptionChange = (set: string, option: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [set]: option,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
  };

  const handleSubmit = () => {
    const combinedString = `Selected Options: ${JSON.stringify(
      selectedOptions
    )}, Textarea Value: ${textAreaValue}`;
    console.log(combinedString);
  };

  return (
    <div className="container">
      <div className="left-half">
        <p>
          sdfsidfsdifdsjkkjdsfjdfjksdfsidfsdifdsjkkjdsfjdfjk
          sdfsidfsdifdsjkkjdsfjdfjksdfsidfsdifdsjkkjdsfjdfjk
          sdfsidfsdifdsjkkjdsfjdfjksdfsidfsdifdsjkkjdsfjdfjk
          sdfsidfsdifdsjkkjdsfjdfjksdfsidfsdifdsjkkjdsfjdfjk
        </p>
      </div>
      <div className="right-half">
        <div className="options">
          <h4>Set 1</h4>
          <button onClick={() => handleOptionChange("set1", "Option 1")}>
            Option 1
          </button>
          <button onClick={() => handleOptionChange("set1", "Option 2")}>
            Option 2
          </button>
          <button onClick={() => handleOptionChange("set1", "Option 3")}>
            Option 3
          </button>
          <button onClick={() => handleOptionChange("set1", "Option 4")}>
            Option 4
          </button>
        </div>
        <div className="options">
          <h4>Set 2</h4>
          <button onClick={() => handleOptionChange("set2", "Option 1")}>
            Option 1
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 2")}>
            Option 2
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 3")}>
            Option 3
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 4")}>
            Option 4
          </button>
        </div>
        <div className="options">
          <h4>Set 2</h4>
          <button onClick={() => handleOptionChange("set2", "Option 1")}>
            Option 1
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 2")}>
            Option 2
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 3")}>
            Option 3
          </button>
          <button onClick={() => handleOptionChange("set2", "Option 4")}>
            Option 4
          </button>
        </div>
        <textarea
          value={textAreaValue}
          onChange={handleTextAreaChange}
          placeholder="Enter your answer here..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DilyChal;
