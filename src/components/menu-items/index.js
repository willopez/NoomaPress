import React from 'react';
import Routes from '~/routes';
import NavbarLink from '~/components/navbar-link';
import PropTypes from 'prop-types';

const MenuItems = ({ onClick }) => {
  return (
    <React.Fragment>
      {Routes.filter(route => route.menu).map(route => (
        <NavbarLink
          key={route.path}
          title={route.name}
          onClick={onClick}
          href={route.path}
        />
      ))}
    </React.Fragment>
  );
};

MenuItems.propTypes = {};

export default MenuItems;
