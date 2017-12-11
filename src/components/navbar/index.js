import React, { Component } from 'react';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
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
            <NavbarLink onClick={this.toggleNavbar} title="HOME" href="/" />
            <NavbarLink onClick={this.toggleNavbar} title="NEW" href="/about" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
