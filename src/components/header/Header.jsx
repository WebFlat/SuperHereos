import React from 'react';
import s from './Header.module.css';
import logo from 'img/DC_Comics_logo.png';


const Header = () => {
    return (
        <div className={s.header}>
            <a href='#s' className={s.link} title='DC'>
                <img className={s.logo} src={logo} alt='DC logo'/>
            </a>
            <span className={s.text}>DC HEROES</span>
        </div>
    )
}

export default Header;