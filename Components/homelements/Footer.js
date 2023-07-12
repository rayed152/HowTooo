import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./cssfiles/footer.module.css";

function Footer() {
  return (
    <div className={`${styles.maindiv}`}>
      <div className={`d-flex  flex-lg-row`}>
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div
          className="p-4 border-bottom border-dark"
          style={{ width: "100%" }}
        >
          <Image src="/logo.png" alt="logo" width={80} height={100} />
        </div>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
      <footer className=" text-center text-lg-start d-flex  flex-lg-row">
        <div className="col-lg-2 d-lg-block d-none"></div>

        <Container className="p-4">
          <Row className="justify-content-center">
            <Col lg={3} md={6} className="mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase mb-0">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div className="col-lg-2 d-lg-block d-none"></div>
      </footer>
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

export default Footer;
