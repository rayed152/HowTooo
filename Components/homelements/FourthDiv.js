import React from "react";
import { Button, Form } from "react-bootstrap";
import Image from "next/image";
import styles from "./cssfiles/fourthdiv.module.css";

function FourthDiv() {
  return (
    <div className={`${styles.maindiv}`}>
      <h1 className="text-center mt-5">
        Need Help On Your
        <br /> projects?
      </h1>
      <div className={`d-flex flex-column flex-lg-row align-items-lg-center`}>
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className={`${styles.subdiv1}`}>
          <h2 className="text-center pb-3 color-#505E86">Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mb-2">Email Address</Form.Label>
              <Form.Control
                style={{ width: "350px" }}
                type="email"
                placeholder="Enter Your Email!"
                className="mb-3"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea">
              <Form.Label className="mb-2">What can we do for you?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="How Can We Help You?"
                className="mb-3"
              />
            </Form.Group>
            <Button>Send</Button>
          </Form>
        </div>
        <div className={`ms-lg-4 mt-lg-0 ${styles.subdiv2}`}>
          <Image src="/div4.png" width={600} height={200} />
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default FourthDiv;
