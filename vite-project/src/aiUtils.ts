// aiUtils.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = localStorage.getItem("key");

const genAI = new GoogleGenerativeAI(`${apiKey}`);

export const getAIResponse = async (prompt: string): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return formatResponse(text);
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating response";
  }
};

const formatResponse = (response: string): string => {
  return response.replace(/\*\*/g, "").replace(/\*/g, "");
};
