import React, {Component} from "react";
import Proptypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Form} from "semantic-ui-react";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import TextFieldGroup from "../../components/common/TextFieldGroup";

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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
      <div className='auth-form'>
        <h1>Register</h1>
        <h3>Create your account</h3>
        <Form onSubmit={this.onSubmit} noValidate>
          <TextFieldGroup
            label='Name'
            type='text'
            placeholder='Name'
            error={errors.name}
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <TextFieldGroup
            label='Email'
            type='email'
            placeholder='example@example.com'
            error={errors.email}
            value={this.state.email}
            onChange={this.onEmailChange}
          />

          <TextFieldGroup
            label='Password'
            type='password'
            placeholder='Password'
            error={errors.password}
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <TextFieldGroup
            type='password'
            placeholder='Confirm password'
            error={errors.password2}
            value={this.state.password2}
            onChange={this.onPassword2Change}
          />

          <input type='submit' value='Submit' className='form_submBtn' />
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
