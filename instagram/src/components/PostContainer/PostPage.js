import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import FuzzySearch from "fuzzy-search";
import uuid from "uuid";

class PostPage extends Component {
  state = {
    postData: [],
    search: ""
  };

  // Methods

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

    return (
      <div className="ui  fluid text container">
        <SearchBar _searchName={this.searchName} value={this.state.search} />
        {filtered.map(el => (
          <PostContainer
            username={this.props.username}
            key={uuid()}
            posts={el}
          />
        ))}
      </div>
    );
  }

  // Life-cycle Methods
  /*Loading the dummy data to state when the Component first Mounts */
  componentDidMount() {
    this.setState({
      postData: dummyData
    });
    // window.addEventListener("beforeunload", this.saveLocalStorage.bind(this));
    // this.loadLocalStorage();
  }
}

// saveLocalStorage() {
//   for (let key in this.state) {
//     localStorage.setItem(key, JSON.stringify(this.state[key]));
//   }
// }

// componentWillUnmount() {
//   window.removeEventListener(
//     "beforeunload",
//     this.saveLocalStorage.bind(this)
//   );
//   this.saveLocalStorage();
// }

// loadLocalStorage() {
//   for (let key in this.state) {
//     if (localStorage.hasOwnProperty(key)) {
//       let value = localStorage.getItem(key);
//       try {
//         value = JSON.parse(value);
//         this.setState({ [key]: value });
//       } catch (e) {
//         this.setState({ [key]: value });
//       }
//     }
//   }
// }

export default PostPage;

// Searching the state data array for a user name that Begins with the search term
// const filtered = this.state.postData.filter(posts => {
//   return (
//     posts.username
//       .toLowerCase()
//       .indexOf(this.state.search.toLowerCase()) !== -1
//   );
// });
