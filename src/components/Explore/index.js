import React, { useState, useEffect } from 'react';
import styles from './style.module.css'
import News from '../Shared/News';
import SectionTitle from '../Shared/SectionTitle';
import {news} from './newsData.js'

function Explore(props) {
    const newsComponent = news.map(item => {
        return (
            <News date={item.date} title={item.title}>
                <div className={styles.newsBody}>
                    {item.hasData ? <p>{item.data}</p> : <></>}
                    {item.hasImage ? <img src={item.image} alt={'news ' + item.id} /> : <></>}
                </div>
            </News>
        )
    });
    const [isShown, setIsShown] = useState([true, false, false, false, false]);
    const handleIsShown = (index) => {
        setIsShown(
            isShown.map((item, i) => {
                return (
                    i == index ? item = true : item = false
                )
            })
        )
    };
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    const itemIndex = (i) =>{
        let x;
        let len = isShown.length;
        i>=0 ? x=i%len : x=(len-(Math.abs(i)%len))%len ;
        return x
    };
    const [ind,setInd] = useState(0);
    const handleInd = (check) => {
        check ? setInd(ind+1) : setInd(ind-1)
    };
    return (
        <div className={styles.exploreContainer}>
            <SectionTitle title='Explore' />
            <div className={styles.exploreBody}>
                <div className={`${styles.LeftArrow} ${styles.arrowHover} ${styles.mobileMode}`} onClick={() => {handleInd(false);handleIsShown(itemIndex(ind))}}>
                    <div className={`${styles.arrow} ${styles.left}`}>
                    </div>
                </div>

                <div className={`${styles.RightArrow} ${styles.arrowHover} ${styles.mobileMode}`} onClick={() => {handleInd(true);handleIsShown(itemIndex(ind))}}>
                    <div className={`${styles.arrow} ${styles.right}`}>
                    </div>
                </div>

                <div className={styles.exploreLeft}>
                    {
                        windowSize.innerWidth > 1000 ? newsComponent[0] :
                            isShown[0] ? newsComponent[0] : <></>
                    }
                </div>

                <div className={styles.exploreRight}>
                    {
                        newsComponent.map((item, i) => {
                            return (
                                windowSize.innerWidth > 1000 && i != 0 ? item :
                                    i == 0 || !isShown[i] ? <></> : item
                            )
                        })
                    }
                </div>
            </div>
            <button>see the jounal</button>
        </div>
    );
}

export default Explore;