import React from "react";
import "./SearchBar.sass";
import "./logo.png";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div className="search">
        <div className="logo-container">
          <img className="insta " src={require("./insta.png")} alt="" />
          <img className="logo " src={require("./logo.png")} alt="" />
        </div>
        <div className="ui icon input">
          <input type="text" placeholder="search" />
          <i className="circular search link icon" />
        </div>
        <div className="icon-container">
          <i className="compass outline icon" />
          <i className="heart outline icon" />
          <i className="user outline icon" />
        </div>
      </div>
      <div className="ui divider" />
    </React.Fragment>
  );
};

export default SearchBar;
