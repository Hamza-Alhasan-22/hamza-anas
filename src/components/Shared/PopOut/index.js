import React, { useState, useContext } from 'react';
import './style.css'
import { FaTimes } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs'
import Stars from '../Stars';
import {NavBar} from '../../../pages/homePage.js'
import Alert from '@mui/material/Alert';

function PopOut(props) {
    const {cards, closeState, Bags, Favs} = useContext(NavBar);
    const [numOfBags, setNumOfBags] = Bags;
    const [numOfFavs, setNumOfFavs] = Favs;
    const [cardsArry, setCardsArry] = cards;
    const [close, setClose] = closeState;
    const [alertBags, setAlertBags] = useState(false);
    const [alertFavs, setAlertFavs] = useState(false);
    const handleNumOfBags = ()=>{
        setNumOfBags(numOfBags+quantity);
        setAlertBags(true);
        setTimeout(() => {
            setAlertBags(false);
        }, 3000);
        setC(quantity);
        let ary = [...cardsArry];
        ary.push({
            id: props.id,
            title: props.title,
            price: props.data.price,
            image: props.sideImgs,
        });
        setCardsArry(ary);
        setClose(false);
    }
    const handleNumOfFavs = ()=>{
        setNumOfFavs(numOfFavs+1);
        setAlertFavs(true);
        setTimeout(() => {
            setAlertFavs(false)
        }, 3000);
        setC(quantity);
        setClose(false);
    }

    const [ quantity, setQuantity ] = useState(1);
    const handleQuantity = (check) => {
        check == '+' ? setQuantity(quantity + 1) :
            quantity == 1 && check == '-' ? setQuantity(1) : 
            setQuantity(quantity - 1);
    };

    const [c,setC] = useState(quantity);
    const getQuantity = () =>{
        return c
    }

    const [mainImage, setMainImage] = useState(props.sideImgs[0]);
    const handleMainImage = (index) => {
        setMainImage(props.sideImgs[index]);
    };
    const sizeButton = [1, 2, 3, 4];
    const sizeGuidelines = [
        'Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.',
        'Model is a US Size 4-6, wears Matter Size 2. 175 cm tall.',
        'Model is a US Size 6-8, wears Matter Size 3. 175 cm tall.',
        'Model is a US Size 8-10, wears Matter Size 4. 175 cm tall.'
    ];
    const [sizeDiscription,setSizeDiscription] = useState(sizeGuidelines[0])
    const handleSizeDiscription = (index) =>{
        setSizeDiscription(sizeGuidelines[index]);
    }
    const [clicked, setClicked] = useState(true);
    const handleClicked = () => {
        setClicked(!clicked);
    };
    return (
        
            clicked ?
        
        <div className='pop-out-container'>
            <div className='pop-out-title'>
                <p>{props.title}</p>
                <FaTimes className='fatimes' onClick={() => handleClicked()} />
            </div>
            <div className='pop-out-data'>
                <div className='pop-out-left'>
                    {
                        props.sideImgs.map((item,i) => {
                            return(<img src={item} alt={'pop up img '+i} onClick={()=>handleMainImage(i)}/>)
                        })
                    //onClick={()=>handleMainImg(item)}
                    }
                </div>
                <div className='pop-out-img'>
                    <img src={mainImage} alt={'pop up mainImg'}/>
                </div>
                <div className='pop-out-right'>
                    <div className='right-title'>
                        <h2>{props.data.title}</h2>
                        <span>
                            <p>SGD {props.data.price}</p>
                            <Stars star={props.data.stars} />
                        </span>
                    </div>
                    <div className='right-description'>
                        <h3 className='mobile-h3'>Description</h3>
                        <p className='pop-p'>{props.data.description}</p>
                    </div>
                    <div className='right-employment'>
                        <h3 className='mobile-h3'>Artisan Employment</h3>
                        <p className='pop-p'>{props.data.employment}</p>
                    </div>
                    <div className='right-partnership'>
                        <h3 className='mobile-h3'>Partnership</h3>
                        <p className='pop-p'>{props.data.partnership}</p>
                    </div>
                    <div className='right-collab'>
                        <h3 className='mobile-h3'>In Collab</h3>
                        <p className='pop-p'>{props.data.collab}</p>
                    </div>
                    <div className='right-size'>
                        <p className='p1'>SIZE</p>
                        <div>
                            <span className='size-buttons'>
                                {sizeButton.map(item => {
                                    return (
                                        <button onClick={()=>handleSizeDiscription(item-1)}>{item}</button>
                                    )
                                })}
                            </span>
                            <p className='p2'>SIZE GUIDELINES</p>
                        </div>
                        <p className='p3'>{sizeDiscription}</p>
                    </div>
                    <div className='right-quantity'>
                        <p>QUANTITY</p>
                        <div>
                            <span className='adjust-span'>
                                <button className='adjust-button' onClick={()=>{handleQuantity('-')}}>-</button>
                                <button className='q-button'>{quantity}</button>
                                <button className='adjust-button' onClick={()=>{handleQuantity('+')}}>+</button>
                            </span>
                            <button className='add-to-cart' onClick={()=>handleNumOfBags()}>Add to cart</button>
                            <span className='wishlist-span'>
                                <BsQuestionSquare />
                                <button className='add-to-wishlist' onClick={()=>handleNumOfFavs()}>Add to wishlist</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='view-button'>View full product details</button>
            <div className='alert-div'>
            {alertFavs?<Alert severity="success" variant="outlined" className='alert-pop-up'>Added {getQuantity()} items to 'WishList' Successfully !</Alert>:<></>}
            {alertBags?<Alert severity="success" variant="outlined" className='alert-pop-up'>Added {getQuantity()} items to 'Card List' Successfully !</Alert>:<></>}
            </div>
        </div>
    :<></>
    );
}

export default PopOut;