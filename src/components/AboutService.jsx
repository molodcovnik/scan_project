import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/AboutService.css';

const AboutService = () => {
    const token = localStorage.getItem('token');
    return (
        <div className="about-service-wrapper">
            <div className="about-service">
                <p>сервис по поиску публикаций <br />о компании <br />по его ИНН</p>
                <p>Комплексный анализ публикаций, получение данных <br />в формате PDF на электронную почту.</p>
                <Link to={'/search'} className={`btn get-data ${token ? 'visible' : 'hidden'}`}>Запросить данные</Link>
            </div>
            <div className="about-img">
                <div className="block"></div>
                <img src="about_img.svg" alt="about"/>
            </div>
        </div>
    );
};

export default AboutService;