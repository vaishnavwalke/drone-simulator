import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import InputComponent from "./components/InputComponent";
import ControlsComponent from "./components/ControlsComponent";

function App() {
  const [drones, setDrones] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const simulateDrones = (data) => {
    const coordinates = data.split("\n").map((line) => {
      const [lat, lng] = line.split(",").map(Number);
      return { lat, lng };
    });

    setDrones(coordinates);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div className="App">
      <h1>Drone Simulator</h1>
      <InputComponent onSimulate={simulateDrones} />
      <ControlsComponent onPause={handlePause} onResume={handleResume} />
      <MapComponent drones={drones} />
    </div>
  );
}

export default App;
