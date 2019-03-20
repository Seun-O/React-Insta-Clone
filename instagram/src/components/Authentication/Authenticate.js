import React, { Component } from "react";

export default function withAuthenticate(Login, PostPage) {
  return class extends Component {
    state = { loggedIn: false, userNameInput: "", passwordInput: "" };

    getUserName = input => {
      this.setState({ userNameInput: input });
    };

    getPassword = input => {
      this.setState({ passwordInput: input });
    };

    userLogin = () => {
      this.setState({ loggedIn: true });
    };
    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <PostPage />
          ) : (
            <Login
              getUserName={this.getUserName}
              value={this.state.userNameInput}
              getPassword={this.getPassword}
              passwordValue={this.state.passwordInput}
              userLogin={this.userLogin}
            />
          )}
        </div>
      );
    }
  };
}
