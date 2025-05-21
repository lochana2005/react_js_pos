// src/components/AddEditTaskModal.js
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddEditTaskModal = ({ show, handleClose, handleSave, task }) => {
  const isEdit = Boolean(task);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (isEdit && task) {
      setTitle(task.title);
      setTag(task.tag);
      setDate(task.date);
      setDescription(task.description);
      setImagePreview(task.image || "");
    } else {
      setTitle("");
      setTag("");
      setDate("");
      setDescription("");
      setImagePreview("");
    }
  }, [isEdit, task]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const onSave = () => {
    if (!title || !description || !tag || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const taskData = {
      id: isEdit ? task.id : null,
      title,
      description,
      tag,
      date,
      image: imagePreview || null,
    };

    handleSave(taskData, isEdit);
    setTitle("");
    setTag("");
    setDate("");
    setDescription("");
    setImagePreview("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Title */}
          <Form.Group className='mb-3' controlId='taskTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Task Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          {/* Tag */}
          <Form.Group className='mb-3' controlId='taskTag'>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Tag'
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
          </Form.Group>

          {/* Start Date */}
          <Form.Group className='mb-3' controlId='startDate'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className='mb-3' controlId='taskDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Write some text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          {/* Image */}
          <Form.Group className='mb-3' controlId='taskImage'>
            <Form.Label>
              Attachments <span className='text-muted'>(Jpg, Png format)</span>
            </Form.Label>
            <Form.Control
              type='file'
              accept='image/*'
              onChange={handleImageChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt='Image_Preview'
                style={{ width: "100%", marginTop: "10px", display: "block" }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='primary' onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditTaskModal;
