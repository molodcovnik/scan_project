import React from "react";

import { Routes, Route } from 'react-router-dom';

import MainPage from "./MainPage";
import AuthPage from "./AuthPage";

import '../styles/App.css';
import FirstPage from "./FirstPage";
import Search from "./Search";
import ResultsPage from "./ResultsPage";
import ErrorPage from "./ErrorPage";
import Access from "./Access";


function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<FirstPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="auth" element={<AuthPage/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="results" element={<ResultsPage/>}/>
                    <Route path="faq" element={<Access/>}/>
                    <Route path="*" element={<ErrorPage/>} />
                </Route>
                
            </Routes>
        </>
    )
}

export default App;