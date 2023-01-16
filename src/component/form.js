import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { addPost } from "../Reducers/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";
import { allUsersStore } from "../Reducers/userSlice";

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
  let showSubmit = false;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  let allUsers = useSelector(allUsersStore);
  let allUserOption = allUsers.map((user) => {
    return (
      <option key={user.id} value={user.name}>
        <div className="options">{user.name}</div>
      </option>
    );
  });
  console.log("form values : ", formValues);

  if (formValues.title && formValues.author && formValues.content) {
    showSubmit = true;
  }

  function onSubmit() {
    setAddedToast((prev) => prev + 1);
    dispatch(addPost(formValues));
    setFormValues({
      title: "",
      author: "",
      content: "",
      img: "",
    });
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
      <select
        id="author-name-input"
        name="author"
        onChange={handleInputChange}
        value={formValues.author}
        style={{
          padding: "4%",
          border: "none",
          borderRadius: "2%",
        }}
      >
        <option style={{ display: "none" }}></option>
        {allUserOption}
      </select>
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
      <Button
        onClick={onSubmit}
        disabled={!showSubmit}
        variant="contained"
        color="info"
        type="submit"
      >
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
