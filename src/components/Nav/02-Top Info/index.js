import React, { useState } from "react";
import styles from "./styles.module.css";

function TopInfo() {
    const [isActive, setActive] = useState(true);
    const handleIsActive = () => {
        setActive(false);
    };
    return (
        <>
            {isActive ?
                <p className={styles.freeShipping} onClick={() => setActive(false)}>
                    Free shipping for orders above USD 150
                </p> :
                <div className={styles.navContainer}>
                    <p>Be the first to get best offers by Matterprints</p>
                    <input type="text" value="Enter your email"/>
                    <button>Subscribe</button>
                </div>
            }
        </>
    )
}

export default TopInfo;
