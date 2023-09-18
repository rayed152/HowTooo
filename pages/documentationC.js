import React, { useState } from "react";
import DocCard from "./documentations/DocCard";
import Navbar1 from "@/Components/navbars/Navbar1";
import SimpleFooter from "@/Components/SimpleFooter";

function DocumentationC() {
  const gradientStyles = {
    background: "linear-gradient(90deg, #c1bfe6 0%, #e3e3eb 46%, #85b3bd 100%)",
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ ...gradientStyles }}>
      <Navbar1 />
      <div className=" flex-1 flex justify-center items-center">
        <div>
          <h1 className="text-center underline" style={{ fontSize: "30px" }}>
            Documentations Of Computer Science
          </h1>

          <div className="mb-4 mx-auto" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              placeholder="Search documentations"
              value={searchTerm}
              onChange={handleSearchChange}
              className="form-control"
            />
          </div>

          <DocCard searchTerm={searchTerm} />
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default DocumentationC;
