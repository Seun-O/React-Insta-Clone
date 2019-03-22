import IconSection from "../IconSection/IconSection";
import React, { Component } from "react";
import "./PostContainer.sass";
import CommentSection from "./../CommentSection/CommentSection";
import uuid from "uuid";
import AddComment from "../AddComment/AddComment";
import PropTypes from "prop-types";

let commentIndex = 0;
class PostContainer extends Component {
  state = {
    oldComments: this.props.posts.comments,
    commentInput: "",
    likes: this.props.posts.likes,
    liked: false
  };

  addComment = text => {
    const newComment = {
      id: `${this.props.username[0]}${(commentIndex += 1)}`,
      username: this.props.username,
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
  };

  addLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1,
        liked: true
      };
    });
  };

  delComment = id => {
    this.setState(prevState => {
      return {
        oldComments: prevState.oldComments.filter(comment => comment.id !== id)
      };
    });
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
        <IconSection
          likes={this.state.likes}
          _addLikes={this.addLikes}
          liked={this.state.liked}
        />
        {this.state.oldComments.map(comment => (
          <CommentSection
            key={uuid()}
            comments={comment}
            delComment={this.delComment}
            id={comment.id}
          />
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

PostContainer.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default PostContainer;
