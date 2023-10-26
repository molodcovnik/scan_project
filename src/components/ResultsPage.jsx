import React from 'react';

import LoaderTable from './LoaderTable';
import axios from 'axios';
import SummarySlide from './SummarySlide';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../store';

import '../styles/ResultsPage.css';

const ResultsPage = () => {
    const [totalDocuments, setTotalDocuments] = React.useState([]);
    const [riskFactors, setRiskFactors] = React.useState([]);
    const [totalData, setTotalData] = React.useState([]);
    const state = store.getState();

    let inn = state.inn.at(1);
    let startDate = state.startDate.at(1);
    let endDate = state.endDate.at(1);
    let limit = state.limit.at(1);
    let maxFullness = state.maxFullness.at(1);
    let inBusinessNews = state.inBusinessNews.at(1);
    let onlyMainRole = state.onlyMainRole.at(1);
    let tonality = state.tonality.at(1);
    let onlyWithRiskFactors = state.onlyWithRiskFactors.at(1);
    let excludeTechNews = state.excludeTechNews.at(1);
    let excludeAnnouncements = state.excludeAnnouncements.at(1);
    let excludeDigests = state.excludeDigests.at(1);

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
    
    if (!totalDocuments.length) {
        axios.post(urlHistograms, data, {headers})
        .then(res => {
            console.log(res.data.data);
            setTotalData(res.data.data);
            setTotalDocuments(res.data.data[0].data);
            setRiskFactors(res.data.data[1].data);

        })
        .catch(err => {
            console.log(err);
        })};


    return (
        <>
            <div className="results-page-container">
                <div className="info-block">
                    <div className="info-text">
                        <h1>Ищем. Скоро <br />будут результаты</h1>
                        <p>Поиск может занять некоторое время, <br />просим сохранять терпение.</p>
                    </div>
                    <div className="info-image">
                        <img src="group117.svg" alt="find" />
                    </div>
                </div>
                {totalDocuments.length > 0 ? <div className="gen-summary-wrapper">
                    <h2>Общая сводка</h2>
                    <p>{inn}</p>
                    <p>Найдено {totalDocuments.length} вариантов</p>
                     <div className="gen-summary">

                            <div className="summary-head">
                                <p>Период</p>
                                <p>Всего</p>
                                <p>Риски</p>
                            </div>
                            {/* {totalDocuments.map((total) =>
                                <SummarySlide key={total.date} total={total}/>
                            )} */}
                            {(totalDocuments.length && riskFactors.length) ? 
                                totalDocuments.map(item1 => {
                                    const matchingItem = riskFactors.find(item2 => item1.date === item2.date);
                                    if (matchingItem) {
                                        return (
                                            <SummarySlide key={item1.date} date={item1.date} total={item1.value} risks={matchingItem.value}/>
    
                                    )};
                                }): <p>No data</p>
                            }
                            
                             
                    </div> 
                </div> : <LoaderTable/>}
                <button className='btn refresh-btn' onClick={() => {
                    location.reload();
                    location.href='/search'}}>Перезагрузка</button>
            </div>
            <div className="articles-wrapper">
                <h2>Articles</h2>
            </div>
        </>
    );
};

export default ResultsPage;