import SimpleFooter from "@/Components/SimpleFooter";
import Navbar1 from "@/Components/navbars/Navbar1";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarDoc from "../NavbarDoc";
import Link from "next/link";

export default function DocDetails() {
  const router = useRouter();

  const { id } = router.query;
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/doc?id=" + id).then((response) => {
      setDocs([response.data]);
    });
  }, [id]);

  const gradientStyles = {
    background: "linear-gradient(90deg, #c1bfe6 0%, #e3e3eb 46%, #85b3bd 100%)",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const conceptsPerPage = 9;

  const indexOfLastConcept = currentPage * conceptsPerPage;
  const indexOfFirstConcept = indexOfLastConcept - conceptsPerPage;
  const currentConcepts =
    docs.length > 0
      ? docs[0].concept.slice(indexOfFirstConcept, indexOfLastConcept)
      : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  const lastPage = Math.ceil(docs[0]?.concept.length / conceptsPerPage);
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ ...gradientStyles }} className="min-h-screen flex flex-col">
      <Navbar1 />
      <div className="d-flex  flex-lg-row">
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className=" pr-16">
          <NavbarDoc />
        </div>

        <div className="d-flex  flex-lg-row align-items-lg-center">
          {docs.map((doc) => (
            <div key={doc._id}>
              <div>
                <h1 className="mt-8">Introduction to {doc.title}</h1>
                <div style={{ width: "90%" }} className="p-4">
                  {doc.introduction}
                </div>
              </div>
              <div>
                <h2 className="mt-8">Concepts</h2>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {currentConcepts.map((concept, index) => (
                      <Link href="#" className="no-underline" key={index}>
                        <div className="bg-gray-200 p-4 rounded shadow-md transform hover:scale-105 transition-transform ease-in-out duration-300 text-black cursor-pointer">
                          {concept}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <nav>
                    <ul className="pagination">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <a
                          href="#"
                          className="page-link"
                          onClick={() => paginate(1)}
                        >
                          «
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <a
                          href="#"
                          className="page-link"
                          onClick={() => paginate(currentPage - 1)}
                        >
                          ‹
                        </a>
                      </li>
                      {pageNumbers.map((number) => (
                        <li
                          className={`page-item ${
                            currentPage === number ? "active" : ""
                          }`}
                          key={number}
                        >
                          <a
                            href="#"
                            className="page-link"
                            onClick={() => paginate(number)}
                          >
                            {number}
                          </a>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === lastPage ? "disabled" : ""
                        }`}
                      >
                        <a
                          href="#"
                          className="page-link"
                          onClick={() => paginate(currentPage + 1)}
                        >
                          ›
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === lastPage ? "disabled" : ""
                        }`}
                      >
                        <a
                          href="#"
                          className="page-link"
                          onClick={() => paginate(lastPage)}
                        >
                          »
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-2 d-lg-block d-none"></div>
      </div>
      <div className="mt-auto">
        <SimpleFooter />
      </div>
    </div>
  );
}
