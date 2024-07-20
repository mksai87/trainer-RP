import React, { useState, useEffect } from "react";
import { getAIResponse } from "../aiUtils";
interface HintsAndTricksProps {
  Titel: string;
}

const HintsAndTricks: React.FC<HintsAndTricksProps> = ({ Titel }) => {
  const [hintText, setHintText] = useState<string>("");

  useEffect(() => {
    const fetchHintText = async () => {
      const error = await getAIResponse(
        `tips and trcks to solve ${Titel.toLowerCase()} topic,give tips tricks or formulas to answer or solve it `
      );
      setHintText(error);
    };

    fetchHintText();
  }, [Titel]);

  return (
    <div>
      <h2 style={{ color: "white" }}>Hints and Tricks for {Titel}</h2>
      <textarea
        rows={20}
        cols={50}
        value={hintText}
        readOnly
        className="essay-textarea"
        style={{
          backgroundColor: "#524b4b",
          color: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default HintsAndTricks;
