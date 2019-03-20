import React from "react";
import "./CommentSection.sass";
import "./ez.jpg";
import PropTypes from "prop-types";

const CommentSection = ({ comments, delComment, id }) => {
  return (
    <div className="ui middle aligned divided list">
      <div className="item">
        <div className="right floated content">
          <div
            onClick={() => delComment(id)}
            className="circular ui icon button"
          >
            <i className="close icon" />
          </div>
        </div>
        <img src={require("./ez.jpg")} alt="" className="ui avatar image" />
        <div className="content">
          <div className="header">
            {comments.username}
            {id}
          </div>
          <div className="text">{comments.text}</div>
        </div>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
export default CommentSection;
