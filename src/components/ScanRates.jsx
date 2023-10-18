import React from 'react';

import '../styles/ScanRates.css';

const ScanRates = () => {
    return (
        <div className="rates">
                <p>наши тарифы</p>

                <div className="rates-wrapper">
                    <div className="rate">
                        <div className="rate-header beginner">
                            <div className="rate-text">
                                <p>Beginner</p>
                                <p>Для небольшого исследования</p>
                            </div>
                            <div className="rate-icon">
                                <img src="lamp.svg" alt="beginner" />
                            </div>
                        </div>
                        <div className="rate-info">
                            <div className="info">
                                <span>799 ₽</span>
                                <span>1 200 ₽</span>
                                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className="about-rate">
                                <p>В тариф входит:</p>
                                <ul className='about-list'>
                                    <li><img src="gal.svg" alt="gal"/> Безлимитная история запросов</li>
                                    <li><img src="gal.svg" alt="gal"/> Безопасная сделка</li>
                                    <li><img src="gal.svg" alt="gal"/> Поддержка 24/7</li>
                                </ul>
                            </div>
                            <div className="btn-detail">
                                <button className='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="rate">
                        <div className="rate-header pro">
                            <div className="rate-text">
                                <p>Pro</p>
                                <p>Для HR и фрилансеров</p>
                            </div>
                            <div className="rate-icon">
                                <img src="apple.svg" alt="pro" />
                            </div>
                        </div>
                        <div className="rate-info">
                            <div className="info">
                                <span>1 299 ₽</span>
                                <span>2 600 ₽</span>
                                <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className="about-rate">
                                <p>В тариф входит:</p>
                                <ul className='about-list'>
                                    <li><img src="gal.svg" alt="gal"/> Все пункты тарифа Beginner</li>
                                    <li><img src="gal.svg" alt="gal"/> Экспорт истории</li>
                                    <li><img src="gal.svg" alt="gal"/> Рекомендации по приоритетам</li>
                                </ul>
                            </div>
                            <div className="btn-detail">
                                <button className='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="rate">
                        <div className="rate-header business">
                            <div className="rate-text">
                                <p>Business</p>
                                <p>Для корпоративных клиентов</p>
                            </div>
                            <div className="rate-icon">
                                <img src="laptop.svg" alt="business" />
                            </div>
                        </div>
                        <div className="rate-info">
                            <div className="info">
                                <span>2 379 ₽</span>
                                <span>3 700 ₽</span>
                                <br />
                                <br />
                            </div>
                            <div className="about-rate">
                                <p>В тариф входит:</p>
                                <ul className='about-list'>
                                    <li><img src="gal.svg" alt="gal"/> Все пункты тарифа Pro</li>
                                    <li><img src="gal.svg" alt="gal"/> Безлимитное количество запросов</li>
                                    <li><img src="gal.svg" alt="gal"/> Приоритетная поддержка</li>
                                </ul>
                            </div>
                            <div className="btn-detail">
                                <button className='btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ScanRates;