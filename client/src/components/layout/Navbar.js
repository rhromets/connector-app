import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: "home"};
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

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
          </Menu>
        </Container>
      </header>
    );
  }
}

export default Navbar;
