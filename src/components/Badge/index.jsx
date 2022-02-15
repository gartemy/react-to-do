import React from 'react'
import classNames from "classnames";
import './Badge.scss'

const Badge = ({color, icon, onClick, className}) => {
    return (
        <i onClick={onClick}
           className={classNames({'badge': color, [`badge--${color}`]: color}, className)}>
            {icon ? icon : ''}
        </i>
    );
}

export default Badge;