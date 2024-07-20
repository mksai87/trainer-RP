import React, { useState, useEffect, useRef } from "react";
import { getAIResponse } from "./aiUtils";

const GroupDecisionPage: React.FC = () => {
  const [counter, setCounter] = useState<number>(10);
  const [selectedBox, setSelectedBox] = useState<string>("");
  const [raiseHand, setRaiseHand] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [displayMessage, setDisplayMessage] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [N, setN] = useState("");
  const [boxes, setBoxes] = useState<{ name: string; selected: boolean }[]>([
    { name: "Balayya", selected: false },
    { name: "Alex", selected: false },
    { name: "Tom", selected: false },
    { name: "Sam", selected: false },
  ]);

  let i = 0;

  useEffect(() => {
    let j = 0;
    j += 1;
    if (j == 1) {
      const fetchInitialQuestion = async () => {
        const response = await getAIResponse(
          "give me one group discussion topic to practice. fetch me a random question and don't repeat it, don't say anything extra."
        );
        setQuestion(response);
      };

      fetchInitialQuestion();
      setName();
    }
  }, []);

  const setName = () => {
    const newQuestion = prompt("Please enter your Name.");
    if (newQuestion) {
      setN(newQuestion);
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!raiseHand && !isSpeaking && !isFetching) {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            intervalRef.current = null;

            const fetchAIResponse = async () => {
              setIsFetching(true);
              const randomIndex = Math.floor(Math.random() * boxes.length);
              const randomBox = boxes[randomIndex];

              setSelectedBox(randomBox.name);
              if (!randomBox.selected) {
                let j = 0;
                j += 1;
                if (j === 1) {
                  const response = await getAIResponse(
                    `Imagine your name is ${randomBox.name} and you are participating in a group discussion on the topic: ${question}. Before you start, introduce yourself with your name. tell your presenting. Please provide a concise, human-like response without repeating the question or adding unnecessary information.`
                  );
                  randomBox.selected = true;
                  setBoxes((prevBoxes) =>
                    prevBoxes.map((box, index) =>
                      index === randomIndex ? { ...box, selected: true } : box
                    )
                  );
                  const responseText = ` ${response}`;
                  setDisplayMessage(
                    (prevMessage) =>
                      `${prevMessage} \n ${randomBox.name} =>   ${responseText}`
                  );
                  handleSpeak(responseText);
                  setIsFetching(false);
                } else if (i != 1 && randomBox.selected == false) {
                  const response = await getAIResponse(
                    `"You are in a group discussion on the topic: ${question}. Here is the previous discussion: ${displayMessage}. Now, provide your response either by supporting or opposing the points made by previous group members  by addressing their name, or by presenting a new perspective. Introduce yourself as ${randomBox.name}. Please give a concise, human-like answer without repeating the question or adding unnecessary information`
                  );
                  randomBox.selected = true;
                  setBoxes((prevBoxes) =>
                    prevBoxes.map((box, index) =>
                      index === randomIndex ? { ...box, selected: true } : box
                    )
                  );
                  const responseText = ` ${response}`;
                  setDisplayMessage(
                    (prevMessage) =>
                      `${prevMessage}  \n ${randomBox.name} =>   ${responseText}`
                  );
                  handleSpeak(responseText);
                  setIsFetching(false);
                }
              } else {
                const response = await getAIResponse(
                  ` You are in a group discussion and your name is ${randomBox.name} on the topic: ${question}. Here is the previous discussion: ${displayMessage}. Now, write your response by either supporting or opposing the points made by previous group members by addressing their name if the name you want to address is same as your ${randomBox.name} just dont supporting or opposing him ; add a new topic reated to qustion  , or presenting a new perspective dont say your name  . Please provide a concise, human-like answer without repeating the question or adding unnecessary information`
                );

                const responseText = ` ${response}`;
                setDisplayMessage(
                  (prevMessage) =>
                    `${prevMessage}\n ${randomBox.name} =>   ${responseText}`
                );
                handleSpeak(responseText);
                setIsFetching(false);
              }
              setCounter(10); // Reset the counter here
            };
            i += 1;
            if (i === 1) {
              fetchAIResponse();
            }

            return 10;
          }
          return prevCounter - 1;
        });
      }, 1000);
    } else {
      i = 0;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [raiseHand, isSpeaking, isFetching, boxes, question]);

  const handleRaiseHand = () => {
    setRaiseHand(true);
  };

  const handleStopTalking = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSubmit = () => {
    setDisplayMessage(
      (prevMessage) => `${prevMessage}\n ${N} =>   ${message} `
    );
    setMessage("");
    setRaiseHand(false);
    setCounter(10); // Restart the counter
  };

  let recognition: any = null;

  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
  }

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setMessage(transcript);
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

  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    };
  }, [isSpeaking]);

  const handleSpeak = (text: string) => {
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

  const changeQuestion = () => {
    const newQuestion = prompt("Enter the new group discussion question:");
    if (newQuestion) {
      setQuestion(newQuestion);
    }
  };

  return (
    <div className="group-decision-container">
      <div className="left-container">
        <textarea
          className="display-area"
          value={displayMessage}
          readOnly
          rows={15}
        />
        {raiseHand ? (
          <>
            <textarea
              className="input-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="start-listening-button"
              onClick={toggleListening}
            >
              {isListening ? "Stop Listening" : "Start Listening"}
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="right-container">
        <div className="question-section">
          <h2>Mock Group Discussion</h2>
          <b>
            <p>{question}</p>
          </b>
          <button className="change-question-button" onClick={changeQuestion}>
            Change Question
          </button>
        </div>
        <div className="boxes-container">
          {boxes.map((box) => (
            <div
              key={box.name}
              className={`box ${box.name === selectedBox ? "selected" : ""}`}
            >
              {box.name}
            </div>
          ))}
        </div>
        <div className="counter-container">
          <span className="counter">{counter}</span>
          <button className="raise-hand-button" onClick={handleRaiseHand}>
            Raise Hand
          </button>
          <button className="stop-talking-button" onClick={handleStopTalking}>
            Stop Talking
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDecisionPage;
