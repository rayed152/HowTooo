import React, { use, useState } from "react";
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
import styles from "./loginmondal.module.css";
import Link from "next/link";
import axios from "axios";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleLoginC = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const token = response.data.token;
      // Store token in localStorage or wherever you prefer
      localStorage.setItem("token", token);
      // Redirect to the desired page after successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="d-flex">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#EEEEEE" }}
        ></Modal.Header>
        <Modal.Body
          className={`d-flex flex-column align-items-center ${styles.mondalbody}`}
        >
          <div className="p-4">
            <Image src="/logo.png" alt="logo" width={180} height={100} />
          </div>
          <div>
            <p>Don’t Waste Anymore Time And Dive In</p>
          </div>

          <Form className={`p-4 ${styles.form}`}>
            <Form.Group className={`${styles.formgroup}`}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={`${styles.formgroup}`}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className={`${styles.formtext}`}>
                Forgot Password?
              </Form.Text>
            </Form.Group>
            <Button className={`${styles.button}`} onClick={handleLoginC}>
              Log In
            </Button>
          </Form>
          <div
            className="pt-4 border-top border-dark w-50"
            style={{ marginRight: "30px" }}
          >
            <div className="text-center">
              <p>Or Log In With</p>
            </div>
            <div className="d-flex justify-content-center align-item-center">
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
            <div className="text-center mt-3">
              <p>
                Don't Have An Account?{" "}
                <span>
                  <Link href="/CreateProfile">Sign Up.</Link>
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
