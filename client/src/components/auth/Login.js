import React, {Component} from "react";
import {Button, Form} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({password}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  };
  render() {
    return (
      <div className='login-form'>
        <h1>Login</h1>
        <h3>Login to your account</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label className='login_label'>Email</label>
            <input
              placeholder='example@example.com'
              className='login_input'
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label className='login_label'>Password</label>
            <input
              placeholder='Password'
              type='password'
              className='login_input'
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </Form.Field>
          <Button type='submit' className='login_submBtn'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
