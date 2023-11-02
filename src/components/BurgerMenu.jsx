import React from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {

    function scrollRates() {
        window.scrollTo({
            top: 1320,
            left: 0,
            behavior: "smooth",
          });
        }
    return (
        <>
            <div className="burger-header">
                    <div className="burger-heder-logo">
                        <img src="scan_logo_white.svg" alt="logo" />
                    </div>
                    <div className="close-menu">
                        <img src="close-menu.svg" alt="close" onClick={() => {
                            props.setBurgerTouches(false);
                        }}/>
                    </div>
                </div>
                <div className="burger-menu">
                    <ul>
                        <li><Link to={'/'} onClick={() => props.setBurgerTouches(false)}>Главная</Link></li>
                        <li><Link to={'#'} onClick={() => {props.setBurgerTouches(false);scrollRates()}}>Тарифы</Link></li>
                        <li><Link to={'#'} onClick={() => props.setBurgerTouches(false)}>FAQ</Link></li>
                    </ul>
                    <Link to={'#'} onClick={() => props.setBurgerTouches(false)}>Зарегистрироваться</Link>
                    <Link to={'/auth'} className={localStorage.getItem('token') ? "hidden" : 'burger-btn sign-in'} onClick={() => props.setBurgerTouches(false)}>Войти</Link>
                    <Link to={'/'} className={!localStorage.getItem('token') ? "hidden" : ''} onClick={() => {
                        props.setBurgerTouches(false);
                        localStorage.removeItem('token');
                        location.reload();
                        }}>Выйти</Link>
                </div>
        </>
    );
};

export default BurgerMenu;