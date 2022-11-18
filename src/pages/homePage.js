import React from 'react';
import styles from '../App.module.css'
import About from '../components/About';
import AsSeenOn from '../components/AsSeenOn';
import Explore from '../components/Explore';
import Footer from '../components/Footer';
import Global from '../components/Nav/01-Global';
import TopInfo from '../components/Nav/02-Top Info';
import NewArrivals from '../components/NewArrivals';
import Shop from '../components/Shop';
import Slider from '../components/Slider';
import Videos from '../components/Videos';

function HomePage(props) {
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <Global />
            </div>
            <Slider />
            <div className={styles.mainContainer}>
                <NewArrivals />
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