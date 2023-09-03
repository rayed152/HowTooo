import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

function DocCard() {
  const [docs, setDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [docsPerPage] = useState(4); // Number of cards per page

  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      setDocs(response.data);
    });
  }, []);

  // Calculate the index of the first and last document for the current page
  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  const currentDocs = docs.slice(indexOfFirstDoc, indexOfLastDoc);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(docs.length / docsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {currentDocs.map((doc) => (
          <Link
            href={"/documentations/details/" + doc._id}
            className="no-underline"
          >
            <Card
              key={doc.id}
              className="w-64 m-4 hover:transform hover:scale-110 hover:shadow-md hover:bg-gray-500 hover:text-white"
              style={{ height: "22rem" }}
            >
              <Card.Body>
                <Card.Title>{doc.title}</Card.Title>
                <Card.Text>{doc.summary}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
      <Container className="d-flex justify-content-center">
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {pageNumbers.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          />
          <Pagination.Last onClick={() => paginate(pageNumbers.length)} />
        </Pagination>
      </Container>
    </div>
  );
}

export default DocCard;
