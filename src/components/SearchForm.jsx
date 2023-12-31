import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import store from '../store';

import '../styles/SearchForm.css';



const SearchForm = () => {

    const options = [
        {
            id: 1,
            value: 'any',
            label: 'Любая',
        },
        {
            id: 2,
            value: 'positive',
            label: 'Позитивная',
        },
        {
            id: 3,
            value: 'negative',
            label: 'Негативная',
        },
    ]

    const [maxFullness, setMaxFullness] = React.useState(false);
    const [inBusinessNews, setInBusinessNews] = React.useState(false);

    const [onlyMainRole, setOnlyMainRole] = React.useState(false);

    const [inn, setInn] = React.useState('');
    const [tonality, setTonality] = React.useState('any');
    const [limit, setLimit] = React.useState(10);
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = React.useState(false);
    const [excludeTechNews, setExcludeTechNews] = React.useState(true);
    const [excludeAnnouncements, setExcludeAnnouncements] = React.useState(true);
    const [excludeDigests, setExcludeDigests] = React.useState(true);

    const [innError, setInnError] = React.useState(false);
    const [limitError, setLimitError] = React.useState(false);
    const [startDateError, setStartDateError] = React.useState(false);
    const [endDateError, setEndDateError] = React.useState(false);
    const [differenceError, setDifferenceError] = React.useState(false);

    let now = new Date();

    async function handleSelect() {

        store.dispatch({type: 'ADD_INN', payload: inn});
        store.dispatch({type: 'ADD_TONALITY', payload: tonality});
        store.dispatch({type: 'ADD_LIMIT', payload: limit});
        store.dispatch({type: 'ADD_START_DATE', payload: startDate});
        store.dispatch({type: 'ADD_END_DATE', payload: endDate});
        store.dispatch({type: 'ADD_ONLY_MAIN_ROLE', payload: onlyMainRole});
        store.dispatch({type: 'ADD_ONLY_WITH_RISK_FACTORS', payload: onlyWithRiskFactors});
        store.dispatch({type: 'ADD_EXCLUDE_TECH_NEWS', payload: excludeTechNews});
        store.dispatch({type: 'ADD_EXCLUDE_ANNOUNCEMENTS', payload: excludeAnnouncements});
        store.dispatch({type: 'ADD_EXCLUDE_DIGESTS', payload: excludeDigests});
        store.dispatch({type: 'ADD_MAX_FULLNESS', payload: maxFullness});
        store.dispatch({type: 'ADD_IN_BUSINESS_NEWS', payload: inBusinessNews});

    }
    return (
        <>
        <form action="" className="search_form" method='POST'>
            <div className="text-fields">
                <label className='inn' htmlFor="inn">ИНН компании</label>
                <input type="text" className={innError ? 'error-input' : ''}
                        name='inn' placeholder='10 цифр'
                        onChange={(e) => {
                            let pattern = new RegExp("^[0-9]{10}$");
                            if (pattern.test(e.target.value)) {
                                setInn(e.target.value);
                                setInnError(false);
                            } else {
                                setInnError(true);
                            }

                            }}/>
                {innError ? <span className='error'>Введите корректные данные</span> : ''}

                <label className='key' htmlFor="key">Тональность</label>
                <select name="key" className='key-tone' onChange={(e) => setTonality(e.target.value)}>
                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className='count-doc' htmlFor="count-doc">Количество документов в выдаче</label>
                <input type="text" placeholder='От 1 до 1000' className={limitError ? 'error-input' : ''}
                    onChange={(e) => {
                        let pattern = new RegExp("^([1-9][0-9]{0,2}|1000)$");
                            if (pattern.test(e.target.value)) {
                                setLimit(e.target.value);
                                setLimitError(false);
                            } else {
                                setLimitError(true);
                            }

                        }}/>
                {limitError ? <span className='error'>От 1 до 1000</span> : ''}
                        
                <div className="range-search-inputs">
                    <p className='range-date'>Диапазон поиска</p>
                    <input type="date" name="startDate" className={startDateError || differenceError? 'error-input' : ''}
                        onChange={(e) => {
                            // setStartDate(e.target.value);
                            let start = new Date(e.target.value);
                            if (now - start <= 0) {
                                setStartDateError(true);
                            } else {
                                setStartDateError(false);
                                setStartDate(e.target.value)}
                            }}/>
                    
                    <input type="date" name="endDate" className={endDateError || differenceError? 'error-input' : ''}
                        onChange={(e) => {
                            let end = new Date(e.target.value);
                            if (now - end <= 0) {
                                setEndDateError(true);
                            } else {
                                setEndDateError(false);
                                setEndDate(e.target.value)}
                            
                            if (new Date(startDate) > end) {
                                setDifferenceError(true);
                            } else {
                                setDifferenceError(false);
                            }
                            }}/>
                </div>

                <div className="range-search-inputs-errors">
                    <div className="start-date-error">{startDateError ? <span className='error'>Дата не может быть больше текущей</span> : ''}</div>
                    <div className="end-date-error">{endDateError ? <span className='error'>Дата не может быть больше текущей</span> : ''}</div>
                    <div className="difference-time">{differenceError ? <span className='error'>Дата начала не может быть позже даты конца</span> : ''}</div>
                </div>
            </div> 
            <div className="checkbox-fields">
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-1" value={true} onChange={(e) => setMaxFullness(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-1">Признак максимальной полноты</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-2" value={true} onChange={(e) => setInBusinessNews(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-2">Упоминания в бизнес-контексте</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-3" value={true} onChange={(e) => setOnlyMainRole(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-3">Главная роль в публикации</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-4" value={true} onChange={(e) => setOnlyWithRiskFactors(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-4">Публикации только с риск-факторами</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-5" value={false} onChange={(e) => setExcludeTechNews(e.target.value)} />
                    <label className='checkbox-label' htmlFor="checkbox-5">Включать технические новости рынков</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-6" value={false} onChange={(e) => setExcludeAnnouncements(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-6">Включать анонсы и календари</label>
                </div>
                <div className="chekbox-input">
                    <input type="checkbox" id="checkbox-7" value={false} onChange={(e) => setExcludeDigests(e.target.value)}/>
                    <label className='checkbox-label' htmlFor="checkbox-7">Включать сводки новостей</label>
                </div>
               
                <div className="find-button-block">
                    <Link to="/results" onClick={handleSelect} className={`btn find-btn ${inn != '' & startDate != '' & endDate != '' ? 'visible' : 'non-active' }`}>Поиск</Link>

                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>       
        </form>
        </>
    );
};

export default SearchForm;