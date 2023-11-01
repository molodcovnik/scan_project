import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import HeaderSignIn from './HeaderSignIn';
import HeaderAuth from './HeaderAuth';
import '../styles/Header.css';

const Header = () => {

    const token = localStorage.getItem('token');
    
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <Link to={'/'}><img src="scan_logo.svg" alt="logo" /></Link>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><Link to={'/'}>Главная</Link></li>
                        <li><a href='#'>Тарифы</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                {token ? <HeaderAuth token={token}/> : <HeaderSignIn />}
                
            </div>
        </header>
    );
};

export default Header;