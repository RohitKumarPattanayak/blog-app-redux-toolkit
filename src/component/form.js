import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { addPost } from "../Reducers/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";
import { allUsersStore } from "../Reducers/userSlice";

function Form() {
  console.log("hi");
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
      <MenuItem key={user.id} value={user.name}>
        <div className="options">{user.name}</div>
      </MenuItem>
    );
  });

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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Author</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formValues.author}
          label="Author"
          name="author"
          onChange={handleInputChange}
        >
          {allUserOption}
        </Select>
      </FormControl>
      <br />
      <TextField
        id="content-input"
        name="content"
        label="Content"
        // maxRows={5}
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
