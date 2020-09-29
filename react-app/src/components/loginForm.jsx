import React, { Component, createRef } from "react";
class LoginForm extends Component {
  username = React.createRef();
  // use of refs should be minimum

  componentDidMount() {
    this.username.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.username.current.value;
    console.log(username);
  };

  render() {
    return (
      <div className="card container m-5">
        <h1>Login</h1>
        {/* form>(div.form-group>label+input.form-control)*2 */}
        <form
          className="card-body"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary btn-sm">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
