import React from 'react';
import classNames from 'classnames'
import './List.scss';
import Badge from "../Badge";

const List = ({items, isRemovable, onClick}) => {
    return (
        <ul onClick={onClick} className="list">
            {items.map((item) => (
                <li className={classNames(item.className, {'active': item.active})} key={item.id}>
                    <Badge color={item.color} icon={item.icon}/>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;
