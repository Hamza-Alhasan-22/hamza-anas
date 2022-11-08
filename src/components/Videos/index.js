import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Video from '../Shared/Video';
import './style.css'
function Videos() {
    const videos = [
        {
            id: 1,
            videoName: 'video1.png',
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            videoName: 'video2.png',
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            videoName: 'video3.png',
            text: 'Lorem ipsum dolor sit amet'
        }
    ];
    return (
        <div className='video-container'>
            <SectionTitle title='Recommended Videos'/>
            <div className='videos'>
                {
                    videos.map(item=>{
                        return(
                            <Video {...item}/>
                        )
                    })
                }
            </div>
            <button className='video-button'>Show More</button>
        </div>
    );
}

export default Videos;