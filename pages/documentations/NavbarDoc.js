import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavbarDoc() {
  const [docs, setDocs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null); // State to track the selected link

  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      setDocs(response.data);
    });
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (docId) => {
    setSelectedLink(docId);
  };

  return (
    <div className="mt-8 p-2">
      <h3 onClick={toggleNavbar} className="cursor-pointer flex items-center">
        Topics
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`ml-2 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h3>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {isOpen && (
          <div style={{ maxHeight: "700px", overflowY: "scroll" }}>
            {docs.map((doc) => (
              <Link
                href={"/documentations/details/" + doc._id}
                className={`no-underline text-gray-600 hover:text-gray-800 transition-colors duration-200`}
                key={doc.id}
                onClick={() => handleLinkClick(doc._id)}
              >
                <div
                  className={`flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-gray-100 ${
                    selectedLink === doc._id ? "border-l-4 border-black" : ""
                  }`}
                >
                  <span className="text-lg">{doc.title}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarDoc;
