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

  doSubmit = async () => {
    try {
      const response = await http.post(userEndPoint, this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      this.props.history.push("/");
      toast.info("New User Created");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
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
