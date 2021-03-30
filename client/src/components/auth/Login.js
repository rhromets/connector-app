import React, {Component} from "react";
import {Form} from "semantic-ui-react";
import Proptypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  render() {
    const {errors} = this.state;

    return (
      <div className='auth-form'>
        <h1>Login</h1>
        <h3>Login to your account</h3>
        <Form onSubmit={this.onSubmit} noValidate>
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

          <input type='submit' value='Submit' className='form_submBtn' />
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: Proptypes.func.isRequired,
  auth: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {loginUser})(Login);
