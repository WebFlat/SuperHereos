import React from 'react';
import s from './Aside.module.css';
import HeroesLink from 'components/link_heroes';
import logoBatman from 'img/batman_logo.png';
import logoSuperman from 'img/superman_logo.png';
import logoWonderWoman from 'img/wonderWoman_logo.png';
import logoFlash from 'img/flash_logo.png';
import logoGreenLantern from 'img/greenLantern_logo.png';

const Aside = () => {
    return (
        <nav className={s.nav}>
            <HeroesLink name='Batman' logo={logoBatman}/>
            <HeroesLink name='Superman' logo={logoSuperman}/>
            <HeroesLink name='Flash' logo={logoFlash}/>
            <HeroesLink name='GreenLantern' logo={logoGreenLantern}/>
            <HeroesLink name='WonderWoman' logo={logoWonderWoman}/>
        </nav>
    )
}

export default Aside;