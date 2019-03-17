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
    <form onSubmit={addPost} className="ui form">
      <div className="ui fluid action input">
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={onChange}
          value={props.commentValue}
        />
        <button className="ui button">Post</button>
      </div>
    </form>
  );
};

export default AddComment;
