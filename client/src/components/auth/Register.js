import React, {Component} from "react";
import Proptypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Button, Form} from "semantic-ui-react";
import classnames from "classnames";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({errors: nextProps.errors});
    }
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
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const {errors} = this.state;

    return (
      <div className='register-form'>
        <h1>Register</h1>
        <h3>Create your account</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label className='register_label'> Name</label>
            <input
              placeholder='Name'
              className={classnames("register_input", {
                register__invalid: errors.name,
              })}
              value={this.state.name}
              onChange={this.onNameChange}
            />
            {errors.name && (
              <div className='register_invalid-feedback'>{errors.name}*</div>
            )}
          </Form.Field>
          <Form.Field>
            <label className='register_label'>Email</label>
            <input
              placeholder='example@example.com'
              className={classnames("register_input", {
                register__invalid: errors.email,
              })}
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            {errors.email && (
              <div className='register_invalid-feedback'>{errors.email}*</div>
            )}
          </Form.Field>
          <Form.Field>
            <label className='register_label'>Password</label>
            <input
              placeholder='Password'
              type='password'
              className={classnames("register_input", {
                register__invalid: errors.password,
              })}
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            {errors.password && (
              <div className='register_invalid-feedback'>
                {errors.password}*
              </div>
            )}
          </Form.Field>
          <Form.Field>
            <input
              placeholder='Confirm password'
              type='password'
              className={classnames("register_input", {
                register__invalid: errors.password2,
              })}
              value={this.state.password2}
              onChange={this.onPassword2Change}
            />
            {errors.password2 && (
              <div className='register_invalid-feedback'>
                {errors.password2}*
              </div>
            )}
          </Form.Field>
          <Button type='submit' className='register_submBtn'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: Proptypes.func.isRequired,
  auth: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
