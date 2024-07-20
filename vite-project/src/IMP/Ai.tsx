import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCOv3D4jjJ52s8Fv6RGNgefiM_I7nkBncw");

interface AiProps {
  promptt: string;
}

const Ai: React.FC<AiProps> = ({ promptt }) => {
  const [responseText, setResponseText] = useState("");

  const onClickHandler = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const result = await model.generateContent(promptt);
      const response = await result.response;
      const text = await response.text();
      setResponseText(text);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div>
      <>{onClickHandler}</>
      <div>{responseText}</div>
    </div>
  );
};

export default Ai;
