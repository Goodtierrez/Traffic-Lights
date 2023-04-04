import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLights from "./TrafficLights";

//create your first component
const Home = () => {
  return (
    <div>
      <TrafficLights />
    </div>
  );
};

export default Home;
