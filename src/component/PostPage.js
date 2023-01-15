import React from "react";
import { Provider, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { store } from "../Store/store";
import Header from "./Header";
import { allPostsStore } from "../Reducers/postSlice";

const PostPage = () => {
  let posts = useSelector(allPostsStore);

  let allPosts = posts.map((obj) => {
    let { id, content, title, author, img } = obj;
    return (
      <PostCard
        key={id}
        title={title}
        author={author}
        content={content}
        img={img}
      />
    );
  });
  return (
    <Provider store={store}>
      <Header />
      <div className="postsContainer">
        <br />
        <br />
        <br />
        <center>{allPosts}</center>
        <br />
        <br />
      </div>
      <div style={{ height: "10vh", color: "gray", padding: "3%" }}>
        No more posts
      </div>
    </Provider>
  );
};

export default PostPage;
