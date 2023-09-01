import axios from "axios";
import React, { useEffect, useState } from "react";

function documentation() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("/api/doc").then((response) => {
      //   console.log(response.data);
      setDocs(response.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Documentation Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc) => (
            <tr>
              <td>{doc.title}</td>
              <td>{doc.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default documentation;
