import React from "react";
import Image from "next/image";
function Home1() {
  return (
    <div>
      {/* 1st div */}
      <div
        className="d-flex flex-column flex-lg-row"
        style={{
          paddingTop: "5%",
          paddingLeft: "5%",
          backgroundColor: "#EEEEEE",
          paddingBottom: "2%",
        }}
      >
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center">
          <div style={{ width: "40%", marginBottom: "20px" }}>
            <div style={{ marginLeft: "20%" }}>
              <h1 style={{ fontSize: "43px", color: "#505E86" }}>
                Want To Learn Coding For Free?
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "300",
                  color: "#505E86",
                }}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used
              </p>
            </div>
          </div>
          <div className="ms-lg-4 mt-lg-0 mt-4" style={{ paddingLeft: "20%" }}>
            <Image src="/hexagon.png" width={500} height={100} />
          </div>
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default Home1;
