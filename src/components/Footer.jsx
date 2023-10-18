import React from 'react';

import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logo-footer'>
                <img src="scan_logo_footer.svg" alt="logo" />
            </div>
            <div className="adress">
                <p>г. Москва, Цветной б-р, 40</p>
                <p>+7 495 771 21 11</p>
                <p>info@skan.ru</p>
                <br />
                <p>Copyright. 2022</p>
            </div>
            
        </footer>
    );
};

export default Footer;