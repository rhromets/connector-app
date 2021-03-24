import React, {Component} from "react";
import {Button, Form} from "semantic-ui-react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}));
  };
  onPassword2Change = (e) => {
    const password2 = e.target.value;
    this.setState(() => ({password2}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    axios
      .post("/api/users/register", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  render() {
    return (
      <div className='register-form'>
        <h1>Register</h1>
        <h3>Create your account</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label className='register_label'> Name</label>
            <input
              placeholder='Name'
              className='register_input'
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </Form.Field>
          <Form.Field>
            <label className='register_label'>Email</label>
            <input
              placeholder='example@example.com'
              className='register_input'
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label className='register_label'>Password</label>
            <input
              placeholder='Password'
              type='password'
              className='register_input'
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder='Confirm password'
              type='password'
              className='register_input'
              value={this.state.password2}
              onChange={this.onPassword2Change}
            />
          </Form.Field>
          <Button type='submit' className='register_submBtn'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
