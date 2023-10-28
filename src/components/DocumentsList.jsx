import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Article from './Article';
import '../styles/DocumentsList.css';
import Loader from './Loader';


const DocumentsList = (props) => {

    const urlDocuments = 'https://gateway.scan-interfax.ru/api/v1/documents';

    // console.log(props.lists.slice(0, 10));
    const [articles, setArticles] = React.useState([]);

    const [startPage, setStartPage] = React.useState(0);
    const [endPage, setEndPage] = React.useState(10);

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    let data = {
        ids: props.lists.slice(startPage, endPage),
      }

    console.log(data);
    
    function getNextPage() {
        setStartPage(startPage + 10);
        setEndPage(endPage + 10);
        console.log(data);

    }
    
    // if (props.lists) {
    //     axios.post(urlDocuments, data, {headers})
    //     .then(res => {
    //         setArticles(res.data);

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };

    // useEffect(() => {
    //     axios.post(urlDocuments, data, {headers})
    //     .then(res => {
    //         console.log(res.data);
    //         // setArticles(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }, []);
    


    return (
        <>
            <div className="articles-title">
                <h2>Список документов</h2>
                <div className="articles-wrapper">
                    {/* {articles ? 
                        articles.map((article, index) => (
                            <Article key={article.ok.id} article={article} />
                            
                        )) : <Loader/>} */}
                    <Loader/>
                        
                    {/* {props.lists ? props.lists.map(item => (
                        <Article key={item.encodedId} id={item.encodedId}/>
                    )) : <Loader/>};     */}
                </div>
                <button className='btn load-more' onClick={getNextPage}>Показать еще</button>

            </div>
        </>
    );
};

export default DocumentsList;