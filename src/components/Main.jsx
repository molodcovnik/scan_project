import React from 'react';

import AboutService from './AboutService';
import AboutScan from './AboutScan';
import ScanRates from './ScanRates';

import '../styles/Main.css';

const Main = () => {
    return (
        <main className='main'>
            <AboutService/>
            <AboutScan/>
            <div className='sample-img'>
                <img src="group.svg" alt="image" />
            </div>
            <ScanRates/> 
        </main>
        
    );
};

export default Main;