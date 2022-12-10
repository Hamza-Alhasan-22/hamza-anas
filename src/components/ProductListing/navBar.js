import React, { useState } from 'react';
import styles from './navStyles.module.css'
import { navTitles } from './data';

const NavBar = (props) => {
    const items = navTitles;
    const arrow = '>';
    const [isClicked, setIsClicked] = useState(items.map(i => { return (false) }));
    const handleIsClicked = (index) => {
        const ary = [...isClicked];
        ary[index] = !(ary[index]);
        setIsClicked(ary);
    };
    return (
        <div className={styles.container}>
            {
                items.map((item, i) => {
                    const [optionIsClicked, setOptionIsClicked] = useState(item.options.map(i => { return (false) }));
                    const handleOptionIsClicked = (index) => {
                        const ary = item.options.map(i => { return( false ) });
                        ary[index] = !optionIsClicked[index];
                        setOptionIsClicked(ary);
                    };
                    return (
                        <div className={styles.nav}>
                            <span className={styles.titleSpan} onClick={() => handleIsClicked(i)}>
                                <h2 className={styles.titleLabel}>{item.title}</h2>
                                <p className={isClicked[i] ? styles.arrowUp : styles.arrowDown}>{arrow}</p>
                            </span>
                            {isClicked[i] ?
                                item.options.map((option, o) => {
                                    ////////
                                    return (
                                        <div>
                                            <span className={styles.optionsSpan} onClick={() => { handleOptionIsClicked(o) }}>
                                                <p className={optionIsClicked[o] ? styles.arrowUp : styles.arrowDown}
                                                style={{marginRight:'2%'}}>{arrow}</p>
                                                <p className={styles.optionLabel}>{option.label}</p>
                                            </span>
                                            
                                                {optionIsClicked[o] ?
                                                <span>
                                                    {option.types.map((type) => {
                                                        return (
                                                            <p className={styles.optionType}>{type}</p>
                                                        )
                                                    })} </span>: <></>
                                                }
                                            
                                        </div>
                                    )
                                }) : console.log(isClicked[i])
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavBar;