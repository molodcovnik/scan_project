import React from 'react';

import '../styles/HeaderSignIn.css';
import { Link } from 'react-router-dom';


const HeaderSignIn = () => {
    if (!localStorage.getItem('token')) {
        return (
            <div className="header-signin">
                <a href='#'>Зарегистрироваться</a>
                <img src="auth-line.svg" alt="line" />
                <button className='signin'><Link to={'/auth'}>Войти</Link></button>
            </div>
        );
    };}

export default HeaderSignIn;