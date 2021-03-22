import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import {Container} from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  state = {activeItem: "home"};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <header className='header-navbar'>
        <Container>
          <Menu pointing secondary>
            <Menu.Item
              name='dev connector'
              active={activeItem === "DevConnector"}
              onClick={this.handleItemClick}
              className='header-menu_item'
            />
            <Menu.Item
              name='developers'
              active={activeItem === "developers"}
              onClick={this.handleItemClick}
              className='header-menu_item'
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='signUp'
                active={activeItem === "signUp"}
                onClick={this.handleItemClick}
                className='header-menu_item'
              />
              <Menu.Item
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
