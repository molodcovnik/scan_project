import React from 'react';

import '../styles/AuthPage.css';

const AuthPage = () => {
    return (
        <>
            <div className="auth-container">
                <div className="lock"><img src="lock.svg" alt="lock" /></div>
                <div className="text-auth">
                    <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <div className="auth-image">
                        <img src="characters.svg" alt="key" />
                    </div>
                </div>
                <div className="form-auth">
                    <div className="form-header">
                        <div className="header-item">
                            <span><a href='#'>Вход</a></span>
                            <div className="hr-div1"></div>
                        </div>
                        <div className="header-item">
                            <span>Зарегистрироваться</span>
                            <div className="hr-div2"></div>
                        </div>
                    </div>
                    <form action="" method='POST' className='form-auth-input'>
                        <label htmlFor="login">Логин или номер телефона</label>
                        <input type="text" name='login'/>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name='password' />
                        <button type="submit" className='btn signin-btn' >Войти</button>
                        <a href="#" className='reset-pass'>Восстановить пароль</a>
                    </form>
                    <div className="social-auth">
                        <p>Войти через:</p>
                        <a href="#"><img src="google.svg" alt="google" /></a>
                        <a href="#"><img src="facebook.svg" alt="facebook" /></a>
                        <a href="#"><img src="yandex.svg" alt="yandex" /></a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;