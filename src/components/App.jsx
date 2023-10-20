import React from "react";

import { Routes, Route } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import AuthPage from "./AuthPage";


import '../styles/App.css';
import FirstPage from "./FirstPage";


function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<FirstPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="auth" element={<AuthPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;