import React from 'react';
import styles from './style.module.css'

function News(props) {
    return (
        <div className={styles.news}>
            <p className={styles.newsDate}>{props.date}</p>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default News;