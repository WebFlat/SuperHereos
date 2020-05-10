import React from 'react';
import s from './Aside.module.css';
import HeroesLink from 'components/link_heroes';

const Aside = () => {
    return (
        <nav className={s.nav}>
            <HeroesLink name='Batman'/>
            <HeroesLink name='Superman'/>
            <HeroesLink name='Flash'/>
            <HeroesLink name='GreenLantern'/>
            <HeroesLink name='WonderWoman'/>
        </nav>
    )
}

export default Aside;