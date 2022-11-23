import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      onClick={() => setIsOn(() => !isOn)}
      style={{ backgroundColor: isOn ? "red" : "white" }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
