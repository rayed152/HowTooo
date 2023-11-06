import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import LoginModal from "../LoginModal";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import styles from "./navbar.module.css";
import SearchMondal from "./SearchMondal";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import Link from "next/link";
import Chat from "../dashboardelements/chat";

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
              {/* Catalog */}
              <Dropdown className={`${styles.navitems}`}>
                <DropdownToggle
                  id="dropdown-basic"
                  className={`${styles.navToggle}`}
                >
                  Catalog
                </DropdownToggle>
                <DropdownMenu className={`${styles.navDropMenu}`}>
                  <DropdownItem>
                    <Link
                      href="/allcourses"
                      className="no-underline text-black"
                    >
                      Courses
                    </Link>
                  </DropdownItem>
                  <NavDropdown.Divider />
                  <div>
                    <h6>Popular Courses</h6>
                  </div>

                  <DropdownItem>Web Development</DropdownItem>
                  <DropdownItem>Machine Learning</DropdownItem>
                  <DropdownItem>Data Science</DropdownItem>
                  <DropdownItem>Cyber Security</DropdownItem>
                  <DropdownItem>Accounting (ACT)</DropdownItem>
                  <DropdownItem>Business Analytics (BA)</DropdownItem>
                  <DropdownItem>Finance (FIN)</DropdownItem>
                  <NavDropdown.Divider />
                  <div>
                    <h6>Career Paths</h6>
                  </div>
                  <DropdownItem>Full Stack Engineer</DropdownItem>
                  <DropdownItem>Full Stack FrontEnd Engineer</DropdownItem>
                  <DropdownItem>Full Stack BackEnd Engineer</DropdownItem>
                  <DropdownItem>Business Related Path</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Resources */}
              <Dropdown className={`${styles.navitems}`}>
                <DropdownToggle
                  id="dropdown-basic"
                  className={`${styles.navToggle}`}
                >
                  Resources
                </DropdownToggle>
                <DropdownMenu className={`${styles.navDropMenu}`}>
                  <DropdownItem>
                    <Link href="/alldocs" className="no-underline text-black">
                      Docs
                    </Link>
                  </DropdownItem>
                  <NavDropdown.Divider />
                  <div>
                    <h6>Practices</h6>
                  </div>
                  <DropdownItem>Projects</DropdownItem>
                  <DropdownItem>Code Challanges</DropdownItem>
                  <DropdownItem>
                    <Link href="/videos" className="no-underline text-black">
                      Videos
                    </Link>
                  </DropdownItem>
                  <NavDropdown.Divider />
                  <div>
                    <h6>Inspirations</h6>
                  </div>
                  <DropdownItem>Articles</DropdownItem>
                  <DropdownItem>Career Advice</DropdownItem>
                  <DropdownItem>Learning Tips</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Community */}
              <Dropdown className={`${styles.navitems}`}>
                <DropdownToggle
                  id="dropdown-basic"
                  className={`${styles.navToggle}`}
                >
                  Community
                </DropdownToggle>
                <DropdownMenu className={`${styles.navDropMenuNoWidth}`}>
                  <DropdownItem>
                    <Link href="/Forum"> Forums </Link>
                  </DropdownItem>
                  <DropdownItem>Discord</DropdownItem>
                  <DropdownItem>Team</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Premium */}

              <Dropdown className={`${styles.navitems}`}>
                <DropdownToggle
                  id="dropdown-basic"
                  className={`${styles.navToggle}`}
                >
                  Premium
                </DropdownToggle>
                <DropdownMenu className={`${styles.navDropMenuNoWidth}`}>
                  <DropdownItem>For Individual</DropdownItem>
                  <DropdownItem>For Students</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Nav.Link href="/ContactUs" className={`${styles.navitems}`}>
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Search */}

            <div className={`${styles.search}`}>
              <SearchMondal />
            </div>

            {/* Login Modal */}
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
                <Chat />
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
                  <NavDropdown.Item href="/userprofile">
                    Profile
                  </NavDropdown.Item>
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
