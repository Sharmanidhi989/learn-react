import React, { Component } from "react";
import Input from "./shared/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
  };

  validate = () => {
    return { username: "Username is required" };
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
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
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={(e) => this.handleChange(e)}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={(e) => this.handleChange(e)}
          />
          <button className="btn btn-primary btn-sm">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
