import React from "react";

const ControlsComponent = ({ onPause, onResume }) => {
  return (
    <div>
      <button onClick={onPause}>Pause</button>
      <button onClick={onResume}>Resume</button>
    </div>
  );
};

export default ControlsComponent;
