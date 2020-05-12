import React from 'react';
import s from './Heroes.module.css';
import { NavLink } from 'react-router-dom';


const HeroesLink = (props) => {
    return ( 
        <NavLink to={props.name} className={s.link} activeClassName={s.activeNavLink}>
            <img src={props.logo} alt='logo'/> {props.name}
        </NavLink>
    )
} 


export default HeroesLink;