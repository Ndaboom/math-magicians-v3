import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className={styles.navigation}>
      <h2 className={styles.navBarTitle}>Math-Magicians</h2>
      <ul className={styles.navigationMenu}>
        {links.map((link) => (
          <li
            key={link.id}
            className={styles.navItem}
            aria-hidden="true"
          >
            <NavLink to={link.path} activeClassName="active" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
