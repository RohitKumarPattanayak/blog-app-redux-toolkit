import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { addPost } from "../Reducers/postSlice";
import { useDispatch } from "react-redux";
import Toast from "./Toast";

function Form() {
  const defaultValues = {
    title: "",
    author: "",
    content: "",
    img: "",
  };
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultValues);
  const [addedToast, setAddedToast] = useState(0);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  function onSubmit() {
    if (formValues.title && formValues.author && formValues.content) {
      setAddedToast((prev) => prev + 1);
      dispatch(addPost(formValues));
      setFormValues({
        title: "",
        author: "",
        content: "",
        img: "",
      });
    }
  }
  return (
    <div className="form">
      <TextField
        id="post-title-input"
        name="title"
        label="Post title"
        type="text"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="author-name-input"
        name="author"
        label="Author name"
        type="text"
        value={formValues.author}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="content-input"
        name="content"
        label="Content"
        type="text"
        value={formValues.content}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="image-input"
        name="img"
        label="Image"
        type="url"
        value={formValues.img}
        onChange={handleInputChange}
      />
      <br />
      <Button onClick={onSubmit} variant="contained" color="info" type="submit">
        SUBMIT
      </Button>
      <br />
      <Button
        onClick={() => {
          navigate("/feeds");
        }}
        variant="outlined"
        color="success"
      >
        POSTS
      </Button>
      <Toast added={addedToast} />
    </div>
  );
}

export default Form;
