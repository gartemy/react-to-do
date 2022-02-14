import React from 'react';
import './List.scss';

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className={item.active ? 'active' : ''} key={item.id}>
          <i className={item.color ? `badge badge--${item.color}` : ''}>
            {item.icon ? item.icon : ''}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
