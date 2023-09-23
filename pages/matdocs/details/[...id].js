import SimpleFooter from "@/Components/SimpleFooter";
import Navbar1 from "@/Components/navbars/Navbar1";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarDoc from "../NavDoc";

export default function DocDetails() {
  const router = useRouter();

  const { id } = router.query;
  const [docs, setDocs] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // Initial count to display
  const [showLess, setShowLess] = useState(false); // State to track whether to show less

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/matdoc?id=" + id).then((response) => {
      setDocs([response.data]);
    });
  }, [id]);

  const gradientStyles = {
    background: "linear-gradient(90deg, #c1bfe6 0%, #e3e3eb 46%, #85b3bd 100%)",
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 3); // Increment display count by 3
    setShowLess(true); // Once "Show More" is clicked, enable "Show Less"
  };

  const handleShowLess = () => {
    setDisplayCount(6); // Reset the display count to show 2 rows
    setShowLess(false); // Disable "Show Less"
  };

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
                <h2 className="mt-8">Content</h2>
                <div className="d-flex flex-wrap">
                  {doc.syllabus.slice(0, displayCount).map((item, index) => (
                    <div
                      key={index}
                      className="card m-2"
                      style={{ width: "30%" }}
                    >
                      <div className="card-body">
                        <p className="card-text">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {doc.syllabus.length > displayCount && (
                <button
                  onClick={handleShowMore}
                  className="btn btn-primary mt-3"
                >
                  Show More
                </button>
              )}
              {showLess && (
                <button
                  onClick={handleShowLess}
                  className="btn btn-secondary mt-3 ml-2"
                >
                  Show Less
                </button>
              )}
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
