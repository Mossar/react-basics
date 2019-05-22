import React from 'react';
import './Menu.scss';
import MenuElement from './MenuElement';
import {menuElements, applicationName} from './MenuConfig';

const Menu = () => {
  return (
    <div className="menu">
      <h4>{applicationName}</h4>
      <ul className="menu-list">
        {menuElements.map(element => (
          <MenuElement title={element.name} url={element.url}/>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
