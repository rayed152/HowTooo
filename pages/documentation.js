import React from "react";
import DocCard from "./documentations/DocCard";
import Navbar1 from "@/Components/navbars/Navbar1";

function documentation() {
  return (
    <div>
      <Navbar1 />
      <h1 className="text-center mt-6 underline" style={{ fontSize: "30px" }}>
        Documentations Of Computer Science
      </h1>
      <div className="d-flex  flex-lg-row">
        <div className="col-lg-2 d-lg-block d-none"></div>
        <DocCard />
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default documentation;
