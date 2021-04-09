import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentProfile} from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <h4>Loading...</h4>;
    } else {
      dashboardContent = <h1>Hello!</h1>;
    }

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth.isRequired,
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
