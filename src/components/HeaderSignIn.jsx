import React from 'react';
import BurgerMenu from './BurgerMenu';
import '../styles/HeaderSignIn.css';
import { Link } from 'react-router-dom';


const HeaderSignIn = (props) => {

    if (!localStorage.getItem('token')) {
        return (
            <>
                <div className={window.innerWidth < 1024 ? 'hidden' : "header-signin"}>
                    <a href='#'>Зарегистрироваться</a>
                    <img src="auth-line.svg" alt="line" />
                    <button className='signin'><Link to={'/auth'}>Войти</Link></button>
                </div>
                <div className={ window.innerWidth > 1024 ? 'hidden' : "burger-menu"}>
                    <img src="burger-menu.svg" alt="alt" onClick={() => {
                        console.log('click burger-menu');
                        props.setBurgerTouches(true);
                    }} />
                </div>
                <div className={props.burgerTouches ? "burger-all-width" : "hidden"}>
                    <BurgerMenu burgerTouches={props.burgerTouches} setBurgerTouches={props.setBurgerTouches}/>
                </div>
            </>
            
        );
    };}

export default HeaderSignIn;