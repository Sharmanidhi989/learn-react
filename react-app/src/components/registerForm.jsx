import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";

class RegisterForm extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: {} };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="card container m-5">
        <h1>Sign Up</h1>
        <form
          className="card-body"
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
