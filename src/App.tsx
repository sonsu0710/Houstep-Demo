import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav} from './components/nav/Nav';
import GlobalStyle from "./components/GlobalStyles";
import {BannerSlide} from "./components/swiper/MainSlide";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Nav/>
            <BannerSlide/>
        </>
    );
}

export default App;
