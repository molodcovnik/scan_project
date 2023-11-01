import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Article from './Article';
import '../styles/DocumentsList.css';
import Loader from './Loader';


const DocumentsList = (props) => {
    const urlDocuments = 'https://gateway.scan-interfax.ru/api/v1/documents';

    const [articles, setArticles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [startPage, setStartPage] = React.useState(-10);
    const [endPage, setEndPage] = React.useState(0);

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    let data = {
        ids: props.lists.slice(startPage, endPage),
    }

    
    function getNextPage() {
        setStartPage(startPage + 10);
        setEndPage(endPage + 10);
        setCurrentPage(currentPage + 1);    
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: "smooth",
          });
    }

   
    useEffect (() => {
        axios.post(urlDocuments, data, {headers})
        .then(res => {
            setArticles(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [startPage, endPage]);

    return (
        <>
            <div className="articles-title">
                <h2>Список документов</h2>
                <div className="articles-wrapper">

                    {articles.map((article, index) => (
                        <Article key={article.ok.id} article={article} />
                        
                    ))}
                </div>
                <button className='btn load-more' onClick={getNextPage}>{currentPage == 0 ? 'Показать статьи' : 'Показать еще'}</button>

            </div>
        </>
    );
};

export default DocumentsList;