import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function Form() {
  const defaultValues = {
    title: "",
    author: "",
    content: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  return (
    <div className="form">
      <TextField
        id="post-title-input"
        name="postTitle"
        label="Post title"
        type="text"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="author-name-input"
        name="authorName"
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
      <Button variant="contained" color="info" type="submit">
        SUBMIT
      </Button>
      <br />
      <Button variant="text" color="success">
        POSTS
      </Button>
    </div>
  );
}

export default Form;
