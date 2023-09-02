import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Link from "next/link";

function DocCard() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      // console.log(response.data);
      setDocs(response.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {docs.map((doc) => (
        <Link
          href={"/documentations/details/" + doc._id}
          className="no-underline"
        >
          <Card
            key={doc.id}
            className="w-64 m-4 hover:transform hover:scale-110 hover:shadow-md"
            style={{ height: "22rem" }}
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{doc.title}</Card.Title>
              <Card.Text>{doc.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default DocCard;
