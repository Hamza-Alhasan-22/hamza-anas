import React from 'react';
import './style.css'

function News(props) {
    return (
        <div className='news'>
            <p className='news-date'>{props.date}</p>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default News;