import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "@/Components/dashboardelements/cssfiles/chat.module.css"; // Adjust the path to your CSS file
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chat = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== "") {
      setMessages([...messages, { content: messageInput }]);
      setMessageInput("");
    }
  };

  return (
    <>
      <div className={`chatButtonContainer ${styles.chatButton}`}>
        <button className="btn btn-primary" onClick={handleShow}>
          <FontAwesomeIcon icon={faMessage} />
        </button>
      </div>

      <div className={`modalContainer ${showModal ? styles.show : ""}`}>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Chat</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <div key={index}>{msg.content}</div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Form onSubmit={handleMessageSubmit} className="d-flex">
              <Form.Group className="flex-grow-1 mr-2">
                <Form.Control
                  type="text"
                  placeholder="Type a message"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Chat;
