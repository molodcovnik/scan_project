import React from 'react';

import { Link } from 'react-router-dom';

import HeaderSignIn from './HeaderSignIn';
import HeaderAuth from './HeaderAuth';
import '../styles/Header.css';


const Header = () => {
    const [isLogin, setIsLogin] = React.useState(false);

    let token = localStorage.getItem('token');
    // console.log(token);

    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <Link to={'/'}><img src="scan_logo.svg" alt="logo" /></Link>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><a href='#'>Главная</a></li>
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