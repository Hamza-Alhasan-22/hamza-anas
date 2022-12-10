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

export const NavBar = createContext(null);

function HomePage(props) {
    const [cardsArry, setCardsArry] = useState([]);
    const [favArryProducts, setFavArryProducts] = useState([]);
    const [close, setClose] = useState(false);
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <NavBar.Provider value={{
                    cards: [cardsArry, setCardsArry],
                    closeState: [close, setClose],
                    favList: [favArryProducts, setFavArryProducts]
                    }}>
                    <Global />
                </NavBar.Provider>
            </div>
            <Slider />
            <div className={styles.mainContainer}>
                <NavBar.Provider value={{
                    cards: [cardsArry, setCardsArry],
                    closeState: [close, setClose],
                    favList: [favArryProducts, setFavArryProducts]
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