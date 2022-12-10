import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Video from '../Shared/Video';
import styles from './style.module.css'
import {videos} from './videoData.js'
function Videos() {
    return (
        <div className={styles.videoContainer}>
            <SectionTitle title='Recommended Videos'/>
            <div className={styles.videos}>
                {
                    videos.map(item=>{
                        return(
                            <Video {...item}/>
                        )
                    })
                }
            </div>
            <button className={styles.videoButton}>Show More</button>
        </div>
    );
}

export default Videos;