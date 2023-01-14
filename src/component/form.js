import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@mui/material";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";

function Form() {
  const defaultValues = {
    name: "",
    age: "",
    sex: "",
    os: "",
    favoriteNumber: 0,
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
        value={formValues.name}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="author-name-input"
        name="authorName"
        label="Author name"
        type="text"
        value={formValues.age}
        onChange={handleInputChange}
      />
      <br />
      <TextField
        id="content-input"
        name="content"
        label="Content"
        type="text"
        value={formValues.age}
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
