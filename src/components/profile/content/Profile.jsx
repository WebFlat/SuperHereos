import React from 'react';
import s from './Profile.module.css';
import Batman from '../batman';
import Flash from '../flash';
import GreenLantern from '../greenLantern';
import Superman from '../superman';
import WonderWoman from '../wonderWoman';
import { Route } from 'react-router-dom';

const Profile = () => {
    return (
            <section className={s.content}>
                <Route path='/Batman' component={Batman} />
                <Route path='/Flash' component={Flash} />
                <Route path='/GreenLantern' component={GreenLantern} />
                <Route path='/Superman' component={Superman} />
                <Route path='/WonderWoman' component={WonderWoman} />
            </section>
    )
}

export default Profile;