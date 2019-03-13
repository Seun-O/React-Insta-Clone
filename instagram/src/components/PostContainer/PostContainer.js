import React from "react";
import "./PostContainer.sass";
import CommentSection from "./../CommentSection/CommentSection";
import uuid from "uuid";
import AddComment from "../AddComment/AddComment";

const PostContainer = ({ posts }) => {
  console.log(posts);
  return (
    <div className="ui container fluid segment">
      <h4 className="ui header">
        <img
          className="ui circular image"
          src={posts.thumbnailUrl}
          alt={posts.username}
        />
        {posts.username}
      </h4>
      <img
        className="ui image rounded"
        src={posts.imageUrl}
        alt={`Pics By ${posts.username}`}
      />
      <div className="icon-container">
        <i className="heart outline icon" />
        <i className="comments outline icon" />
        <i className="image outline icon" />
      </div>
      <p className="likes">{posts.likes} Likes</p>
      {posts.comments.map(comment => (
        <CommentSection key={uuid()} comments={comment} />
      ))}
      <div className="ui divider" />
      <AddComment />
    </div>
  );
};

export default PostContainer;
