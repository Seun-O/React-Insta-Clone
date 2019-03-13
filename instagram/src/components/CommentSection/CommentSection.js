import React from "react";
import "./CommentSection.sass";
import "./ez.jpg";

const CommentSection = ({ comments }) => {
  return (
    <div className="ui small comments">
      <div className="comment">
        <a className="avatar">
          <img src={require("./ez.jpg")} alt="" />
        </a>

        <div className="content">
          <div className="author">{comments.username}</div>
          <div className="text"> {comments.text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
