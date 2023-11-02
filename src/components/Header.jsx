import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import HeaderSignIn from './HeaderSignIn';
import HeaderAuth from './HeaderAuth';
import '../styles/Header.css';

const Header = () => {

    const token = localStorage.getItem('token');
    const [burgerTouches, setBurgerTouches] = React.useState(false);

    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <Link to={'/'}><img src="scan_logo.svg" alt="logo" /></Link>
                </div>
                 <div className={ window.innerWidth > 1024 ? "header-menu" : 'hidden'}>
                    <ul>
                        <li><Link to={'/'}>Главная</Link></li>
                        <li><a href='#'>Тарифы</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                {token ? <HeaderAuth token={token} burgerTouches={burgerTouches} setBurgerTouches={setBurgerTouches}/> : <HeaderSignIn burgerTouches={burgerTouches} setBurgerTouches={setBurgerTouches}/>}
                
            </div>
        </header>
    );
};

export default Header;