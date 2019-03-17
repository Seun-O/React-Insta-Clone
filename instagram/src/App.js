import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import FuzzySearch from "fuzzy-search";
import uuid from "uuid";

class App extends Component {
  state = { postData: [], search: "" };

  /*Loading the dummy data to state when the Component first Mounts */
  componentDidMount() {
    this.setState({ postData: dummyData });
  }

  searchName = name => {
    this.setState({
      search: name
    });
  };

  render() {
    /*Third Party Searching library that adds fuzzy searching to the application. 
    It takes the array, properties that will be searched, and the search term.*/

    const searcher = new FuzzySearch(this.state.postData, ["username"], {
      caseSensitive: false
    });
    const filtered = searcher.search(this.state.search);

    // Searching the state data array for a user name that Begins with the search term
    // const filtered = this.state.postData.filter(posts => {
    //   return (
    //     posts.username
    //       .toLowerCase()
    //       .indexOf(this.state.search.toLowerCase()) !== -1
    //   );
    // });

    return (
      <div className="ui  fluid text container">
        <SearchBar _searchName={this.searchName} value={this.state.search} />
        {filtered.map(el => (
          <PostContainer key={uuid()} posts={el} />
        ))}
      </div>
    );
  }
}

export default App;
