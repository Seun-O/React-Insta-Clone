import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import uuid from "uuid";

class App extends Component {
  render() {
    return (
      <div className="ui  fluid text container">
        <SearchBar />
        {dummyData.map(el => (
          <PostContainer key={uuid()} posts={el} />
        ))}
      </div>
    );
  }
}

export default App;
