import React from 'react';

const AboutService = () => {
    return (
        <>
        <div className="about-service-wrapper">
            <div className="about-service">
                <p>сервис по поиску публикаций <br />о компании <br />по его ИНН</p>
                <p>Комплексный анализ публикаций, получение данных <br />в формате PDF на электронную почту.</p>
                <button className='btn get-data'>Запросить данные</button>
            </div>
            <div className="about-img">
                <div className="block"></div>
                <img src="about_img.svg" alt="about"/>
            </div>
        </div>
        </>
    );
};

export default AboutService;