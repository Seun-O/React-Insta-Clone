import React from "react";
import "./Login.sass";

const Login = props => {
  const getUsername = e => {
    props.getUserName(e.target.value);
  };
  const getPassword = e => {
    props.getPassword(e.target.value);
  };

  const UserLogin = e => {
    e.preventDefault();
    props.userLogin();
  };

  return (
    <div className="login ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui blue image header">
          <div className="content">Log-in to your account</div>
        </h2>
        <form onSubmit={UserLogin} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  onChange={getUsername}
                  type="text"
                  placeholder="username"
                  value={props.value}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  onChange={getPassword}
                  value={props.passwordValue}
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div
              onClick={UserLogin}
              className="ui fluid large blue submit button"
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
