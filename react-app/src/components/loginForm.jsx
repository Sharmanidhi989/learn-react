import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";
import http from "../services/httpService";
import config from "../config.json";
import { toast } from "react-toastify";
import { repeat } from "lodash";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element

  schema = {
    email: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    http
      .post(`${config.apiEndPoint}/auth`, this.state.data)
      .then((response) => {
        let jwt = response.data;
        localStorage.setItem("token", jwt);
        this.props.history.push("/");
      })
      .catch((error) => {
        if (error.response) toast.error(error.response.data);
      });
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
