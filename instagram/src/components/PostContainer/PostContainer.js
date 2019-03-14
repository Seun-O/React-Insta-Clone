import React, { Component } from "react";
import "./PostContainer.sass";
import CommentSection from "./../CommentSection/CommentSection";
import uuid from "uuid";
import AddComment from "../AddComment/AddComment";

class PostContainer extends Component {
  state = { oldComments: this.props.posts.comments, commentInput: "" };
  addComment = text => {
    const newComment = {
      username: "guest",
      text
    };
    this.setState(prevState => {
      return {
        oldComments: [...prevState.oldComments, newComment]
      };
    });
    this.setState({ commentInput: "" });
  };
  commentInput = e => {
    this.setState({ commentInput: e });
    console.log(this.state.commentInput);
  };
  render() {
    const posts = this.props.posts;
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
        {this.state.oldComments.map(comment => (
          <CommentSection key={uuid()} comments={comment} />
        ))}
        <div className="ui divider" />
        <AddComment
          addComment={this.addComment}
          commentInput={this.commentInput}
          commentValue={this.state.commentInput}
        />
      </div>
    );
  }
}

export default PostContainer;
