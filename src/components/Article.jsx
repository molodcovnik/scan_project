import React from 'react';

import { useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import '../styles/Article.css';


const Artcle = (props) => {
    let year = props.article.ok.issueDate.slice(0, 4)
    let month = props.article.ok.issueDate.slice(5, 7)
    let day = props.article.ok.issueDate.slice(8, 10)

    return (
        <div className="article">
            <div className="article-header">
                <p>{`${day}.${month}.${year}`}</p>
                <p><a href={props.article.ok.url} target='_blank'>{props.article.ok.source.name}</a></p>
            </div>
            <div className="article-title">
                <h2>{props.article.ok.title.text}</h2>
                <div className="article-type">
                    <div className="type"><p>Технические новости</p></div>
                    <div className="type"><p>Технические новости</p></div>
                    <div className="type"><p>Технические новости</p></div>
                </div>
            </div>
            <div className="article-img">
                <img src="article.svg" alt="article-image" />
            </div>
            <div className="article-text">
                <p>SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                <br /><br />
                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.</p>
            </div>
            <div className="article-footer">
                <div className="article-btn">
                    <button className='btn read-origin'>Читать в источнике</button>
                </div>
                <p>{props.article.ok.attributes.wordCount} слова</p>
            </div>
            
        </div>
    );
};

export default Artcle;