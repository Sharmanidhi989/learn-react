import React from "react";
import Joi from "joi-browser";
import Form from "./shared/form";
import http from "../services/httpService";
import config from "../config.json";
import { toast } from "react-toastify";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element

  schema = {
    email: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };

  doSubmit = async () => {
    try {
      const result = await http.post(
        `${config.apiEndPoint}/auth`,
        this.state.data
      );
      console.log(result.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
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
