import React, { useState } from 'react';
import styles from './style.module.css'
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'

const Slider = () => {
    const [isActive, setIsActive] = useState([true, false]);

    const handleIsActive = () => {
        setIsActive(isActive.map((item) => (!item)));
    };

    const mystyle1 = {
        paddingTop: '126px',
        backgroundImage: `url(${slider1})`,
        backgroundSize: 'cover',
        transition: '1s'
    };

    const mystyle2 = {
        paddingTop: '126px',
        backgroundImage: `url(${slider2})`,
        backgroundSize: '100%',
        backgroundSize: 'cover',
        transition: '1s'
        
    };
    return (
        <div style={isActive[0]? mystyle1 : mystyle2}>
            <div className={styles.SlidesContainer}>
                <div className={`${styles.LeftArrow} ${styles.arrowHover}`} onClick={()=>handleIsActive()}>
                    <div className={`${styles.arrow} ${styles.left}`}>
                    </div>
                </div>

                <div className={`${styles.RightArrow} ${styles.arrowHover}`} onClick={()=>handleIsActive()}>
                    <div className={`${styles.arrow} ${styles.right}`}>
                    </div>
                </div>

                <div className={styles.content}>
                    <span className={styles.MySpan}>Perfume Tips <br></br>Tricks</span>
                    <button className={styles.MyButton}>shop now</button>
                </div>
            </div>
        </div>
    );
};
export default Slider;