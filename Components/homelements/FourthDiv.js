import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Image from "next/image";
import styles from "./cssfiles/fourthdiv.module.css";
import axios from "axios";

function FourthDiv() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  async function createProblemStatement(ev) {
    ev.preventDefault();
    const data = { email, topic, description };
    await axios.post("/api/problem", data);
  }

  return (
    <div className={`${styles.maindiv}`} id="fourthdiv">
      <h1 className="text-center mt-5">
        Need Help On Your
        <br /> projects?
      </h1>
      <div className={`d-flex flex-column flex-lg-row align-items-lg-center`}>
        <div className="col-lg-.5 d-lg-block d-none"></div>
        <div className={`${styles.subdiv1} order-lg-1 order-sm-2`}>
          <h2 className="text-center pb-3 color-#505E86">Contact Us</h2>
          <Form onSubmit={createProblemStatement}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mb-2">Email</Form.Label>
              <Form.Control
                style={{ width: "350px" }}
                type="email"
                placeholder="Enter Your Email!"
                className="mb-3"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="mb-2">Topic</Form.Label>
              <Form.Control
                style={{ width: "350px" }}
                type="text"
                placeholder="Type Your Topc"
                className="mb-3"
                value={topic}
                onChange={(ev) => setTopic(ev.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea">
              <Form.Label className="mb-2">
                Explain Your Problem In Detail.
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="How Can We Help You?"
                className="mb-3"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              />
            </Form.Group>
            <Button type="submit">Send</Button>
          </Form>
        </div>
        <div
          className={`ms-lg-4 mt-lg-0 order-lg-2 order-sm-1 ${styles.subdiv2}`}
        >
          <Image src="/div4.png" width={600} height={200} />
        </div>
        <div className="col-lg-1 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default FourthDiv;
