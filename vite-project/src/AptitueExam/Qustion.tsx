import React from "react";
interface QustionProps {
  questionType: string;
}

const Qustion: React.FC<QustionProps> = ({ questionType }) => {
  return (
    <div>
      <pre>
        <b>{questionType}</b>{" "}
      </pre>
    </div>
  );
};

export default Qustion;
