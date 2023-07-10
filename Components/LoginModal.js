import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

function LoginModal(props) {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="d-flex">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="d-flex flex-column align-items-center border border-dark rounded">
          <div className="p-4">
            <Image src="/logo.png" alt="logo" width={300} height={100} />
          </div>
          <Form className="p-4">
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
              <Form.Text>Forgot Password?</Form.Text>
            </Form.Group>
            <Button>Log In</Button>
          </Form>
          <div className="p-4">
            <div>
              <p>Or Log In With</p>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-light"
                style={{ marginRight: "0.5rem" }}
                onClick={handleLogin}
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                className="btn btn-light"
                style={{ marginRight: "0.5rem" }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button
                className="btn btn-light"
                style={{ marginRight: "0.5rem" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
              <button
                className="btn btn-light"
                style={{ marginRight: "0.5rem" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
