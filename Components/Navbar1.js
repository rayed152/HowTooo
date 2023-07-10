import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";

function Navbar1() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      style={{ backgroundColor: "#EEEEEE" }}
      className="border-bottom border-dark"
    >
      <Navbar expand="lg">
        <Container fluid>
          <div className="col-lg-2 d-lg-block d-none"></div>
          <Navbar.Brand href="/">
            <Image src="/logo.png" alt="Logo" width={80} height={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Courses"
                id="navbarScrollingDropdown"
                style={{ color: "#505E86" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Documentations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Community" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Premium" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>

            {/* Mondal */}
            <Nav.Link href="#" className="d-flex">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Log In
              </Button>
              <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Navbar.Collapse>
          <div className="col-lg-2 d-lg-block d-none"></div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
