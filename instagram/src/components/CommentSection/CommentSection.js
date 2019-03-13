import React from "react";
import "./CommentSection.sass";

const CommentSection = ({ comments }) => {
  return (
    <div>
      <h3>{comments.username}</h3>
      <p>{comments.text}</p>
    </div>
  );
};

export default CommentSection;
