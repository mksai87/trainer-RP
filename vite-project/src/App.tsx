import React, { useState, useEffect } from "react";
import "./styles.css";
import Nave from "./components/Nave";

function App() {
  const [apiKeyLength, setApiKeyLength] = useState(0);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const handleResize = () => {
      if (window.innerWidth <= 768 || isMobile) {
        // Adjust the width as needed
        alert(
          "This website is not optimized for mobile devices. if you stil want to vist, please use desktop mode or open it on laptop or pc"
        );
      }
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let userName = localStorage.getItem("key");
    while (!userName || userName.length < 35) {
      userName = window.prompt("Please enter your  Gemini API KEY ");
      if (userName) {
        if (userName.length >= 39) {
          localStorage.setItem("key", userName);
          window.location.reload();
        } else {
          alert("Error! check you API key ones  ");
        }
      } else {
        alert("Gemini API KEY is required to proceed.");
      }
    }

    const apiKey = "YOUR_API_KEY_HERE"; // Replace this with your actual API key
    setApiKeyLength(apiKey.length);
  }, []);

  return (
    <>
      <Nave />
    </>
  );
}

export default App;
