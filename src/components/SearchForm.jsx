import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
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

    async function handleSelect() {
        // console.log(`INN ${inn}`);
        // console.log(`Тональность ${tonality}`);
        // console.log(`Количество доков ${limit}`);

        // console.log(`Дата начала ${startDate.toJSON()}`);
        // console.log(`Дата конца ${endDate}`);

        // console.log(`Признак максимальной полноты ${maxFullness}`);
        // console.log(`Упоминания в бизнес-контексте ${inBusinessNews}`);
        // console.log(`Главная роль в публикации ${onlyMainRole}`);
        // console.log(`Публикации только с риск-факторами ${onlyWithRiskFactors}`);
        // console.log(`Включать технические новости рынков ${excludeTechNews}`);

        // console.log(`Включать анонсы и календари ${excludeAnnouncements}`);

        // console.log(`Включать сводки новостей ${excludeDigests}`);

        const urlHistograms = 'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms';

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        const data = {
            "issueDateInterval": {
                "startDate": `${startDate}`,
                "endDate": `${endDate}`,
              },
              "searchContext": {
                "targetSearchEntitiesContext": {
                  "targetSearchEntities": [
                    {
                      "type": "company",
                      "sparkId": null,
                      "entityId": null,
                      "inn": `${inn}`,
                      "maxFullness": `${maxFullness}`,
                      "inBusinessNews": `${inBusinessNews}`
                    }
                  ],
                  "onlyMainRole": `${onlyMainRole}`,
                  "tonality": `${tonality}`,
                  "onlyWithRiskFactors": `${onlyWithRiskFactors}`,
                  "riskFactors": {
                    "and": [],
                    "or": [],
                    "not": []
                  },
                  "themes": {
                    "and": [],
                    "or": [],
                    "not": []
                  }
                },
                "themesFilter": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
              },
              "attributeFilters": {
                "excludeTechNews": `${excludeTechNews}`,
                "excludeAnnouncements": `${excludeAnnouncements}`,
                "excludeDigests": `${excludeDigests}`
              },
              "similarMode": "duplicates",
              "limit": `${limit}`,
              "sortType": "sourceInfluence",
              "sortDirectionType": "desc",
              "intervalType": "month",
              "histogramTypes": [
                "totalDocuments",
                "riskFactors"
              ]
        }
        
        const response = await axios.post(urlHistograms, data, {headers})
        console.log(response);

        // console.log(data);

    }
    return (
        <>
        <form action="" className="search_form" method='POST'>
            <div className="text-fields">
                <label className='inn' htmlFor="inn">ИНН компании</label>
                <input type="text" name='inn' placeholder='10 цифр' onChange={(e) => setInn(e.target.value)}/>

                <label className='key' htmlFor="key">Тональность</label>
                <select name="key" className='key-tone' onChange={(e) => setTonality(e.target.value)}>
                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className='count-doc' htmlFor="count-doc">Количество документов в выдаче</label>
                <input type="text" placeholder='От 1 до 1000' onChange={(e) => setLimit(e.target.value)}/>

                <div className="range-search-inputs">
                    <p className='range-date'>Диапазон поиска</p>
                    <input type="date" name="startDate" onChange={(e) => setStartDate(e.target.value)}/>
                    <input type="date" name="endDate" onChange={(e) => setEndDate(e.target.value)}/>
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
                    <Link to="#" onClick={handleSelect} className={`btn find-btn ${inn != '' & startDate != '' & endDate != '' ? 'visible' : 'non-active' }`}>Поиск</Link>
                    <p>* Обязательные к заполнению поля</p>
                </div>
            </div>       
        </form>
        </>
    );
};

export default SearchForm;