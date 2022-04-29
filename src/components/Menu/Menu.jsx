import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <menu>
      <ul>
        <li>
          <Link to="/">
            <img src="/image/book.svg" alt="icon" />
          </Link>
        </li>
        <li>
          <img src="/image/user.svg" alt="user" />
        </li>
        <li>
          <img src="/image/menu.svg" alt="menu" />
        </li>
        <li>
          <img src="/image/sun.svg" alt="menu" />
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
