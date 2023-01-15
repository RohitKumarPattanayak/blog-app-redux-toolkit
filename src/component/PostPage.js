import React from "react";
import { Provider, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { store } from "../Store/store";
import Header from "./Header";
import { allPostsStore } from "../Reducers/postSlice";

const PostPage = () => {
  let posts = useSelector(allPostsStore);

  let allPosts = posts.map((obj) => {
    let { id, content, title } = obj;
    return <PostCard key={id} title={title} content={content} />;
  });
  console.log(allPosts);
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
    </Provider>
  );
};

export default PostPage;
