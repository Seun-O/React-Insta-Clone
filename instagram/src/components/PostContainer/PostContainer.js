import React from "react";
import "./PostContainer.sass";
import CommentSection from "./../CommentSection/CommentSection";

const PostContainer = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>{posts.username}</h1>
      <img src={posts.imageUrl} alt="" />
      <CommentSection comments={posts.comments} />
    </div>
  );
};

export default PostContainer;
