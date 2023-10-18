import React from 'react';

import '../styles/HeaderAuth.css';

const HeaderAuth = () => {
    return (
        <div className="header-auth">   
            <div className="user-limit">
                <p>Использовано компаний <span className='use limit'>34</span></p>
                <p>Лимит по компаниям <span className='max limit'>100</span></p>
            </div>
            <div className="user-info">
                <div className="user-name">
                    <p>Alexey P.</p>
                    <a href="#" className='logout'>Выйти</a>
                </div>
                <div className="user-avatar">
                    <img src="avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    );
};

export default HeaderAuth;