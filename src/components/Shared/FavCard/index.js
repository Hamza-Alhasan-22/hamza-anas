import React, {useContext, useState} from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../pages/homePage.js'

function FavCard(props) {
    const {cards, closeState, Bags, Favs} = useContext(NavBar);
    //const [numOfBags, setNumOfBags] = Bags;
    //const [numOfFavs, setNumOfFavs] = Favs;
    const [cardsArry, setCardsArry] = cards;
    //const [close, setClose] = closeState;
    // const id = props.id;
    // const title = props.title;
    // const price = props.price;
    // const image = props.image;
    // const quantity = props.quantity;
    const [quantity, setQuantity] = useState(cardsArry.map(i => 1));
    const handleQuantity = (check, ind) => {
        let ary = [...quantity];
        check == '+' ? ary[ind] = ary[ind] + 1 :
            ary[ind] == 1 && check == '-' ? ary[ind] = 1 :
                ary[ind] = ary[ind] - 1;
        setQuantity(ary);
    };
    const totalPrice = () =>{
        let sum = 0;
        cardsArry.map((item,index)=>{
            return(
                sum = sum + (item.price*quantity[index])
            )
        })
        return sum;
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Your Cart ({cardsArry.length} items)</h1>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <p>Item</p>
                    {
                        cardsArry.map(i=>{
                            return(
                                <span className={styles.item}>
                                    <img src={i.image[0]} alt='cart img' />
                                    <h2>{i.title}</h2>
                                </span>
                            )
                        })
                    }
                </div>
                <div className={styles.column}>
                    <p>Price</p>
                    {
                        cardsArry.map(i => <p>${i.price}</p>)
                    }
                </div>
                <div className={styles.column}>
                    <p>Quantity</p>
                    {
                        cardsArry.map((item, index) => {
                            return (
                                <span className={styles.adjustSpan}>
                                    <button className={styles.adjustButton} onClick={() => { handleQuantity('-',index) }}>-</button>
                                    <button className={styles.qButton}>{quantity[index]}</button>
                                    <button className={styles.adjustButton} onClick={() => { handleQuantity('+',index) }}>+</button>
                                </span>
                            )
                        })
                    }
                </div>
                <div className={styles.column}>
                    <p>Total</p>
                    {
                        cardsArry.map((item,index)=>{
                            return(
                                <p>${(item.price*quantity[index]).toFixed(2)}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.total}>
                <p>Total Price: ${totalPrice().toFixed(2)}</p>
                <button className={styles.checkOut}>Check Out</button>
            </div>
        </div>
    );
}

export default FavCard;