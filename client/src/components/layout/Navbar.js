import React, {Component} from "react";
import {Menu, Container, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: "home"};
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const {activeItem} = this.state;

    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <Menu.Menu position='right'>
        <Image
          src={user.avatar}
          alt={user.name}
          avatar
          onClick={this.onLogoutClick.bind(this)}
          className='header-avatar'
          title='You must have a Gravatar connected to your email to display tour image'
        />
        <Menu.Item
          name='logout'
          active={activeItem === "logout"}
          onClick={this.onLogoutClick.bind(this)}
          className='header-menu_item'
        />
      </Menu.Menu>
    );
    const guestLinks = (
      <Menu.Menu position='right'>
        <Menu.Item
          as={Link}
          to='/register'
          name='signUp'
          active={activeItem === "signUp"}
          onClick={this.handleItemClick}
          className='header-menu_item'
        />
        <Menu.Item
          as={Link}
          to='/login'
          name='login'
          active={activeItem === "login"}
          onClick={this.handleItemClick}
          className='header-menu_item'
        />
      </Menu.Menu>
    );

    return (
      <header className='header-navbar'>
        <Container>
          <Menu pointing secondary>
            <Menu.Item
              as={Link}
              to='/'
              name='dev connector'
              active={activeItem === "DevConnector"}
              onClick={this.handleItemClick}
              className='header-menu_item'
            />
            <Menu.Item
              as={Link}
              to='/profiles'
              name='developers'
              active={activeItem === "developers"}
              onClick={this.handleItemClick}
              className='header-menu_item'
            />
            {isAuthenticated ? authLinks : guestLinks}
          </Menu>
        </Container>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(Navbar);
