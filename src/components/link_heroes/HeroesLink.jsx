import React from 'react';
import s from './Heroes.module.css';
import { Link } from 'react-router-dom';


const HeroesLink = (props) => {
    return ( 
        <Link to={props.name} className={`${s.link} ${s.active}`}>
            {props.name}
        </Link>
    )
}


export default HeroesLink;