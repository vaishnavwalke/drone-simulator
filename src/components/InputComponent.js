import React, { useState } from "react";

const InputComponent = ({ onSimulate }) => {
  const [data, setData] = useState("");

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Enter latitude and longitude data..."
        value={data}
        onChange={handleInputChange}
        rows={10}
        cols={50}
      />
      <button onClick={() => onSimulate(data)}>Simulate</button>
    </div>
  );
};

export default InputComponent;
