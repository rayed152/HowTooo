import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar1 from "@/Components/navbars/Navbar1";
import Cover from "@/Components/Cover";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap"; // Import react-bootstrap components
import Whiteboard from "@/pages/Whiteboard";

function CourseDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [courses, setCourses] = useState([]);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [showWhiteboard, setShowWhiteboard] = useState(false); // State for the modal

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/matcourse?id=" + id).then((response) => {
      setCourses([response.data]);
    });
  }, [id]);

  const toggleChapterExpansion = (chapterIndex) => {
    if (expandedChapter === chapterIndex) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(chapterIndex);
    }
  };

  const openWhiteboard = () => {
    setShowWhiteboard(true);
  };

  const closeWhiteboard = () => {
    setShowWhiteboard(false);
  };

  return (
    <Cover>
      <div>
        <Navbar1 />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {courses.map((course) => (
          <div key={course._id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <h1 className="text-3xl font-bold text-center mb-4 mt-4">
                  {course.courseName}
                </h1>
                <Link
                  href="/quiz"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  style={{ marginLeft: "1rem" }}
                >
                  Quiz
                </Link>
              </div>
            </div>
            <p className="text-gray-700 text-center">{course.description}</p>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center">
              Chapters, Questions, and Examples
            </h2>

            {course.chapters.map((chapter, index) => (
              <div key={index} className="bg-white p-4 rounded shadow m-4">
                <h3
                  onClick={() => toggleChapterExpansion(index)}
                  className="cursor-pointer text-xl font-bold"
                >
                  {chapter.name}
                </h3>
                {expandedChapter === index && (
                  <div className="mt-2">
                    <p className="text-gray-700">{chapter.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold">Examples:</h4>
                      <ul className="list-disc pl-6">
                        {chapter.examples.map((example, eIndex) => (
                          <li key={eIndex}>{example.description}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">Questions:</h4>
                      <ul className="list-disc pl-6">
                        {chapter.questions.map((question, qIndex) => (
                          <li key={qIndex}>{question.question}</li>
                        ))}
                      </ul>
                      <Button>Solution</Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <button
          onClick={openWhiteboard}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Whiteboard
        </button>
      </div>

      {/* Render the Whiteboard modal */}
      <Modal show={showWhiteboard} onHide={closeWhiteboard}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Whiteboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Whiteboard />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeWhiteboard}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Cover>
  );
}

export default CourseDetails;
