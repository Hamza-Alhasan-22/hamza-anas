import React, { createContext, useState } from 'react';
import styles from '../App.module.css'

const About = React.lazy(()=>import('../components/About'));
const AsSeenOn = React.lazy(()=>import('../components/AsSeenOn'));
const Explore = React.lazy(()=>import('../components/Explore'));
const Footer = React.lazy(()=>import('../components/Footer'));
const Global = React.lazy(()=>import('../components/Nav/01-Global'));
const TopInfo = React.lazy(()=>import('../components/Nav/02-Top Info'));
const NewArrivals = React.lazy(()=>import('../components/NewArrivals'));
const Shop =React.lazy(()=>import('../components/Shop'));
const Slider = React.lazy(()=>import('../components/Slider'));
const Videos =React.lazy(()=>import('../components/Videos'));

function HomePage(props) {
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <Global />
            </div>
            <Slider />
            <div className={styles.mainContainer}>
                <NewArrivals/>
                <About />
                <Explore />
                <Shop />
                <Videos />
                <AsSeenOn />
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;