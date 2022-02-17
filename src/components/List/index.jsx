import React from 'react';
import classNames from 'classnames'
import './List.scss';
import Badge from "../Badge";
import removeSvg from '../../assets/img/remove.svg'

const List = ({items, isRemovable, onClick, onRemove}) => {

    const removeList = (item) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            onRemove(item.id)
        }
    }
    return (
        <ul onClick={onClick} className="list">
            {items.map((item) => (
                <li className={classNames(item.className, {'active': item.active})} key={item.id}>
                    <Badge color={item.color} icon={item.icon}/>
                    <span>{item.name}</span>
                    {isRemovable && <img src={removeSvg} onClick={() => removeList(item)} className='list__remove-icon' alt=""/>}
                </li>
            ))}
        </ul>
    );
};

export default List;
