import React from 'react';
import styles from './style.module.css'
import FooterData from './FooterData';
import { IconContext } from "react-icons";
import { RiFacebookCircleFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';

function Footer(props) {
    const footerdata = [
        {
            title: 'Categories',
            options: [
                'About us', 'Testimonials', 'Contact', 'Journal', 'Privacy Policy'
            ]
        },
        {
            title: 'Partners',
            options: [
                'Support', 'Shipping & Returns', 'Size Guide', 'Product Care'
            ]
        },
        {
            title: 'Contact Us',
            options: [
                '26A Pagoda St, TANGS, Singapore, 058187', '+6562215462'
            ]
        }
    ];
    return (
        <div className={styles.footer}>
            <div className={styles.footerUp}>
                <div className={styles.footerDataContainer}>
                    {
                        footerdata.map(item => {
                            return (
                                <FooterData {...item} />
                            )
                        })
                    }
                </div>
                <div className={styles.subscribe}>
                    <h2>Subscribe to newsletter</h2>
                    <div className={styles.subscribeContent}>
                        <input></input>
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.subscribeLogo}>
                        <IconContext.Provider 
                        value={{ color: 'rgba(178, 178, 178, 1)', size: '24' }}
                        >
                            <div className={styles.subscribeLogoValue}>
                            <RiFacebookCircleFill />
                            </div>
                            <div>
                            <AiFillTwitterCircle />
                            </div>
                        </IconContext.Provider>;
                        
                    </div>
                </div>
            </div>
            <div className={styles.footerDown}>
                <p>© Copyright Matter PTE LTD  2017</p>
            </div>
        </div>
    );
}

export default Footer;