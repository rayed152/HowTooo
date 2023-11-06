import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseCard() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("/api/matcourse").then((response) => {
      setDocs(response.data);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        {docs.map((doc) => (
          <a
            href={"/matdocs/details/" + doc._id}
            className="no-underline"
            key={doc.id}
          >
            <div className="w-64 m-4 hover:transform hover:scale-110 hover:shadow-md hover:bg-gray-500 hover:text-white">
              <div className="card" style={{ height: "410px" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{doc.courseName}</h5>
                    <p className="card-text">{doc.author}</p>
                    <p className="card-text">{doc.summary}</p>
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href={"/matcourses/details/" + doc._id}
                      className="btn btn-primary w-100"
                    >
                      Check Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
