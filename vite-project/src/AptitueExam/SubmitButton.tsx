import React from "react";

const SubmitButton: React.FC = () => {
  const handleSubmit = () => {
    // Handle submit logic
    alert("Submitting...");
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitButton;
