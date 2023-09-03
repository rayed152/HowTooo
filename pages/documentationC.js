import React from "react";
import DocCard from "./documentations/DocCard";
import Navbar1 from "@/Components/navbars/Navbar1";
import SimpleFooter from "@/Components/SimpleFooter";

function documentationC() {
  const gradientStyles = {
    background: "linear-gradient(90deg, #c1bfe6 0%, #e3e3eb 46%, #85b3bd 100%)",
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ ...gradientStyles }}>
      <Navbar1 />
      <div className=" flex-1 flex justify-center items-center">
        <div>
          <h1 className="text-center underline" style={{ fontSize: "30px" }}>
            Documentations Of Computer Science
          </h1>
          <DocCard />
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default documentationC;
