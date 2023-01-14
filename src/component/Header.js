// import { AppBar, Toolbar } from "@material-ui/core";
import BookIcon from "@mui/icons-material/Book";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar>
        <BookIcon />
        BLOG SPOT
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
