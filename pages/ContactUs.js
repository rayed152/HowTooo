import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Navbar1 from "@/Components/navbars/Navbar1";
import SimpleFooter from "@/Components/SimpleFooter";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  async function createProblemStatement(ev) {
    ev.preventDefault();
    const data = { email, topic, description };
    await axios.post("/api/problem", data);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar1 />
      <div></div>
      <h1 className="text-center mt-5">
        Need Help On Your
        <br /> projects?
      </h1>
      <div className={`d-flex flex-column align-items-center`}>
        <div className="col-lg-.5 d-lg-block d-none"></div>
        <div className={"order-lg-1 order-sm-2 text-center"}>
          <h2 className="pb-3 color-#505E86">Contact Us</h2>
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
                placeholder="Type Your Topic"
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
        <div className="col-lg-1 d-lg-block d-none"></div>
      </div>
      <div style={{ marginTop: "auto" }}>
        <SimpleFooter />
      </div>
    </div>
  );
}

export default ContactUs;
