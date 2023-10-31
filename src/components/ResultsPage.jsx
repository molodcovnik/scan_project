import React from 'react';

import LoaderTable from './LoaderTable';
import Loader from './Loader';
import axios from 'axios';
import SummarySlide from './SummarySlide';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../store';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import '../styles/ResultsPage.css';
import DocumentsList from './DocumentsList';



const ResultsPage = () => {

    const state = store.getState();

    const [totalDocuments, setTotalDocuments] = React.useState([]);
    const [riskFactors, setRiskFactors] = React.useState([]);
    const [totalData, setTotalData] = React.useState([]);
    const [listId, setListId] = React.useState([]);

    const [statusDocs, setStatusDocs] = React.useState('');

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
    const urlObjects = 'https://gateway.scan-interfax.ru/api/v1/objectsearch';

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

    const endpoints = [
        urlHistograms,
        urlObjects
    ];

    useEffect(() => {
        axios.all(endpoints.map(endpoint => axios.post(endpoint, data, {headers})))
        .then(axios.spread((histograms, objects) => {
            if (objects.statusText === "OK") {
                setStatusDocs(objects.statusText)
            }
            setTotalData(histograms.data.data);
            setTotalDocuments(histograms.data.data[0].data);
            setRiskFactors(histograms.data.data[1].data);

            objects.data.items.map((item) => {
                setListId(listId => [...listId, item.encodedId]);
                });
            }),
        )},
    []);

    let uniqueId = [...new Set(listId)];

    return (
        <>
            <div className="results-page">
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

                            {(totalDocuments.length && riskFactors.length) ? 
                                totalDocuments.map(item1 => {
                                    const matchingItem = riskFactors.find(item2 => item1.date === item2.date);
                                    if (matchingItem) {
                                        return (
                                            <SummarySlide key={item1.date} date={item1.date} total={item1.value} risks={matchingItem.value}/>
    
                                    )};
                                }): <p>No data</p>}
                    </div> 
                </div> : <LoaderTable/>}
                
            </div>
            </div>
            <button className='btn refresh-btn' onClick={() => {
                    location.reload();
                    location.href='/search'}}>Перезагрузка</button>
            {statusDocs === "OK" ? <div className="results-wrapper-block">
                <DocumentsList lists={uniqueId} status={statusDocs}/>
            </div> : <Loader/>}
        </>
    );
};

export default ResultsPage;