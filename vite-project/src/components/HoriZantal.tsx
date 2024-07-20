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
  { name: "Divisibility rules", questionType: "Divisibility rules 1" },
  { name: "LCM and-HCF", questionType: "LCM-and-HCF 1" },
  {
    name: "Rational-and-Irrational-numbers",
    questionType: "Rational-and-Irrational-numbers 1",
  },
  { name: "Increase-and-decrease", questionType: "Increase-and-decrease 1" },
  { name: "Profit-and-loss", questionType: "Profit-and-loss 1" },
  { name: "Discount", questionType: "Discount 1" },
  {
    name: "Direct-and-inverse-proportion",
    questionType: "Direct-and-inverse-proportion 1",
  },
  {
    name: "Mixtures-and-alligations",
    questionType: "Mixtures-and-alligations 1",
  },
  { name: "Averages", questionType: "Averages 1" },
  { name: "Ages", questionType: "Ages 1" },
  { name: "Problems-on-ages", questionType: "Problems-on-ages 1" },
  {
    name: "Simple-and-Compound-Interest",
    questionType: "Simple-and-Compound-Interest 1",
  },
  { name: "Time-and-Work", questionType: "Time-and-Work 1" },
  { name: "Work-and-wages", questionType: "Work-and-wages 1" },
  { name: "Pipes-and-cisterns", questionType: "Pipes-and-cisterns 1" },
  {
    name: "Speed-Time-and-Distance",
    questionType: "Speed-Time-and-Distance 1",
  },
  { name: "Relative-speed", questionType: "Relative-speed 1" },
  { name: "Boats-and-streams", questionType: "Boats-and-streams 1" },
  { name: "Trains", questionType: "Trains 1" },
  { name: "Linear-equations", questionType: "Linear-equations 1" },
  { name: "Quadratic-equationss", questionType: "Quadratic-equations 1" },
  { name: "Polynomials", questionType: "Polynomials 1" },
  { name: "Lines-and-angles", questionType: "Lines-and-angles 1" },
  {
    name: "Triangles-(properties, congruence, similarity)",
    questionType: "Triangles-(properties, congruence, similarity) 1",
  },
  {
    name: "Circles-(chords, tangents)",
    questionType: "Circles-(chords, tangents) 1",
  },
  { name: "Polygons", questionType: "Polygons 1" },
  { name: "Coordinate-geometry", questionType: "Coordinate-geometry 1" },
  {
    name: "Area-and-perimeter-(2D shapes)",
    questionType: "Area-and-perimeter-(2D shapes)",
  },
  {
    name: "Surface-area-and-volume-(3D shapes)",
    questionType: "Surface-area-and-volume-(3D shapes) 1",
  },
  {
    name: "Basic-ratios-(sine, cosine, tangent, etc.)",
    questionType: "Basic-ratios-(sine, cosine, tangent, etc.) 1",
  },
  { name: "Heights-and-distances", questionType: "Heights-and-distances 1" },
  {
    name: "Permutation and Combination",
    questionType: "Permutation and Combination 1",
  },
  { name: "Probability", questionType: "Probability 1" },
  {
    name: "Arithmetic-progression (AP)",
    questionType: "Arithmetic-progression (AP) 1",
  },
  {
    name: "Geometric-progression-(GP)",
    questionType: "Geometric-progression-(GP) 1",
  },
  {
    name: "Harmonic-progression-(HP)",
    questionType: "Harmonic-progression-(HP) 1",
  },
  { name: "Logarithms", questionType: "Logarithms 1" },
  { name: "Set-Theory", questionType: "Set-Theory 1" },
  { name: "Number-series", questionType: "Number-series 1" },
  { name: "Alphabet-series", questionType: "Alphabet-series 1" },
  { name: "Mixed-series", questionType: "Mixed-series 1" },
  { name: "Word-analogies", questionType: "Word-analogies 1" },
  { name: "Number-analogies", questionType: "Number-analogies 1" },
  { name: "Odd-one-out", questionType: "Odd-one-out 1" },
  { name: "Directions", questionType: "Directions 1" },
  { name: "Coding-Decoding", questionType: "Coding-Decoding 1" },
  { name: "Seating-arrangement", questionType: "Seating-arrangement 1" },
  { name: "Tabulation", questionType: "Tabulation 1" },
  { name: "Floor-puzzles", questionType: "Floor-puzzles 1" },
  {
    name: "Logical-Sequence-of-Words",
    questionType: "Logical-Sequence-of-Words 1",
  },
  {
    name: "Statement-and-Assumptions(Conclusions,Arguments)",
    questionType: "Statement-and-Assumptions(Conclusions,Arguments) 1",
  },
  { name: "Data Sufficiency", questionType: "Data Sufficiency 1" },
  { name: "Calendars", questionType: "Calendars 1" },
  { name: "Clocks", questionType: "Clocks 1" },
  { name: "Cubes-and-Dice", questionType: "Cubes-and-Dice 1" },
  { name: "Decision-Making", questionType: "Decision-Making 1" },
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
          Aptitue
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
