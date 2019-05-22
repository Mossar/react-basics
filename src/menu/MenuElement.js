import React from 'react';
import {Link} from 'react-router-dom';

const MenuElement = props => {
  return (
    <li className="menu-element">
      <Link to={props.url}>
        <p>{props.title}</p>
      </Link>
    </li>
  );
};

export default MenuElement;
