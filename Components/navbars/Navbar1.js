import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import LoginModal from "../LoginModal";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import styles from "./navbar.module.css";
import SearchMondal from "./SearchMondal";

function Navbar1() {
  const [modalShow, setModalShow] = React.useState(false);
  const { data: session } = useSession();

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
                className={`${styles.navitems}`}
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

              <NavDropdown
                title="Documentations"
                id="navbarScrollingDropdown"
                className={`${styles.navitems}`}
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

              <NavDropdown
                title="Community"
                id="navbarScrollingDropdown"
                className={`${styles.navitems}`}
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

              <NavDropdown
                title="Premium"
                id="navbarScrollingDropdown"
                className={`${styles.navitems}`}
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
              <Nav.Link href="#" className={`${styles.navitems}`}>
                Contact Us
              </Nav.Link>
            </Nav>

            <div className={`${styles.search}`}>
              <SearchMondal />
            </div>

            {/* Modal */}
            {!session ? (
              <Nav.Link href="#" className={`${styles.navitems} d-flex`}>
                <button variant="primary" onClick={() => setModalShow(true)}>
                  Log In
                </button>
                <LoginModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Nav.Link>
            ) : (
              <div className={`${styles.userMainDiv}`}>
                <div>
                  <Image
                    src={session.user.image}
                    alt="Profile Picture"
                    width={32}
                    height={32}
                    className="rounded-circle"
                    style={{ marginRight: "10px" }}
                  />
                </div>

                <NavDropdown
                  title={session.user.name}
                  id="navbarScrollingDropdown"
                  // className={`${styles.customnavdropdown}`}
                  style={{ marginTop: "3px", backgroundColor: "#EEEEEE" }}
                >
                  <NavDropdown.Item href="#action1">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Button
                      className={`${styles.signout}`}
                      onClick={() => signOut()}
                    >
                      Log Out
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Navbar.Collapse>
          <div className="col-lg-2 d-lg-block d-none"></div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
