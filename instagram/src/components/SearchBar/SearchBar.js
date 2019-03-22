import React from "react";
import "./SearchBar.sass";
import "./logo.png";
import styled from "styled-components";

const StyledHeader = styled.header``;

const LogoHeader = styled.div`
  display: flex
  align-items: center
  width: 33%
`;

const SearchBar = ({ value, _searchName }) => {
  const search = e => {
    _searchName(e.target.value);
  };
  return (
    <StyledHeader>
      <div className="search">
        <LogoHeader>
          <img className="insta " src={require("./insta.png")} alt="" />
          <img className="logo " src={require("./logo.png")} alt="" />
        </LogoHeader>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="search"
            value={value}
            onChange={search}
          />
          <i className="circular search link icon" />
        </div>
        <div className="icon-container">
          <i className="compass outline icon" />
          <i className="heart outline icon" />
          <i className="user outline icon" />
        </div>
      </div>
      <div className="ui divider" />
    </StyledHeader>
  );
};

export default SearchBar;
