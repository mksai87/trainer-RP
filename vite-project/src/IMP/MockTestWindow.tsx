import React, { useState, useEffect } from "react";
import { getAIResponse } from "../aiUtils";
import ChatBox from "../AptitueExam/ChatBox";

const MockTestWindow: React.FC = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [solution, setSolution] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const questionFiles = [
    "/questions/q1.txt",
    "/questions/q2.txt",
    "/questions/q3.txt",
    "/questions/q4.txt",
    "/questions/q5.txt",
    "/questions/q6.txt",
    "/questions/q7.txt",
    "/questions/q8.txt",
    "/questions/q9.txt",
    "/questions/q10.txt",
  ];

  const getRandomQuestionFile = () => {
    const randomIndex = Math.floor(Math.random() * questionFiles.length);
    return questionFiles[randomIndex];
  };

  const [numQuestions, setNumQuestions] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [questionsText, setQuestionsText] = useState<string>("");

  const fetchAIResponse = async (promptText: string) => {
    setIsLoading(true);
    const response = await getAIResponse(promptText);
    setSolution(response);
    setIsLoading(false);
  };

  const CorrectAnswers = (qut: string) => {
    const promptText = ` it cointain 15 mcqus and 2 program each mcq carry 1 mark and prgram carray 3 marks total 51 marks  by seeing my answers give me score out of 51,here are the qustions ${questionsText} and my answeres are ${qut}  first show me test result and   if any answer is wrong explaine me in step by stpes and aslso give some gap betwwn explination , go to nest line if one sentence is completed  `;
    fetchAIResponse(promptText);
  };

  useEffect(() => {
    const randomQuestionFile = getRandomQuestionFile();
    fetch(randomQuestionFile)
      .then((response) => response.text())
      .then((data) => {
        setQuestionsText(data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleNumQuestionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumQuestions(isNaN(value) ? 0 : value);
    setAnswers(new Array(isNaN(value) ? 0 : value).fill(""));
  };

  const handleOptionSelect = (questionIndex: number, option: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const combinedAnswers = answers.join("; ");

    CorrectAnswers(combinedAnswers + `; \n 16)${text} + \n 17)${text2}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.questionsContainer}>
          <pre>{questionsText}</pre>
        </div>
        <div style={styles.optionsContainer}>
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} style={styles.optionItem}>
              {["A", "B", "C", "D"].map((option) => (
                <button
                  key={option}
                  style={{
                    ...styles.button,
                    backgroundColor:
                      answers[index] === `${index + 1}) ${option}`
                        ? "skyblue"
                        : "initial",
                  }}
                  onClick={() =>
                    handleOptionSelect(index, `${index + 1}) ${option}`)
                  }
                >
                  {index + 1}) {option}
                </button>
              ))}
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
          <textarea
            rows={10}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your code here in any language"
            className="essay-textarea"
            style={{ backgroundColor: "#524b4b", color: "white" }}
          />

          <br />
          <textarea
            rows={10}
            cols={50}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter your code here in any language"
            className="essay-textarea"
            style={{ backgroundColor: "#524b4b", color: "white" }}
          />
        </div>
      </div>
      <div style={styles.submitContainer}>
        <button style={styles.submitButton} onClick={handleSubmit}>
          Submit Answers
        </button>
      </div>
      {isLoading ? (
        <div
          className="spinner-grow"
          style={{ width: " 3rem", height: " 3rem;" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ChatBox aiResponse={solution} />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    marginLeft: "10px",
    padding: "5px",
    fontSize: "16px",
    width: "60px",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
  },
  questionsContainer: {
    width: "50%",
    paddingRight: "10px",
    borderRight: "1px solid #ccc",
    backgroundColor: "#524b4b", // Added background color for left side
    color: "#fff", // Changed text color for better readability
  },
  optionsContainer: {
    width: "50%",
    paddingLeft: "10px",
  },
  optionItem: {
    marginBottom: "20px", // Adds space between sets of options
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
  },
  submitContainer: {
    width: "100%",
    textAlign: "center" as const,
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default MockTestWindow;
