import React, { Component } from "react";
import "./AddComment.sass";
export class AddComment extends Component {
  render() {
    return (
      <div className="ui action fluid input">
        <input type="text" placeholder="Add a comment..." />
        <button className="ui button">Post</button>
      </div>
    );
  }
}

export default AddComment;
