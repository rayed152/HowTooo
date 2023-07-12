import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./cssfiles/fifthdiv.module.css";

function FifthDiv() {
  return (
    <div className={`${styles.maindiv}`}>
      <div className={`d-flex flex-column flex-lg-row align-items-lg-center`}>
        <div className="col-lg-0.5 d-lg-block d-none"></div>
        <div className={`${styles.subdiv1} order-lg-1 order-sm-2`}>
          <h1>Well, well, well!</h1>
          <p>
            If you've managed to reach this point, you must have a tad bit of
            curiosity bubbling inside you. Why not go ahead, sign up, and take
            that first glorious step towards your epic goal? Trust me, it'll be
            an adventure worth embarking on!
          </p>
          <Button>Sign Up</Button>
        </div>
        <div className={`${styles.subdiv2}  order-lg-2 order-sm-1`}>
          <Image src="/div5.png" width={2000} height={200} />
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default FifthDiv;
