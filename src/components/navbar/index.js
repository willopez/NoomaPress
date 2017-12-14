import React, { Component } from 'react';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import MenuItems from '~/components/menu-items';
import NavbarLink from '~/components/navbar-link';

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggleNavbar = () => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    // Only trigger toggle on small devices
    if (w <= 768) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };

  render() {
    return (
      <Navbar toggleable className="navbar navbar-light navbar-expand-md">
        <NavbarBrand className="masthead-brand" href="/">
          <img src="/static/images/logo.png" alt="NoomaPress" />
        </NavbarBrand>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <Collapse
          className="justify-content-end"
          isOpen={this.state.isOpen}
          navbar
        >
          <Nav navbar className="nav-masthead">
            <MenuItems onClick={this.toggleNavbar} />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
