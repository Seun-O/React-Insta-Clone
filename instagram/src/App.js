import React from "react";
import withAuthenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login/Login";
import PostPage from "./components/PostContainer/PostPage";

const Authenticate = withAuthenticate(Login, PostPage);

const App = () => {
  return (
    <div className="ui fluid text container">
      <Authenticate />
    </div>
  );
};
export default App;
