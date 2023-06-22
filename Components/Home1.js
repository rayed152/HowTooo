import React from "react";
import SecondDiv from "./homelements/SecondDiv";
import ThirdDiv from "./homelements/ThirdDiv";
import FirstDiv from "./homelements/FirstDiv";

function Home1() {
  return (
    <div>
      {/* 1st div */}
      <FirstDiv />
      {/* Second Div */}
      <SecondDiv />
      {/* Third Div */}
      <ThirdDiv />
    </div>
  );
}

export default Home1;
