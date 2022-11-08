import React from 'react';
import './style.css';
import './video1.png'
import './video2.png'
import './video3.png'
import './playIcon.png'
import {AiOutlinePlayCircle} from 'react-icons/ai';
function Video(props) {
    const {id, videoName, text} = props;
    return (
        <div className='video'>
            <img className='video-img' src={require('./'+videoName)} alt={'Video '+id}/>
            {/* <img className='video-play-icon' src={require('./playIcon.png')} alt='play icon'/> */}
            <AiOutlinePlayCircle className='video-play-icon' size={100}/>
            <p className='video-text'>{text}</p> 
        </div>
    );
}

export default Video;