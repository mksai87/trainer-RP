import React from "react";
import { Link } from "react-router-dom";

// Define the props interface for the DynamicButton component
interface DynamicButtonProps {
  name: string;
  questionType: string;
}

// Function to calculate button width based on text length
const calculateWidth = (text: string) => {
  const baseWidth = 50; // Base width for the button
  const perCharWidth = 10; // Additional width per character
  return baseWidth + text.length * perCharWidth;
};

// DynamicButton component
const DynamicButton: React.FC<DynamicButtonProps> = ({
  name,
  questionType,
}) => {
  const buttonStyle = {
    width: `${calculateWidth(name)}px`,
  };

  return (
    <>
      <Link to={`/Apti?questionType=${questionType}`}>
        <button className="btn btn-secondary" style={buttonStyle}>
          {name}
        </button>
      </Link>
    </>
  );
};

// Define the button data array with explicit typing
const buttonData: DynamicButtonProps[] = [
  { name: "Self-intro", questionType: "Self-intro 3" },
  { name: "jest-a-minute(JAM) ", questionType: "jest-a-minute(JAM) 4" },
  { name: " Extempore", questionType: " Extempore 4" },
  { name: " story-telling", questionType: " story-telling 4" },
  { name: "paragraph-writing", questionType: "paragraph-writing 4" },
  { name: "Reading-Comprehension", questionType: "Reading-Comprehension 1" },
  { name: "Synonyms-and-Antonyms", questionType: "RSynonyms-and-Antonyms 1" },
  { name: "Sentence-Correction", questionType: "Sentence-Correction 1" },
  { name: "Para-Jumbles", questionType: "Para-Jumbles 1" },
  { name: "Fill-in-the-Blanks", questionType: "Fill-in-the-Blanks 1" },
  { name: "Spotting-Errors", questionType: "Spotting-Errors 1" },
  { name: "Idioms-and-Phrases", questionType: "Idioms-and-Phrases 1" },
  { name: "Cloze-Test", questionType: "Cloze-Test1" },
  { name: "Analogies", questionType: "Analogies 1" },
];

// HoriZantal component
const HoriZantal: React.FC = () => {
  return (
    <>
      <div className="dropdown align-baseline d-flex flex-row form-control border-success">
        <p
          className="badge text-bg-primary text-wrap"
          style={{ width: "20rem", fontSize: "2rem" }}
        >
          Verbal
        </p>
        <ul className="list-group list-group-horizontal position-relative overflow-auto w-75">
          {buttonData.map((btn, index) => (
            <li key={index} className="list-group-item">
              <DynamicButton name={btn.name} questionType={btn.questionType} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HoriZantal;
