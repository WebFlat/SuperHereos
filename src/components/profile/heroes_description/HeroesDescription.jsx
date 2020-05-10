import React from 'react';
import s from './HeroesDescription.module.css';


const HeroesDescription = (props) => {
    console.log(props);
    return (
        <p className={s.text}>
            <span>{props.name}</span>
            {props.text}  
        </p>
    )
}

export default HeroesDescription;