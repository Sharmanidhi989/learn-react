import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";
import { login } from "../services/authService";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element

  schema = {
    email: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    login(this.state.data);
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
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
