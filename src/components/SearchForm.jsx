import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/SearchForm.css';



const SearchForm = () => {

    const options = [
        {
            value: 1,
            label: 'Любая',
        },
        {
            value: 2,
            label: 'Позитивная',
        },
        {
            value: 3,
            label: 'Негативная',
        },
    ]

    const [chek1, setChek1] = React.useState('');
    const [chek2, setChek2] = React.useState('');

    const [chek3, setChek3] = React.useState('');

    const [tin, setTin] = React.useState('');
    const [key, setKey] = React.useState('');

    function handleSelect() {
        console.log(tin, chek1, chek2, chek3, key)
    }
    return (
        <>
        <form action="" className="search_form" method='POST'>
            <div className="text-fields">
                <label className='tin' htmlFor="tin">ИНН компании</label>
                <input type="text" name='tin' placeholder='10 цифр' onChange={(e) => setTin(e.target.value)}/>

                <label className='key' htmlFor="key">Тональность</label>
                <select name="key" className='key-tone' onChange={(e) => setKey(e.target.value)}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className='count-doc' htmlFor="count-doc">Количество документов в выдаче</label>
                <input type="text" placeholder='От 1 до 1000'/>

                <div className="range-search-inputs">
                    <p className='range-date'>Диапазон поиска</p>
                    <input type="date" name="begin-date"/>
                    <input type="date" name="end-date"/>
                </div>
            </div> 
            <div className="checkbox-fields">
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-1" value={'chek1'} onChange={(e) => setChek1(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-1">Признак максимальной полноты</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-2" value={'check2'} onChange={(e) => setChek2(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-2">Упоминания в бизнес-контексте</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-3" value={'check3'} onChange={(e) => setChek3(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-3">Главная роль в публикации</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-4"/>
                    <label className='checkbox-label' htmlFor="checkbox-4">Публикации только с риск-факторами</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-5"/>
                    <label className='checkbox-label' htmlFor="checkbox-5">Включать технические новости рынков</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-6"/>
                    <label className='checkbox-label' htmlFor="checkbox-6">Включать анонсы и календари</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-7"/>
                    <label className='checkbox-label' htmlFor="checkbox-7">Включать сводки новостей</label>
                </div>
               
                <div className="find-button-block">
                    <Link to="#" onClick={handleSelect} className="btn find-btn">Поиск</Link>
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>       
        </form>
        </>
    );
};

export default SearchForm;