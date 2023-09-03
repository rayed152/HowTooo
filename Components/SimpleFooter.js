import React from "react";

function SimpleFooter() {
  return (
    <div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024{" "}
        <a className="text-dark" href="#">
          HowTooo.com
        </a>
      </div>
    </div>
  );
}

export default SimpleFooter;
