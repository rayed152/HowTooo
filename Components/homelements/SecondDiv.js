import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function SecondDiv() {
  return (
    <div style={{ backgroundColor: "#393E46" }}>
      <div
        className="text-center pb-4 pt-4"
        style={{ color: "white", fontSize: "44px" }}
      >
        Popular Topics
      </div>
      <div
        className="d-flex flex-column flex-lg-row justify-content-center"
        style={{ padding: "3%" }}
      >
        <div className="col-lg-2 d-lg-block d-none"></div>

        <Carousel className="">
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/html.jpg"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>Card 1 content goes here.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="css.jpg"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>Card 2 content goes here.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/js.png"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>Card 3 content goes here.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/image4.jpg"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>Card 4 content goes here.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/image5.jpg"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 5</Card.Title>
                  <Card.Text>Card 5 content goes here.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "20px" }}>
                <Card.Img
                  variant="top"
                  src="/image6.jpg"
                  style={{ width: "300px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Card 6</Card.Title>
                  <Card.Text>Card 6 content goes here.</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
    </div>
  );
}

export default SecondDiv;
