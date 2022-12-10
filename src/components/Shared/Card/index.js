import React, { useState } from 'react';
import NewTag from '../NewTag';
import styles from './style.module.css'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';

function Card(props) {
    const { cardData, popupData } = props;
    const tag = (check) => {
        let x;
        check === 'True' ? x = <NewTag /> : x = <></>
        console.log(x)
        return (
            x
        )
    };
    const [isHover, setIsHover] = useState(0)
    const Modal = (stuf) => (
        <Popup
            trigger={isHover ? <button className={styles.cardButton}>QUICK VIEW</button> : null} modal>
            {stuf}
        </Popup>
    );
    return (
        <div className={styles.card} onMouseEnter={(e) => { setIsHover(true) }}
            onMouseLeave={(e) => { setIsHover(false) }}>
            <img src={cardData.image} alt={'img card ' + cardData.id} className={styles.cardImg} />
            {
                cardData.newTag === 'active' ? tag('True') : tag('False')
            }
            <p className={styles.cardDescription}>
                {cardData.description}
            </p>
            <p className={styles.cardPrice}>
                {cardData.price}
            </p>
            {Modal(<PopOut {...popupData} />)}
        </div>
    );
}

export default Card;