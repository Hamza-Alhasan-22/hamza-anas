import React, { createContext, useContext, useState } from 'react';
import styles from "./style.module.css";
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import {navBar} from './data.js'
import ShopOptions from './shop.js'
import {NavBar} from '../../../pages/homePage.js'
import FavCard from '../../Shared/FavCard';

function Global() {
    const {cards, closeState, Bags, Favs} = useContext(NavBar);
    const [numOfBags, setNumOfBags] = Bags;
    const [numOfFavs, setNumOfFavs] = Favs;
    const [cardsArry, setCardsArry] = cards;
    const [close, setClose] = closeState;

    const [showOptions, setShowOptions] = useState(navBar.map(i=>false));
    const handleShowOptions = (index)=>{
      setShowOptions(showOptions.map((item,i)=>(i==index ? !item : false)))  
    };
    const arrow = (direction) =>{
        const arrowSympole = '>';
        const arrowStyle = {
            transform: direction==='up'?'rotate(-90deg)':'rotate(90deg)',
        }
        return(<p style={arrowStyle}>{arrowSympole}</p>)
    }
    const headerTitle = (header) => {
        return(
            <div className={styles.titleButton}>
                <button className={showOptions[header.id-1] ? `${styles.titleButtonTxt} ${styles.redActive}`:styles.titleButtonTxt}
                onClick={() => handleShowOptions(header.id-1)}>{header.title}{showOptions[header.id-1] ? arrow('up'):arrow('down')}</button>
                {
                    showOptions[header.id-1] ? <ShopOptions />  : <></>
                }
            </div>
        )
    }
    const [favIsClicked, setFavIsClicked] = useState(false);
    const [BagIsClicked, setBagIsClicked] = useState(false);
    const iconContainer = <div className={styles.iconContainer}>
        <p className={styles.titleButtonTxt}>Login</p>
        <button><BsSearch size={20} /></button>
        <button onClick={()=>{setFavIsClicked(!favIsClicked);setClose(true)}}><MdFavoriteBorder size={20} />{numOfFavs?<p className={styles.numFavs}>{numOfFavs}</p>:<></>}</button>
        <button onClick={()=>{setBagIsClicked(!BagIsClicked);setClose(true)}}><BsFillBagFill size={20} />{numOfBags?<p className={styles.numBags}>{numOfBags}</p>:<></>}</button>
    </div>;
    const bagDiv = <div>

    </div>;

    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    };

    return (
        <div className={styles.navBarDiv}>
            <div className={styles.titleContainer}>
                <h2 id={styles.matter}>matter</h2>
                {
                    navBar.map((item) => {
                        return (
                            headerTitle(item)
                        )
                    })
                }
            </div>
            {iconContainer}
            {favIsClicked && close ?<FavCard/>:<></>}
            {BagIsClicked && close ?bagDiv:<></>}
            {/* <div className={styles.navbarMobile}>
                {
                    clicked ? <FaTimes size={30} onClick={() => handleClicked()} /> : <FaBars size={30} onClick={() => handleClicked()} />
                }
                {clicked ?
                <div className={styles.containerMobile}>
                    {iconContainer}
                    <div className={styles.titlesMobile}>
                    {
                        navBar.map((item) => {
                            return (headerTitle(item.title, item.options, item.id))
                        })
                    }
                    </div>
                </div> : <></>}
            </div> */}
        </div>
    );
}

export default Global;