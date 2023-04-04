import React, { useState } from "react";

const TrafficLights = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <div
        className={`red  ${selected === "red" ? "light_on" : ""}`}
        onClick={() => setSelected("red")}
      ></div>
      <div
        className={`yellow  ${selected === "yellow" ? "light_on" : ""}`}
        onClick={() => setSelected("yellow")}
      ></div>
      <div
        className={`green ${selected === "green" ? "light_on" : ""}`}
        onClick={() => setSelected("green")}
      ></div>
    </div>
  );
};

export default TrafficLights;
