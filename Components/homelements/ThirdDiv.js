import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

function ThirdDiv() {
  return (
    <div>
      <div
        className="d-flex flex-column flex-lg-row align-items-lg-center"
        style={{
          paddingTop: "5%",
          backgroundColor: "#EEEEEE",
          paddingBottom: "2%",
        }}
      >
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className="" style={{ marginLeft: "50px" }}>
          <Image src="/thirddiv.png" width={500} height={100} />
        </div>
        <div
          className="ms-lg-4 mt-lg-0"
          style={{ paddingLeft: "10%", color: "#505E86" }}
        >
          <h1 style={{ fontSize: "43px" }}>Can’t choose your career path?</h1>
          <p style={{ fontSize: "22px", fontWeight: "lighter" }}>
            No problem, you are just one click away, to find out what you are
            good at and what you need to do.
          </p>
          <div className="d-flex justify-content-end p-3">
            <Button style={{ backgroundColor: "#00ADB5", width: "213px" }}>
              Try Me
            </Button>
          </div>
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default ThirdDiv;
