import Cover from "@/Components/Cover";
import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar1 from "@/Components/navbars/Navbar1";

function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [goToUserProfile, setGoToUserProfile] = useState(false);
  const router = useRouter();

  async function createProfile(ev) {
    ev.preventDefault();
    const data = { firstName, lastName, phone, age, address, email };
    await axios.post("/api/profiles", data);
    setGoToUserProfile(true);
  }

  if (goToUserProfile) {
    router.push("/userprofile");
  }

  return (
    <Cover>
      <Navbar1 />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh", // Set minimum height to fill the whole viewport
        }}
      >
        <h4
          style={{
            textAlign: "center",
            marginBottom: "50px",
            borderBottom: "2px solid black",
          }}
        >
          Edit Your Profile
        </h4>
        <Form onSubmit={createProfile}>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone Number"
                type="tel"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Age</Form.Label>
              <Form.Control
                placeholder="Age"
                type="number"
                value={age}
                onChange={(ev) => setAge(ev.target.value)}
              />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="email"
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </Cover>
  );
}

export default EditProfile;
