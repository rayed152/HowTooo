import Cover from "@/Components/Cover";
import Navbar1 from "@/Components/navbars/Navbar1";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Quiz() {
  return (
    <Cover>
      <div>
        <Navbar1 />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start", // Move form to the left
          //   alignItems: "center",
          height: "100vh",
          marginLeft: "25%", // Adjust the left margin
          backgroundColor: "#f5f5f5",
        }}
      >
        <Form>
          <Form.Label>Question 1</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 1"
          />
          <Form.Label>Question 2</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 2"
          />
          <Form.Label>Question 3</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 3"
          />
          <Form.Label>Question 4</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 4"
          />
          <Form.Label>Question 5</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 5"
          />
          <Form.Label>Question 6</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 6"
          />
          <Form.Label>Question 7</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 7"
          />
          <Form.Label>Question 8</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "200%", height: "10%" }} // Adjust the input box width
            placeholder="Answer To Question 8"
          />
          <Button>Submit</Button>
        </Form>
      </div>
    </Cover>
  );
}

export default Quiz;
