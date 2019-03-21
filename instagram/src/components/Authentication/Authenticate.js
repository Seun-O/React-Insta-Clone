import React, { Component } from "react";

export default function withAuthenticate(Login, PostPage) {
  return class extends Component {
    state = { loggedIn: false, userNameInput: "", passwordInput: "" };

    getUserName = input => {
      this.setState({ userNameInput: input }, () => {
        localStorage.setItem("userNameInput", this.state.userNameInput);
      });
    };

    getPassword = input => {
      this.setState({ passwordInput: input });
    };

    userLogin = () => {
      if (this.state.userNameInput === "") {
        alert("Please enter a username ");
      } else {
        this.setState({ loggedIn: true });
      }
    };

    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <PostPage username={this.state.userNameInput} />
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

    componentDidMount() {
      if (localStorage.hasOwnProperty("userNameInput")) {
        const user = localStorage.getItem("userNameInput");
        this.setState({ userNameInput: user, loggedIn: true });
      }
    }
  };
}
