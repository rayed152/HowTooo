import React from "react";
import SecondDiv from "../Components/homelements/SecondDiv";
import ThirdDiv from "../Components/homelements/ThirdDiv";
import FirstDiv from "../Components/homelements/FirstDiv";
import FourthDiv from "../Components/homelements/FourthDiv";
import FifthDiv from "../Components/homelements/FifthDiv";
import Footer from "../Components/homelements/Footer";

function Home1() {
  return (
    <div>
      {/* 1st div */}
      <FirstDiv />
      {/* Second Div */}
      <SecondDiv />
      {/* Third Div */}
      <ThirdDiv />
      {/* Fouth Div */}
      <FourthDiv />
      {/* Fifth Div */}
      <FifthDiv />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home1;
