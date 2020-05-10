import React from 'react';
import s from './HeroesImage.module.css';


const HeroesImage = (props) => {
    return (
        <div className={s.wrap_img}>
            <img src={props.src} alt="heroes"/>
        </div>
    )
}

export default HeroesImage;