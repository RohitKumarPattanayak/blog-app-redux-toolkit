import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostPage = () => {
  let posts = useSelector((state) => state.posts);

  let allPosts = posts.map((obj) => {
    let { id, content, title } = obj;
    console.log(id, content, title);
    return <PostCard key={id} title={title} content={content} />;
  });
  console.log(allPosts);
  return <div>{allPosts}</div>;
};

export default PostPage;
