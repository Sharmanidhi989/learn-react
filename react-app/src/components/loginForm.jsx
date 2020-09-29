import React from "react";
import Joi from "joi-browser";
import Input from "./shared/input";
import Form from "./shared/form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
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
            value={data.username}
            label="Username"
            onChange={(e) => this.handleChange(e)}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={(e) => this.handleChange(e)}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary btn-sm">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
