import React from 'react';

import HeaderSignIn from './HeaderSignIn';
import HeaderAuth from './HeaderAuth';
import '../styles/Header.css';


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <img src="scan_logo.svg" alt="logo" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li><a href='#'>Главная</a></li>
                        <li><a href='#'>Тарифы</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                <HeaderSignIn /> 
                {/* <HeaderAuth /> */}
            </div>
        </header>
    );
};

export default Header;