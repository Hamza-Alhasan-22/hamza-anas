import React from 'react';
import styles from './style.module.css';
//import './playIcon.png'
import {AiOutlinePlayCircle} from 'react-icons/ai';
function Video(props) {
    const {id, videoName, text} = props;
    return (
        <div className={styles.video}>
            <img className={styles.videoImg} src={videoName} alt={'Video '+id}/>
            <AiOutlinePlayCircle className={styles.videoPlayIcon} size={100}/>
            <p className={styles.videoText}>{text}</p> 
        </div>
    );
}

export default Video;