import React from 'react';

import axios from 'axios';

import '../styles/AuthPage.css';

const AuthPage = () => {

    const url = 'https://gateway.scan-interfax.ru/api/v1/account/login';
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            login: login,
            password: password
        };

        try {
            const response = await axios.post(url, data);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            // location.reload()
            location.href = '/';
        
            
        } catch (error) {
            if (error.response.data.errorCode === 'Auth_InvalidUserOrPassword') {
                setLoginError(true);
            }

            
        }
    }


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
                    <form className='form-auth-input' method='POST' onSubmit={handleSubmit}>
                        <label htmlFor="login">Логин или номер телефона</label>
                        <input type="text" name='login' className={loginError ? 'error-input' : ''} onChange={(e) => setLogin(e.target.value)} value={login}/>
                        
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name='password' className={loginError ? 'error-input' : ''} onChange={(e) => setPassword(e.target.value)} value={password}/>
                        {loginError ? <span className='error'>Введите корректные данные</span> : ''}
                        {login.length <= 4 || password.length <= 4 ? <button type="submit" disabled className='btn signin-btn'>Войти</button> :
                        <button type="submit" className='btn signin-btn'>Войти</button>}
                        <a href="#" className='reset-pass'>Восстановить пароль</a>
                    </form>
                    <div className="social-auth">
                        <p>Войти через:</p>
                        <a href="#"><img src="../public/google.svg" alt="google" /></a>
                        <a href="#"><img src="../public/facebook.svg" alt="facebook" /></a>
                        <a href="#"><img src="../public/yandex.svg" alt="yandex" /></a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;