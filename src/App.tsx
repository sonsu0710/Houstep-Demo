import React from 'react';
import './App.css';
import {Nav} from './components/nav/Nav';
import GlobalStyle from "./components/GlobalStyles";
import {BannerSlide} from "./components/swiper/MainSlide";
import {MainArticle} from "./components/main-article/MainArticle";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Nav/>
            <BannerSlide/>
            <MainArticle/>
        </>
    );
}

export default App;
