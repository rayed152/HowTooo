import React, { useEffect, useState } from "react";
import { Button, Form, ListGroup, Pagination } from "react-bootstrap";
import axios from "axios";
import Navbar1 from "@/Components/navbars/Navbar1";
import SimpleFooter from "@/Components/SimpleFooter";
import Cover from "@/Components/Cover";
import { useSession } from "next-auth/react";
import { Alert } from "react-bootstrap";

function Forum() {
  const [status, setStatus] = useState("");
  const [infos, setInfos] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [commentText, setCommentText] = useState("");
  const { data: session } = useSession();
  const [profile, setProfile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [deleteAlert, setDeleteAlert] = useState(null);

  async function createProblemStatement(ev) {
    ev.preventDefault();

    const data = {
      status,
      userName: session.user.name, // Include the user's name
    };

    await axios.post("/api/forum", data);

    // After posting, fetch the updated data to include the new status
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = () => {
    axios.get("/api/forum").then((response) => {
      setInfos(response.data);
    });
  };

  // Function to add a comment for a status
  const addComment = (statusId) => {
    setSelectedStatus(statusId);
  };

  // Function to submit a comment
  const submitComment = async () => {
    if (selectedStatus) {
      const data = { comment: commentText };
      await axios.post(`/api/forum/${selectedStatus}/comment`, data);
      setSelectedStatus(null); // Reset selected status after submitting the comment
      setCommentText(""); // Clear the comment input
      fetchData(); // Refresh the status list
    }
  };

  useEffect(() => {
    if (session && session.user && session.user.email) {
      // Fetch the profile data based on the user's email
      axios
        .get(`/api/profiles?email=${encodeURIComponent(session.user.email)}`)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch profile data:", error);
          setProfile(null);
        });
    }
  }, [session]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = infos.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(infos.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (!session || !session.user) {
    return (
      <Cover>
        <div>
          <h1>Some Problem Here</h1>
        </div>
      </Cover>
    );
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //delete
  const deleteStatus = async (statusId) => {
    try {
      await axios.delete(`/api/forum?id=${statusId}`);
      // Remove the deleted status from the state
      setInfos(infos.filter((info) => info._id !== statusId));
      setDeleteAlert("Status deleted successfully.");
      setTimeout(() => setDeleteAlert(null), 3000); // Clear the alert after 3 seconds
    } catch (error) {
      // Handle any errors if needed
      setDeleteAlert("Failed to delete the status.");
      setTimeout(() => setDeleteAlert(null), 3000); // Clear the alert after 3 seconds
    }
  };

  return (
    <Cover>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar1 />
        <div></div>
        <h1 className="text-center mt-5">Forum</h1>
        <div className={`d-flex flex-column align-items-center`}>
          <div className="col-lg-.5 d-lg-block d-none"></div>
          <div className={"order-lg-1 order-sm-2 text-center"}>
            <Form onSubmit={createProblemStatement}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="mb-2">Post</Form.Label>
                <Form.Control
                  style={{ width: "700px", height: "100px" }}
                  type="text"
                  placeholder="Update Your Status"
                  className="mb-3"
                  value={status}
                  onChange={(ev) => setStatus(ev.target.value)}
                />
              </Form.Group>

              <Button type="submit">Post</Button>
            </Form>

            {/* Display the statuses as a list */}
            <div className="mt-4">
              <ListGroup>
                {currentPosts.map((info, index) => (
                  <ListGroup.Item key={index} style={{ marginBottom: "20px" }}>
                    <h3>{info.userName || session.user.name}</h3>{" "}
                    {/* Display the user name from status or user */}
                    {info.status}
                    {info.status && (
                      <div className="mt-3">
                        <Button
                          variant="primary" // Blue color
                          onClick={() => addComment(info._id)}
                        >
                          Comment
                        </Button>
                        <Button
                          variant="success" // Green color
                          className="ml-2" // Add spacing between buttons
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger" // Red color
                          className="ml-2" // Add spacing between buttons
                          onClick={() => deleteStatus(info._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                    {selectedStatus === info._id && (
                      <div>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Write a comment"
                          value={commentText}
                          onChange={(ev) => setCommentText(ev.target.value)}
                        />
                        <Button
                          variant="primary"
                          className="mt-2"
                          onClick={submitComment}
                        >
                          Submit Comment
                        </Button>
                      </div>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
            {deleteAlert && (
              <Alert variant="success" className="mt-3">
                {deleteAlert}
              </Alert>
            )}

            {/* Pagination */}
            <div className="mt-4">
              <Pagination>
                {pageNumbers.map((number) => (
                  <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </div>
          <div className="col-lg-1 d-lg-block d-none"></div>
        </div>

        <div style={{ marginTop: "auto" }}>
          <SimpleFooter />
        </div>
      </div>
    </Cover>
  );
}

export default Forum;
