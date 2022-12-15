import React, { createContext, useContext, useState } from 'react';
import styles from "./style.module.css";
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import {navBar} from './data.js'
import ShopOptions from './shop.js'
import {NavBar} from '../../../App.js'
import FavCard from '../../Shared/FavCard';
import BagCard from '../../Shared/BagCard';

function Global() {
    const {cards, closeState, favList} = useContext(NavBar);
    const [cardsArry, setCardsArry] = cards;
    const [favArryProducts, setFavArryProducts] = favList;
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
    const numOfFavs = () =>{
        return favArryProducts.length;
    }
    const numOfBags = () =>{
        let num = 0;
        cardsArry.map((item,index)=>num=num+item.quantity);
        return num;
    }
    const [favIsClicked, setFavIsClicked] = useState(false);
    const [BagIsClicked, setBagIsClicked] = useState(false);
    const iconContainer = <div className={styles.iconContainer}>
        <p className={styles.titleButtonTxt}>Login</p>
        <button><BsSearch size={20} /></button>
        <button onClick={()=>{setFavIsClicked(!favIsClicked);setClose(true);setBagIsClicked(false)}}><MdFavoriteBorder size={20} />{numOfFavs()!=0?<p className={styles.numFavs}>{numOfFavs()}</p>:<></>}</button>
        <button onClick={()=>{setBagIsClicked(!BagIsClicked);setClose(true);setFavIsClicked(false)}}><BsFillBagFill size={20} />{numOfBags()!=0?<p className={styles.numBags}>{numOfBags()}</p>:<></>}</button>
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
            <div className={styles.navbarMobile}>
                <h2 id={styles.matter}>matter</h2>
                <span className={styles.faTimesIcon} onClick={() => handleClicked()}>{clicked ? <FaTimes size={30} /> : <FaBars size={30} />}</span>
                {clicked ?
                <div className={styles.containerMobile}>
                    {
                        navBar.map((item) => {
                            return (headerTitle(item))
                        })
                    }
                </div> : <></>}
            </div>
            {iconContainer}
            {favIsClicked && close ? <BagCard/>:<></>}
            {BagIsClicked && close ? <FavCard/>:<></>}
        </div>
    );
}

export default Global;