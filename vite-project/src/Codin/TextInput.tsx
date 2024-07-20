import React, { useState } from "react";

const TextInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleChange}
        rows={10}
        cols={100}
        placeholder="Enter your code or essay here..."
      />
    </div>
  );
};

export default TextInput;
