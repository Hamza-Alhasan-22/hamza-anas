import React, {useState, useContext} from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../pages/homePage.js'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

//favArryProducts: item :
//id: props.id,
//title: props.title,
//price: props.data.price,
//image: props.sideImgs,

function BagCard(props) {
    const { cards, closeState, favList } = useContext(NavBar);
    const [favArryProducts, setFavArryProducts] = favList;
    const [close, setClose] = closeState;
    const [cardsArry, setCardsArry] = cards;
    const deleteItem = (indexForRemoval) => {
        let ary2 = [...favArryProducts];
        ary2.splice(indexForRemoval, 1);
        setFavArryProducts(ary2);
    }
    const moveToBag = () =>{
        let arry1 = [...cardsArry];
        favArryProducts.map((item,index)=>{
            arry1.push({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: 1
            })
        })
        setCardsArry(arry1);
        setFavArryProducts([]);
    }
    return (
        <div className={styles.container}>
            <span className={styles.titleSpan}>
                <h1>Wish List</h1>
                <span className={styles.closeList} onClick={()=>setClose(false)}><AiOutlineCloseCircle size={40}/></span>
            </span>
            <div className={styles.carts}>
            {
                favArryProducts.map((item,index)=>{
                    return(
                        <div className={styles.cart}>
                            <img src={item.image[0]} alt={'cart image '+item.id} />
                            <span className={styles.cartData}>
                                <span className={styles.cartDiscription}>
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                </span>
                                <span className={styles.editSpan}>
                                    <button>EDIT</button>
                                    <span className={styles.trashIcon}><BsTrash onClick={()=>deleteItem(index)} /></span>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
            </div>
            <button className={styles.moveButton} onClick={()=>moveToBag()}>Move All to Bag</button>
        </div>
    );
}

export default BagCard;