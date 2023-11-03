import React from 'react';
import { redirect } from 'react-router-dom';
import SearchForm from './SearchForm';
import '../styles/Search.css';

const Search = () => {
    const token = localStorage.getItem('token');
    if(token){
        return (
            <>  
                <div className="search-wrapper">
                    <div className="search-main-container">
                        <h1>найдите необходимые данные в пару кликов.</h1>
                        <p>Задайте параметры поиска.</p>
                        <p> Чем больше заполните, тем точнее поиск</p>
                        <SearchForm />
                    </div>
                    <div className="search-image">
                        <div className="pic"><img src="document.svg" alt="document" /></div>
                        <div className="pic"><img src="folders.svg" alt="folders" /></div>
                        <div className="pic"><img src="rocket.svg" alt="rocket" /></div>
                    </div>
                </div>
            </>
        );
    } else {
        location.href = '/auth';
    }
};  

export default Search;