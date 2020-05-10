import React from 'react';
import s from './Profile.module.css';
import Batman from '../batman';


const Profile = () => {
    return (
        <section className={s.content}>
            <Batman />
        </section>
    )
}

export default Profile;