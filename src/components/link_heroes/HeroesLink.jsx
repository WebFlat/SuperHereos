import React from 'react';
import s from './Heroes.module.css';


const HeroesLink = (props) => {
    return (
        <a href='#s' className={`${s.link} ${s.active}`}>
            {props.name}
        </a>
    )
}


export default HeroesLink;