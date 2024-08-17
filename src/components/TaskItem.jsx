import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import * as Icon from "react-bootstrap-icons";
import EditModal from "./EditModal";


const TaskItem = ({
  _id,
  title,
  description,
  expirationDate,
  priority,
  deleteTask,
  editTask,
  isCompleted,
  addInline,
}) => {
  //delete modal states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-----------------------------------

  //edit modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  //-----------------------------------
    const handleComplete = () => {
      addInline(_id);
    };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          onChange={handleComplete}
          checked={isCompleted}
          aria-label="Checkbox for following text input"
          className="accordion-style "
        />
        <Accordion
          defaultActiveKey="1"
          className="custom-accordion accordion-style"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className={isCompleted ? "completed-task" : "uncompleted-task"}
            >
              <strong> {title}</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
              <p>
                <strong>Expiration Date: </strong>
                {new Date(expirationDate).toLocaleDateString()}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant="outline-danger">
          <Icon.Trash onClick={handleShow} />
        </Button>
        <Button onClick={handleShowEditModal} variant="outline-secondary">
          <Icon.Pencil />
        </Button>
      </InputGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteTask} value={_id}>
            Delete Task
          </Button>
        </Modal.Footer>
      </Modal>
      <DeleteModal
        show={show}
        handleClose={handleClose}
        deleteTask={deleteTask}
        _id={_id}
      />
      <EditModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        editTask={editTask}
        _id={_id}
      />
    </>
  );
};

export default TaskItem;
