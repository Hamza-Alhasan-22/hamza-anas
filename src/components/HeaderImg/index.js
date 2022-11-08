import React from 'react';
import styles from './style.module.css'

function HeaderImg(props) {
    const {title, description, img} = props;
    return (
        <div className={styles.container}>
            <span className={styles.header}><h1>{title}</h1></span>
            <span><p>{description}</p></span>
            <img src={img} alt='header image'/>
        </div>
    );
}

export default HeaderImg;