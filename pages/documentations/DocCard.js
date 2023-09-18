import React, { useState, useEffect } from "react";
import axios from "axios";
// import Link from "next/link";

function DocCard({ searchTerm }) {
  const [docs, setDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [docsPerPage] = useState(4); // Number of cards per page

  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      setDocs(response.data);
    });
  }, []);

  // Filter documents based on search term
  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  const currentDocs = filteredDocs.slice(indexOfFirstDoc, indexOfLastDoc);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredDocs.length / docsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {currentDocs.map((doc) => (
          <a
            href={"/documentations/details/" + doc._id}
            className="no-underline"
          >
            <div
              key={doc.id}
              className="w-64 m-4 hover:transform hover:scale-110 hover:shadow-md hover:bg-gray-500 hover:text-white"
            >
              <div className="card" style={{ height: "380px" }}>
                <div className="card-body">
                  <h5 className="card-title">{doc.title}</h5>
                  <p className="card-text">{doc.summary}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => paginate(1)}>
              First
            </button>
          </li>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
            >
              Prev
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => paginate(pageNumbers.length)}
            >
              Last
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DocCard;
