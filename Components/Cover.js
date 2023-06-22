import React from "react";
import Navbar1 from "./navbars/Navbar1";
import Home1 from "./Home1";

function Cover({ children }) {
  return (
    <div>
      <div className="sticky-top">
        <Navbar1 />
      </div>
      <div>
        <Home1 />
      </div>

      {/* After Login */}
      <div>{children}</div>
    </div>
  );
}

export default Cover;
