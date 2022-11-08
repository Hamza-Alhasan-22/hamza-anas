import React from 'react';
import FooterData from './FooterData';
import './style.css'
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
        <div className='footer'>
            <div className='footer-up'>
                <div className='footer-data-container'>
                    {
                        footerdata.map(item => {
                            return (
                                <FooterData {...item} />
                            )
                        })
                    }
                </div>
                <div className='subscribe'>
                    <h2>Subscribe to newsletter</h2>
                    <div className='subscribe-content'>
                        <input></input>
                        <button>Subscribe</button>
                    </div>
                    <div className='subscribe-logo'>
                        <IconContext.Provider 
                        value={{ color: 'rgba(178, 178, 178, 1)', size: '24' }}
                        >
                            <div className='subscribe-logo-value'>
                            <RiFacebookCircleFill />
                            </div>
                            <div>
                            <AiFillTwitterCircle />
                            </div>
                        </IconContext.Provider>;
                        
                    </div>
                </div>
            </div>
            <div className='footer-down'>
                <p>© Copyright Matter PTE LTD  2017</p>
            </div>
        </div>
    );
}

export default Footer;