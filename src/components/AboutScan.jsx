import React from 'react';

import '../styles/AboutScan.css';

const AboutScan = () => {
    return (
        <div className="about-scan-wrapper">
                <p>почему именно мы</p>
                <div className="slider-wrapper">
                    <div className="icon-left">
                        <img src="icon_left.svg" alt="left" />
                    </div>
                    <div className="slide">
                        <div className="slider-image">
                            <img src="timer.svg" alt="timer" />
                        </div>
                        <div className="slider-text">
                            <p>Высокая и оперативная скорость <br />обработки заявки</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-image">
                            <img src="loop.svg" alt="loop" />
                        </div>
                        <div className="slider-text">
                            <p>Огромная комплексная база <br />данных, обеспечивающая <br />объективный ответ на запрос</p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-image">
                            <img src="depend.svg" alt="depend" />
                        </div>
                        <div className="slider-text">
                            <p>Защита конфеденциальных сведений, <br />не подлежащих разглашению по <br />федеральному законодательству</p>
                        </div>
                    </div>
                    <div className="icon-right">
                        <img src="icon_right.svg" alt="right" />
                    </div>
                </div>
                
            </div>
    );
};

export default AboutScan;