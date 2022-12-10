import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css'
import { NavBar } from '../../../pages/homePage.js'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function FavCard(props) {
    const { cards, closeState, favList } = useContext(NavBar);
    const [cardsArry, setCardsArry] = cards;
    const [close, setClose] = closeState;
    const [quantity, setQuantity] = useState(cardsArry.map(i => i.quantity));
    const handleQuantity = (check, ind) => {
        let ary = [...quantity];
        check == '+' ? ary[ind] = ary[ind] + 1 :
            ary[ind] == 1 && check == '-' ? ary[ind] = 1 :
                ary[ind] = ary[ind] - 1;
        setQuantity(ary);
    };
    useEffect(() => {
        let arry = [...cardsArry];
        arry.map((item,index)=>item.quantity=quantity[index]);
        setCardsArry(arry);
      }, [quantity]);
    const totalPrice = () => {
        let sum = 0;
        cardsArry.map((item, index) => {
            return (
                sum = sum + (item.price * quantity[index])
            )
        })
        return sum;
    }
    const deleteItem = (indexForRemoval) => {
        let ary2 = [...cardsArry];
        ary2.splice(indexForRemoval, 1);
        setCardsArry(ary2);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Your Cart ({cardsArry.length} items)</h1>
            <span className={styles.closeList} onClick={()=>setClose(false)}><AiOutlineCloseCircle size={40}/></span>
            <table className={styles.table}>
                <tr>
                    <td className={styles.tdItem}>Item</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
                {
                    cardsArry.map((item, index) => {
                        return (
                            <tr>
                                <td>
                                    <span className={styles.item}>
                                        <img src={item.image[0]} alt='cart img' />
                                        <h2>{item.title}</h2>
                                    </span>
                                </td>
                                <td>
                                    <p>${item.price}</p>
                                </td>
                                <td>
                                    <span className={styles.adjustSpan}>
                                        <button className={styles.adjustButton} onClick={() => { handleQuantity('-', index) }}>-</button>
                                        <button className={styles.qButton}>{quantity[index]}</button>
                                        <button className={styles.adjustButton} onClick={() => { handleQuantity('+', index) }}>+</button>
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.priceSpan}>
                                        <p>${(item.price * quantity[index]).toFixed(2)}</p>
                                        <AiOutlineCloseCircle className={styles.deleteIcon} onClick={() => deleteItem(index)} />
                                    </span>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div className={styles.total}>
                <p>Total Price: ${totalPrice().toFixed(2)}</p>
                <button className={styles.checkOut}>Check Out</button>
            </div>
        </div>
    );
}

export default FavCard;