import React from 'react';

import { useEffect } from 'react';
import axios from 'axios';

import '../styles/HeaderAuth.css';
import { Link } from 'react-router-dom';

const HeaderAuth = (props) => {
    // console.log(props.token);
    const [companyCount, setCompanyCount] = React.useState(0);
    const [companyLimit, setCompanyLimit] = React.useState(0);

    const url = 'https://gateway.scan-interfax.ru/api/v1/account/info';

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then(response => {
            console.log(response);
            setCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
            setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
       })
        .catch(error => console.log(error));
    }, [props.token]);

    return (
        <div className="header-auth">   
            <div className="user-limit">
                {/* <p>Использовано компаний <span className='use limit'>1</span></p> */}
                <div><span className='opacity'>Использовано компаний </span><span className='use limit'>{companyCount}</span></div>
                <div><span className='opacity'>Лимит по компаниям </span><span className='max limit'>{companyLimit}</span></div>
            </div>
            <div className="user-info">
                <div className="user-name">
                    <p>Alexey P.</p>
                    <Link to={'/auth'} onClick={(e) => {localStorage.removeItem('token');
                    location.reload()}} className='logout'>Выйти</Link>
                </div>
                <div className="user-avatar">
                    <img src="avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    );
};

export default HeaderAuth;