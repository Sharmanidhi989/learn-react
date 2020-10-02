import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";
import config from "../config.json";
import { register } from "../services/authService";

const userEndPoint = `${config.apiEndPoint}/users`;
class RegisterForm extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: {} };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };

  doSubmit = async () => {
    const result = await register(
      this.state.data,
      userEndPoint,
      this.state.erros
    );
    if (result) this.setState({ errors: result });
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
