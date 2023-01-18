import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Avatar } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Reactions from "./Reactions";

export default function PostCard(props) {
  console.log("props:", props);
  return (
    <Card className="postCard" sx={{ maxWidth: "25%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {props.author.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.author + " ," + props.time}
      />
      <CardMedia component="img" image={props.img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions style={{ position: "relative" }} disableSpacing>
        <Reactions />
        <h6
          style={{
            position: "absolute",
            right: "4%",
            color: "gray",
          }}
        >
          {props.date}
        </h6>
      </CardActions>
    </Card>
  );
}
