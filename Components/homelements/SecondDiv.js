import React from "react";
import styles from "./cssfiles/seconddiv.module.css";
import { Nav, Tab, Card, Button } from "react-bootstrap";

function SecondDiv() {
  return (
    <div style={{ backgroundColor: "#393E46" }}>
      <div className={`text-center pb-4 pt-4 ${styles.header}`}>
        Popular Topics
      </div>

      <div className={`${styles.main}`}>
        <Tab.Container defaultActiveKey="#card1">
          <div className="d-flex flex-lg-row justify-content-center">
            <div className="col-lg-2 d-lg-block d-none"></div>
            <Nav
              variant="tabs"
              className="justify-content-center"
              style={{ width: "70%" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="#card1">Card1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#card2">Card2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#card3">Card3</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="col-lg-2 d-lg-block d-none"></div>
          </div>

          <Tab.Content className="d-flex flex-lg-row justify-content-center">
            <div className="col-lg-2 d-lg-block d-none"></div>
            <Tab.Pane eventKey="#card1">
              <div id="card1" className="mt-4">
                <h3>Card1 Content</h3>
                <div className="row">
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 1 - Item 1</Card.Title>
                        <Card.Text>
                          This is the content for Card 1 - Item 1.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 1 - Item 2</Card.Title>
                        <Card.Text>
                          This is the content for Card 1 - Item 2.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 1 - Item 3</Card.Title>
                        <Card.Text>
                          This is the content for Card 1 - Item 3.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="#card2">
              <div id="card2" className="mt-4">
                <h3>Card2 Content</h3>
                <div className="row">
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 2 - Item 1</Card.Title>
                        <Card.Text>
                          This is the content for Card 2 - Item 1.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 2 - Item 2</Card.Title>
                        <Card.Text>
                          This is the content for Card 2 - Item 2.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 2 - Item 3</Card.Title>
                        <Card.Text>
                          This is the content for Card 2 - Item 3.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="#card3">
              <div id="card3" className="mt-4">
                <h3>Card3 Content</h3>
                <div className="row">
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 3 - Item 1</Card.Title>
                        <Card.Text>
                          This is the content for Card 3 - Item 1.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 3 - Item 2</Card.Title>
                        <Card.Text>
                          This is the content for Card 3 - Item 2.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Card 3 - Item 3</Card.Title>
                        <Card.Text>
                          This is the content for Card 3 - Item 3.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <div className="col-lg-2 d-lg-block d-none"></div>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default SecondDiv;
