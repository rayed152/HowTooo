import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./cssfiles/firstdiv.module.css";
import { Button } from "react-bootstrap";

function FirstDiv() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/cssfiles/firstdiv.css" />
      </Head>
      <div className={`d-flex flex-column flex-lg-row ${styles.maindiv}`}>
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center">
          <div className={styles.subdiv1}>
            <div style={{ marginLeft: "20%" }}>
              <h1>Want To Learn Coding For Free?</h1>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used
              </p>
              <Button>Check Out Our Courses</Button>
            </div>
          </div>
          <div
            className={`ms-lg-4 mt-lg-0 mt-4 ${styles.subdiv2} ${
              isHovered ? styles.hovered : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/hexagon.png"
              width={isHovered ? 550 : 500}
              height={isHovered ? 120 : 100}
            />
          </div>
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default FirstDiv;
