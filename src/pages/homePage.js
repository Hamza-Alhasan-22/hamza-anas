import React, { createContext, useState } from 'react';
import styles from '../App.module.css'
//import About from '../components/About';
//import AsSeenOn from '../components/AsSeenOn';
//import Explore from '../components/Explore';
//import Footer from '../components/Footer';
//import Global from '../components/Nav/01-Global';
//import TopInfo from '../components/Nav/02-Top Info';
//import NewArrivals from '../components/NewArrivals';
//import Shop from '../components/Shop';
//import Slider from '../components/Slider';
//import Videos from '../components/Videos';

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

export const NavBar = createContext(null);

function HomePage(props) {
    const [numOfBags, setNumOfBags] = useState(0);
    const [numOfFavs, setNumOfFavs] = useState(0);
    const [cardsArry, setCardsArry] = useState([]);
    const [close, setClose] = useState(false);
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <NavBar.Provider value={{
                    cards: [cardsArry, setCardsArry],
                    closeState: [close, setClose],
                    Bags:[numOfBags, setNumOfBags],
                    Favs:[numOfFavs, setNumOfFavs]
                    }}>
                    <Global />
                </NavBar.Provider>
            </div>
            <Slider />
            <div className={styles.mainContainer}>
                <NavBar.Provider value={{
                    cards: [cardsArry, setCardsArry],
                    closeState: [close, setClose],
                    Bags:[numOfBags, setNumOfBags],
                    Favs:[numOfFavs, setNumOfFavs]
                    }}>
                    <NewArrivals />
                </NavBar.Provider>
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