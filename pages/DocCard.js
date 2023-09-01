import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function DocCard() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      // console.log(response.data);
      setDocs(response.data);
    });
  }, []);
  return (
    <div>
      {docs.map((doc) => (
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{doc.title}</Card.Title>
            <Card.Text>{doc.summary}</Card.Text>
            <Button variant="primary">Check It Out</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DocCard;
