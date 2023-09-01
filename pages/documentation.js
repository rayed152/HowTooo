import React from "react";
import DocCard from "./documentations/DocCard";
import Navbar1 from "@/Components/navbars/Navbar1";

function documentation() {
  return (
    <div>
      <Navbar1 />
      <h1>Documentations Of Computer Science</h1>
      <DocCard />
    </div>
  );
}

export default documentation;
