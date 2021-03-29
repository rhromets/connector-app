import React, {Component} from "react";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-content'>
            <h1>Developer Connector Application</h1>
            <h3>Powerful application description</h3>
            <Button as={Link} to='/register' primary size={"medium"}>
              Sing Up
            </Button>
            <Button as={Link} to='/login' size={"medium"}>
              Login
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
