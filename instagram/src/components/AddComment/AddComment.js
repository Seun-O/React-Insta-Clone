import React from "react";
import "./AddComment.sass";

const AddComment = props => {
  const onChange = e => {
    props.commentInput(e.target.value);
  };

  const addPost = e => {
    e.preventDefault();
    props.addComment(props.commentValue);
  };

  return (
    <div className="ui action fluid input">
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={onChange}
        value={props.commentValue}
      />
      <button onClick={addPost} className="ui button">
        Post
      </button>
    </div>
  );
};

export default AddComment;
