import React from 'react';

import Slider from './Slider';

import '../styles/AboutScan.css';

const AboutScan = () => {
    return (
        <div className="about-scan-wrapper">
                <p>почему именно мы</p>
                <div className="slider-wrapper">
                    <Slider/>
                    
                </div>
                
            </div>
    );
};

export default AboutScan;