import React from 'react';

import '../styles/HeaderSignIn.css';

const HeaderAuth = () => {
    return (
        <div className="header-signin">
            <a href='#'>Зарегистрироваться</a>
            <img src="auth-line.svg" alt="line" />
            <button className='signin'>Войти</button>
        </div>
    );
};

export default HeaderAuth;