import React from 'react';

import AboutService from './AboutService';
import AboutScan from './AboutScan';
import ScanRates from './ScanRates';
import '../styles/MainPage.css';
import Header from './Header';
import Footer from './Footer';

const MainPage = () => {
    return (
        <>  
            <AboutService/>
            <AboutScan/>
            <div className='sample-img'>
                <img src="group.svg" alt="image" />
            </div>
            <ScanRates/>
        </>
    );
};

export default MainPage;