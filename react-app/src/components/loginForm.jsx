import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./shared/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  // null or undefined cannot be used as value of controlled element

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProprerty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateProprerty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);

    if (!result.error) return null;

    return result.error.details[0].message;
  };

  render() {
    const { account, errors } = this.state;
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
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={(e) => this.handleChange(e)}
            error={errors.password}
          />
          <button className="btn btn-primary btn-sm">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
