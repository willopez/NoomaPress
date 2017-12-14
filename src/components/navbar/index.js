import React, { Component } from 'react';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import MenuItems from '~/components/menu-items';
import Menu from 'react-burger-menu/lib/menus/slide';

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.isMenuOpen,
    });
  };

  isMenuOpen = state => {
    return state.isOpen;
  };

  render() {
    return (
      <Navbar toggleable className="navbar navbar-light navbar-expand-md">
        <NavbarBrand className="masthead-brand" href="/">
          <img src="/static/images/logo.png" alt="NoomaPress" />
        </NavbarBrand>
        <Menu
          right
          noOverlay
          isOpen={this.state.isOpen}
          onStateChange={this.isMenuOpen}
          customBurgerIcon={<img src="/static/images/mobile-menu-icon.svg" />}
          className="mobile-menu"
        >
          <MenuItems onClick={this.toggleNavbar} />
        </Menu>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar className="nav-masthead">
            <MenuItems />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
