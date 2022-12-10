import React, { useState } from 'react';
import styles from './shop.module.css'
import globalData from './data.js'

function ShopOptions(props) {
    return (
        <div className={styles.container}>
            {
                globalData.map(item => {
                    return (
                        column(item)
                    )
                })
            }
        </div>
    );
}

const column = (data) => {
    const arrow = '>';
    const { title, options } = data;
    const [isClicked, setIsClicked] = useState(data.options.map(i=>false));
    const handleIsClicked = (index)=>{
        let ary = [...isClicked];
        ary = ary.map((i,ind)=>ind===index?i=!i:i=false)
        setIsClicked(ary);
    }
    const arrowStyle = {
        transform: 'rotate(90deg)',
        margin: '0',
        marginRight: '5%',
        paddingBottom: '5%',
    }
    const arrowStyle1 = {
        margin: '0',
        marginRight: '5%',
        paddingBottom: '5%',
    }
    return (
        <div className={styles.column}>
            <h2 className={styles.title}>{title}</h2>
            {
                options.map((i,index) => {
                    return (
                        <div className={styles.options}>
                            <span className={styles.labelSpan} onClick={() => handleIsClicked(index)}>
                                <p style={isClicked[index] ? arrowStyle : arrowStyle1}>{arrow}</p>
                                <p className={styles.label}>{i.label}</p>
                            </span>
                            {
                                isClicked[index] ?
                                    <span className={styles.typesSpan}>
                                        {
                                            i.types.map(j => {
                                                return (
                                                    <p className={styles.type}>{j}</p>
                                                )
                                            })
                                        }
                                    </span>
                                    : <></>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShopOptions;