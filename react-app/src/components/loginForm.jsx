import React, { Component, createRef } from "react";
class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
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
              value={this.state.account.username}
              onChange={(e) => this.handleChange(e)}
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={(e) => this.handleChange(e)}
              value={this.state.account.password}
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary btn-sm">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
