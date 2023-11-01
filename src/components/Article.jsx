import React from 'react';
import he from 'he';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import '../styles/Article.css';


const Artcle = (props) => {
    let year = props.article.ok.issueDate.slice(0, 4)
    let month = props.article.ok.issueDate.slice(5, 7)
    let day = props.article.ok.issueDate.slice(8, 10)

    let xmlString = props.article.ok.content.markup;

    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, "application/xml");

    const html = document.createElement('div');
    html.appendChild(doc.documentElement.cloneNode(true));
    const finalHtml = html.innerHTML;

    const decodeHtmlEntities = (str) => {
        return he.decode(str, 'utf8');
    }

    const stripHtmlTags = (str) => {
        return str.replace(/<\/?[^>]+(>|$)/g, '');
    }

    let cleanText = stripHtmlTags(decodeHtmlEntities(finalHtml));
    return (
        <div className="article">
            <div className="article-header">
                <p>{`${day}.${month}.${year}`}</p>
                <p><a href={props.article.ok.url} target='_blank'>{props.article.ok.source.name}</a></p>
            </div>
            <div className="article-title">
                <h2>{props.article.ok.title.text}</h2>
                <div className="article-type">
                    <div className={props.article.ok.attributes.isTechNews ? `type isTechNews` : `hidden`}><p>Технические новости</p></div>
                    <div className={props.article.ok.attributes.isAnnouncement ? "type isAnnouncement" : 'hidden'}><p>Анонсы и события</p></div>
                    <div className={props.article.ok.attributes.isDigest ? "type isDigest" : 'hidden'}><p>Сводки новостей</p></div>
                </div>
            </div>
            <div className="article-img">
                <img src="article.svg" alt="article-image" />
            </div>
            <div className="article-text">
                {cleanText}
            </div>
            <div className="article-footer">
                <div className="article-btn">
                    <button className='btn read-origin' onClick={() => {
                        window.open(props.article.ok.url);
                    }}>Читать в источнике</button>
                </div>
                <p>{props.article.ok.attributes.wordCount} слова</p>
            </div>
            
        </div>
    );
};

export default Artcle;