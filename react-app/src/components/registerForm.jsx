import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";
import config from "../config.json";
import http from "../services/httpService";
import { toast } from "react-toastify";

const userEndPoint = `${config.apiEndPoint}/users`;
class RegisterForm extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: {} };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };

  doSubmit = () => {
    try {
      http.post(userEndPoint, this.state.data).then((response) => {
        console.log(response);
      });
      toast.info("New User Created");
    } catch (ex) {
      toast.error(ex);
    }
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
