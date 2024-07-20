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
  {
    name: "Programming- based on string",
    questionType: "Programming- based on string 2",
  },
  {
    name: "Programming- based on Arrays ",
    questionType: "Programming- based on Arrays  2",
  },
  {
    name: "Programming- based on data-structures",
    questionType: "Programming- based on data-structures 2",
  },
  {
    name: "Programming- based on logic-building",
    questionType: "Programming- based on logic-building 2",
  },
  {
    name: "Programming- based on SQL",
    questionType: "Programming- based on SQL 2",
  },
  {
    name: "Programming- based on Web-Development",
    questionType: "Programming- based on Web-Development 2",
  },
  {
    name: "Data-Structures(all-topics)",
    questionType: "Data-Structures(all-topics) 1",
  },
  {
    name: "Sentence-Correction",
    questionType: "Sentence-Correction 1",
  },
  { name: "Algorithms(all-topics)", questionType: "Algorithms(all-topic) 1" },
  {
    name: "Complexity Analysis(time,space)",
    questionType: "Complexity Analysis(time,space) 1",
  },
  { name: "SQL(all-topics)", questionType: "SQL(all-topics) 1" },
  {
    name: "Operating Systems(all-topics)",
    questionType: "Idioms-and-Phrases 1",
  },
  { name: "Networking(all-topics)", questionType: "Networking(all-topics) 1" },
  { name: "Frontend-Development", questionType: "Frontend-Development 1" },
  { name: "Backend-Development", questionType: "Backend-Development 1" },
  { name: "Full-Stack-Development", questionType: "Full-Stack-Development 1" },
  {
    name: "Cloud-Computing",
    questionType: "Cloud-Computing 1",
  },
  { name: "Security(all-topics)", questionType: "Security(all-topics) 1" },
  {
    name: "Miscellaneous(all-topics)",
    questionType: "Miscellaneous(all-topics) 1",
  },
  {
    name: "Big-Data-Technologies(all-topics)",
    questionType: "Big-Data-Technologies(all-topics) 1",
  },
  {
    name: "Artificial-Intelligence-and-Machine Learning(all-topics)",
    questionType: "Artificial-Intelligence-and-Machine Learning(all-topics) 1",
  },
  { name: "DevOps", questionType: "DevOps 1" },
  {
    name: "Microservices-Architecture",
    questionType: "Microservices-Architecture 1",
  },
  {
    name: "Internet-of-Things-(IoT)",
    questionType: "Internet-of-Things-(IoT) 1",
  },
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
          Technical
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
