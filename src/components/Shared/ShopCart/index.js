import React, { useState } from 'react';
import styles from './style.module.css'

function ShopCart(props) {
    const [isHover, setIsHover] = useState(false);
    const {id, image, description} = props;
    return (
        <div className={styles.cart} onMouseEnter={(e) => { setIsHover(true) }}
        onMouseLeave={(e) => { setIsHover(false) }}>
            <img className={styles.cartImg} src={image} alt={'image '+id}/>
            {isHover?<button className={styles.cartButton}>Shop Now</button>:<></>}
            <p className={styles.cartP}>{description}</p>
        </div>
    );
}

export default ShopCart;