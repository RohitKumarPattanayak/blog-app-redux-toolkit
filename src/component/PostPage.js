import React from "react";
import { Provider, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { store } from "../Store/store";
import Header from "../component/Header";

const PostPage = () => {
  let posts = useSelector((state) => state.posts);

  let allPosts = posts.map((obj) => {
    let { id, content, title } = obj;
    console.log(id, content, title);
    let ele = <PostCard key={id} title={title} content={content} />;
    return ele;
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
