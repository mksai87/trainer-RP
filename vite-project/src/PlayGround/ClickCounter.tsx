import React, { useState, useEffect } from "react";

const ClickCounter: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  // Retrieve the click count from localStorage when the component mounts
  useEffect(() => {
    const savedClickCount = localStorage.getItem("clickCount");
    if (savedClickCount) {
      setClickCount(parseInt(savedClickCount, 10));
    }
  }, []);

  // Update click count and save it to localStorage
  const handleClick = () => {
    const newClickCount = clickCount + 1;

    localStorage.setItem("clickCount", newClickCount.toString());
    setClickCount(newClickCount);
  };

  return (
    <div>
      <p>Number of clicks: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ClickCounter;
