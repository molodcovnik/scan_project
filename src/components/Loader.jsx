import React from 'react';

import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className='rot-block'>
            <img className='rot' src="spiner.svg" alt="load" />
        </div>
    );
};

export default Loader;