import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HintsAndTricks from "../AptitueExam/HintsAndTricks";
import Qustion from "../AptitueExam/Qustion";
import ChatBox from "../AptitueExam/ChatBox";
import { getAIResponse } from "../aiUtils";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

const Apti: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [solution, setSolution] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [title, setTitle] = useState("");
  const location = useLocation();

  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [quse, Setque] = useState("");
  const [company, setcompany] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [resum, setResum] = useState(" ");
  const [interviewAnswer, setinterviewAnswer] = useState(" ");
  const [isOn, setOn] = useState(true);
  const [TotelCount, setTotalCount] = useState<number>(0);
  const [AnswerCount, setAnswerCount] = useState<number>(0);
  const countIncremented = useRef(false);
  const [aiResponses, setAiResponses] = useState<string[]>([]);

  const [QustionList, setQustionList] = useState(" ");

  let i = 0;

  useEffect(() => {
    const savedClickCount = localStorage.getItem("ans");
    if (savedClickCount) {
      setAnswerCount(parseInt(savedClickCount, 10));
    }

    if (!countIncremented.current) {
      const savedClickCount = localStorage.getItem("total");
      if (savedClickCount) {
        setTotalCount(parseInt(savedClickCount, 10));
      }

      const newClickCount =
        (savedClickCount ? parseInt(savedClickCount, 10) : 0) + 1;
      setTotalCount(newClickCount); // Update state first
      localStorage.setItem("total", newClickCount.toString()); // Update the correct key in localStorage
      countIncremented.current = true; // Mark as incremented
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const questionType = params.get("questionType");

    i += 1;
    if (i == 1) {
      if (questionType) {
        const promptText = getPromptText(questionType);

        fetchAIResponse(promptText);
        setTitle(questionType);
        setPrompt(promptText);
      }
    }
  }, [location]);

  useEffect(() => {
    if (title.endsWith("3") && !isLoading && aiResponse) {
      handleSpeakk(aiResponse);
    }
  }, [title, isLoading, aiResponse]);

  const handleSpeakk = (text: string) => {
    if ("speechSynthesis" in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    };
  }, [isSpeaking]);

  const getPromptText = (questionType: string): string => {
    Setque(questionType);
    if (company == null) {
      setcompany("company");
    }
    if (questionType.endsWith("1")) {
      return `Assume you are an employee at ${company} responsible for conducting exams to recruit freshers. Generate one multiple-choice question related to ${questionType}  with options[only 4 optiins],${QustionList} this are the prious qustion asked dont repect qustions . Only return the question with options one by one.
`;
    } else if (questionType.endsWith("2")) {
      return `Write a program qustion  related to ${questionType.slice(
        0,
        -1
      )} and provide some example inputs and outputs so that I can understand the logic , write.\n1. Description of the task...\n...\n2. Additional information  ... dont write any type of code in qustion  \nExample Inputs:\n...\nExample Outputs:\n... ${QustionList} this are the prious program asked dont repect qustions. Only return the question and make sure example inputs and outputs are present  `;
    } else if (questionType.endsWith("3")) {
      if (isOn == true) {
        return `As an interviewer, introduce yourself with a random name and company name, then ask the candidate to introduce themselves. For example: "Hello, I'm [Your Name] from [Your Company]. Could you please tell me about yourself?`;
      } else {
        return `imagen that you are an interviewer first give me the feed back based on this the qustion asked ${Qustion}  the answer i gavied ${text}  after giving feed back ,  Read the provided resume ${resum} and  asking one qustion based on  interview-based questions based on the resume or technical questions based on the resume or other interview-base qustions like "why should i hire you" etc,or technical questions. this are the privious qustion asked ${QustionList}Ensure no questions are repeated. dont say ## Interview Question:, qustion type or any thing extra  Only return the question `;
      }
    } else if (questionType.endsWith("4")) {
      return `give me only one Verbal round qustion related to  ${questionType.slice(
        0,
        -1
      )} this topic   so that i can  prepare for a company drive exam  by practicing it. ${QustionList} this are the prious qustion asked dont repect qustions. Only return the question dont say any things extra `;
    } else {
      return "";
    }
  };

  const fetchAIResponse = async (promptText: string) => {
    setIsLoading(true);
    const response = await getAIResponse(promptText);

    setAiResponses((prevResponses) => {
      const newResponses = [...prevResponses, response];
      if (newResponses.length > 5) {
        newResponses.shift(); // Remove the oldest response if the array has more than 3 responses
      }
      const combinedString = newResponses.join("||||");
      setQustionList(combinedString);
      return newResponses;
    });

    setAiResponse(response);
    setIsLoading(false);
  };

  const fetchSolution = async (answer: string) => {
    setIsLoadingAI(true);
    let promptText = "";
    if (quse.endsWith("1")) {
      promptText = `The multiple choice question is ${aiResponse} and my answer is ${answer}. If the answer is correct, simply say "correct answer." If it is wrong, say "wrong answer" and explain the solution. when ever sentence is completed  go to next line  `;
    } else if (quse.endsWith("2")) {
      promptText = `The given program is ${aiResponse} and what im writtened  is ${answer}. If the answer is correct, simply say "correct answer." If it is wrong, say "wrong answer" and explain the solution. and errors in answer when ever sentence is completed  go to next line  `;
    } else if (quse.endsWith("4")) {
      promptText = `The given topic is ${aiResponse} and what im writtened  is ${answer}. based on the answer give a rating between 1 to 10 and give tips to improve it when ever sentence is completed  go to next line  `;
    } else if (quse.endsWith("3")) {
      promptText = `The asked  qustion  is ${aiResponse} and what im said  ${answer}. based on the answer give a rating between 1 to 10 and give tips to improve it when ever sentence is completed  go to next line  `;
    }
    const response = await getAIResponse(promptText);
    setSolution(response);

    setIsLoadingAI(false);
    if (response.toLowerCase().startsWith("c")) {
      const newClickCount = AnswerCount + 1;
      setAnswerCount(newClickCount);
      localStorage.setItem("ans", newClickCount.toString());
    }
  };
  const compaileer = async (pro: string) => {
    let prompt = `Act like a program compiler and show the errors present in the program: ${pro}. Do not provide any solutions, just display the errors as a compiler would`;
    setIsLoadingAI(true);
    const response = await getAIResponse(prompt);
    setSolution(response);

    setIsLoadingAI(false);
  };

  const nextQuestion = () => {
    // Update click count
    const newClickCount = TotelCount + 1;
    setTotalCount(newClickCount);
    localStorage.setItem("total", newClickCount.toString());

    i = 0;
    if (title) {
      setSolution("");
      const promptText = getPromptText(title);
      setPrompt(promptText);
      fetchAIResponse(promptText);
    }
  };

  const renderQuestionComponent = () => {
    if (title.endsWith("1")) {
      return (
        <div className="question-container">
          <Qustion questionType={aiResponse} />
          <div className="options-container">
            <button
              className="btn btn-primary"
              onClick={() => fetchSolution("A")}
            >
              Answer (A)
            </button>
            <button
              className="btn btn-primary"
              onClick={() => fetchSolution("B")}
            >
              Answer (B)
            </button>
            <button
              className="btn btn-primary"
              onClick={() => fetchSolution("C")}
            >
              Answer (C)
            </button>
            <button
              className="btn btn-primary"
              onClick={() => fetchSolution("D")}
            >
              Answer (D)
            </button>
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={nextQuestion}
            >
              NEXT
            </button>
          </div>
        </div>
      );
    } else if (title.endsWith("2")) {
      return (
        <div className="question-container">
          <Qustion questionType={aiResponse} />
          <textarea
            rows={10}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="essay-textarea"
            style={{ backgroundColor: "#524b4b", color: "white" }}
          />
          <button
            className="btn btn-secondary"
            onClick={() => compaileer(text)}
          >
            RUN
          </button>
          <button
            className="btn btn-primary"
            onClick={() => fetchSolution(text)}
          >
            Submit
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={toggleListening}
          >
            {isListening ? "Stop Listening" : "Start Listening"}
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={nextQuestion}
          >
            NEXT
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={handleSpeak}
          >
            {isSpeaking ? "Stop Speaking" : "Speak"}
          </button>
        </div>
      );
    } else if (title.endsWith("3")) {
      return (
        <div className="question-container">
          <Qustion questionType={aiResponse} />

          <textarea
            rows={10}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="essay-textarea"
            style={{ backgroundColor: "#524b4b", color: "white" }}
          />

          <button
            className="btn btn-primary"
            onClick={() => {
              if (isOn == true) {
                setResum(text);
              } else {
                setinterviewAnswer(text);
              }
              setOn(false);
              fetchSolution(text);
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={toggleListening}
          >
            {isListening ? "Stop Listening" : "Start Listening"}
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={nextQuestion}
          >
            NEXT
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={handleSpeak}
          >
            {isSpeaking ? "Stop Speaking" : "Speak"}
          </button>
        </div>
      );
    } else if (title.endsWith("4")) {
      return (
        <div className="question-container">
          <Qustion questionType={aiResponse} />
          <textarea
            rows={10}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="essay-textarea"
            style={{ backgroundColor: "#524b4b", color: "white" }}
          />
          <button
            className="btn btn-primary"
            onClick={() => fetchSolution(text)}
          >
            Submit
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={toggleListening}
          >
            {isListening ? "Stop Listening" : "Start Listening"}
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={nextQuestion}
          >
            NEXT
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={handleSpeak}
          >
            {isSpeaking ? "Stop Speaking" : "Speak"}
          </button>
        </div>
      );
    } else {
      return <div>No question type specified or invalid type.</div>;
    }
  };

  const handleSelectcompany = (value: string) => {
    setcompany(value);
    console.log(value);
  };

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setText(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionEvent) => {
      console.error("Speech recognition error:", event);
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const toggleListening = () => {
    if (!isListening) {
      recognition.start();
      setIsListening(true);
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(aiResponse);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="left-half">
          <HintsAndTricks Titel={title} />
        </div>
        <div className="right-half">
          <div className="top-right">
            {isLoading ? (
              <div
                className="spinner-grow"
                style={{ width: " 3rem", height: " 3rem;" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              renderQuestionComponent()
            )}
            {isLoadingAI ? (
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
          <div style={{ marginTop: "0px" }}></div>
        </div>
      </div>
    </>
  );
};

export default Apti;
