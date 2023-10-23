import React from "react";

import { Routes, Route } from 'react-router-dom';

import MainPage from "./MainPage";
import AuthPage from "./AuthPage";
import Slider from "./Slider";

import '../styles/App.css';
import FirstPage from "./FirstPage";
import Search from "./Search";


function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<FirstPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="auth" element={<AuthPage/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="slider" element={<Slider/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;