import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  questionType: string;
}

const Btn: React.FC<Props> = ({ name, questionType }) => {
  return (
    <Link to={`/Apti?questionType=${questionType}`}>
      <button type="button" className="btn btn-secondary">
        {name}
      </button>
    </Link>
  );
};

export default Btn;
