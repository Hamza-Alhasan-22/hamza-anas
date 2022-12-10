import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import ShopCart from '../Shared/ShopCart';
import styles from './style.module.css'
import {products} from './shopData.js'

function Shop(props) {
    return (
        <div className={styles.shopContainer}>
            <SectionTitle title='Shop'/>
            <div className={styles.shopCarts}>
                 {
                    products.map(item=>{
                        return(
                            <ShopCart {...item}/>
                        )
                    })
                 }
            </div>
        </div>
    );
}

export default Shop;