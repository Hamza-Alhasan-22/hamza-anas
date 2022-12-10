import React, { useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import SectionTitle from '../Shared/SectionTitle';
import {arrivals,popUpData} from './data';
function NewArrivals(props) {
    return (
        <div className={styles.container}>
            <SectionTitle title='Featured' />
            <div className={styles.gridContainer}>
                {arrivals.map((item,i) => {
                    return (
                        <Card cardData={item} popupData={popUpData[i]} />
                    )
                })}
            </div>
        </div>
    );
}

export default NewArrivals;