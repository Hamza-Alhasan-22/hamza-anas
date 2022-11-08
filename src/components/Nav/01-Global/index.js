import React, { useState } from 'react';
import "./style.css";
// import { Navbar, Container, Nav, Button, Form, NavDropdown, Col, Row } from "react-bootstrap"
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { GoArrowSmallDown } from 'react-icons/go';
import { FaBars, FaTimes } from 'react-icons/fa';

function Global() {
    const navBar = [
        {
            id: 1,
            title: 'SHOP',
            options: ['SHOP option1', 'SHOP option2']
        },
        {
            id: 2,
            title: 'FABRIC',
            options: ['FABRIC option1', 'FABRIC option2']
        },
        {
            id: 3,
            title: 'JOURNAL',
            options: ['JOURNAL option1', 'JOURNAL option2']
        },
        {
            id: 4,
            title: 'ABOUT',
            options: ['ABOUT option1', 'ABOUT option2']
        }
    ];

    const headerTitle = (title, options,id) => {
        return (
            <div className='title-button'>
                <button className={showOptions[id-1]? 'title-button-txt isActive': 'title-button-txt'} onClick={() => handleShowOptions(id-1)}>{title}</button>
                {
                    options.map((item)=>{
                        return(
                            showOptions[id-1] ? <button className='title-button-txt titles-options'>{item}</button>: <></>
                        )
                    })
                    
                }
                {/* <GoArrowSmallDown className='arrow-down' size={50} /> */}
            </div>

        )
    };

    const [showOptions, setShowOptions] = useState([false,false,false,false]);
    const handleShowOptions = (index)=>{
      setShowOptions(showOptions.map((item,i)=>(i==index ? !item : false)))  
    };

    const iconContainer = <div className='icon-container'>
        <p className='title-button-txt login'>Login</p>
        <BsSearch size={20} />
        <MdFavoriteBorder size={20} />
        <BsFillBagFill size={20} />
    </div>;

    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked);
    };

    return (
        <div className='nav-bar-div'>
            <div className='title-container'>
                <h2 id='matter'>matter</h2>
                {
                    navBar.map((item) => {
                        return (headerTitle(item.title, item.options, item.id))
                    })
                }
            </div>
            {iconContainer}
            <div className='navbar-mobile'>
                {
                    clicked ? <FaTimes size={30} onClick={() => handleClicked()} /> : <FaBars size={30} onClick={() => handleClicked()} />
                }
                {clicked ?
                <div className='container-mobile'>
                    {iconContainer}
                    <div className='titles-mobile'>
                    {
                        navBar.map((item) => {
                            return (headerTitle(item.title, item.options, item.id))
                        })
                    }
                    </div>
                </div> : <></>}
            </div>
        </div>
    );
}

export default Global;