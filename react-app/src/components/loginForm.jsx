import React from "react";
import Joi from "joi-browser";
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
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
