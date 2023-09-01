import React, { useState } from "react";
import styles from "./cssfiles/thirddivdash.module.css";
import { Nav, Tab, Card } from "react-bootstrap";

function ThirdDivDash() {
  const [expandedMap, setExpandedMap] = useState({});

  const toggleExpand = (cardId) => {
    setExpandedMap((prevExpandedMap) => ({
      ...prevExpandedMap,
      [cardId]: !prevExpandedMap[cardId],
    }));
  };

  const renderCardText = (text, cardId) => {
    const maxLength = 200;
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    if (expandedMap[cardId]) {
      return (
        <div>
          <Card.Text>{text}</Card.Text>
          <button
            className={styles.seeMoreButton}
            onClick={() => toggleExpand(cardId)}
          >
            See Less
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Card.Text>{truncatedText}</Card.Text>
          {text.length > maxLength && (
            <button
              className={styles.seeMoreButton}
              onClick={() => toggleExpand(cardId)}
            >
              See More
            </button>
          )}
        </div>
      );
    }
  };

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
                <Nav.Link eventKey="#card1">Computer Science</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#card2">BBA</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#card3">Maths</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="col-lg-2 d-lg-block d-none"></div>
          </div>

          <Tab.Content className="d-flex flex-lg-row justify-content-center">
            <div className="col-lg-2 d-lg-block d-none"></div>
            <Tab.Pane eventKey="#card1">
              <div id="card1" className="mt-4">
                <h3>Computer Science</h3>
                <div className="row">
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>HTML & CSS</Card.Title>
                        <Card.Text>
                          {renderCardText(
                            `HTML is used for structuring web content, using tags
                          to define headings, paragraphs, links, images, and
                          more while CSS styles web content by specifying
                          colors, fonts, layout, and design for HTML elements.`,
                            "card1-item1"
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Python</Card.Title>
                        <Card.Text>
                          {renderCardText(
                            `Python is a versatile, high-level programming language
                          known for its simplicity and readability. It offers a
                          wide range of libraries and frameworks for various
                          tasks, making it popular for web development, data
                          analysis, artificial intelligence, and automation.
                          Python's clean syntax and extensive community support
                          contribute to its widespread use and appeal.`,
                            "card1-item2"
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={`${styles.cards}`}>
                      <Card.Body>
                        <Card.Title>Java</Card.Title>
                        <Card.Text>
                          {renderCardText(
                            `Java is a robust, object-oriented programming language
                          that emphasizes portability and security. It's widely
                          used for building applications, from desktop to
                          enterprise software. Java code runs on a virtual
                          machine (JVM), ensuring compatibility across different
                          platforms. Its strong ecosystem, vast libraries, and
                          platform independence make Java a cornerstone of
                          modern software development.`,
                            "card1-item3"
                          )}
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
                        <Card.Title>Card 2 Item 2</Card.Title>
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

export default ThirdDivDash;
