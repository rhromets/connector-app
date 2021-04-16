import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentProfile} from "../../actions/profileActions";
import Spinner from "../common/Spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>Display profile!</h4>;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className='dashboard_userName'>Welcome {user.name} !</p>
            <p className='dashboard_msg'>
              You haven`t yet setup a profile, please add some info
            </p>
            <Button
              as={Link}
              to='/create-profile'
              color='teal'
              size={"large"}
              style={{textTransform: "capitalize"}}
            >
              Create profile
            </Button>
          </div>
        );
      }
    }

    return (
      <div className='dashboard'>
        <h1 className='dashboard_header'>Dashboard</h1>
        <div>{dashboardContent}</div>
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
  auth: state.auth,
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
