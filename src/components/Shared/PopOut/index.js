import React, { useState, useContext } from 'react';
import './style.css'
import { FaTimes } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs'
import Stars from '../Stars';
import Alert from '@mui/material/Alert';
import usePopOut from './usePopOut';

function PopOut(props) {
    const { handleClicked,
        handleMainImage,
        handleQuantity,
        handleNumOfBags,
        handleNumOfFavs,
        alertFavs,
        getQuantity,
        clicked,
        mainImage,
        sizeButton,
        handleSizeDiscription,
        sizeDiscription,
        quantity,
        alertBags } = usePopOut({ props });

    const { title, sideImgs, data, onClose } = props;
    const handleCloseIconClicked = () => {
        handleClicked()
        onClose();
    }
    return (

        clicked ?

            <div className='pop-out-container'>
                <div className='pop-out-title'>
                    <p>{title}</p>
                    <FaTimes className='fatimes' onClick={handleCloseIconClicked} />
                </div>
                <div className='pop-out-data'>
                    <div className='pop-out-left'>
                        {
                            sideImgs.map((item, i) => {
                                return (<img src={item} alt={'pop up img ' + i} onClick={() => handleMainImage(i)} />)
                            })
                            //onClick={()=>handleMainImg(item)}
                        }
                    </div>
                    <div className='pop-out-img'>
                        <img src={mainImage} alt={'pop up mainImg'} />
                    </div>
                    <div className='pop-out-right'>
                        <div className='right-title'>
                            <h2>{data.title}</h2>
                            <span>
                                <p>SGD {data.price}</p>
                                <Stars star={data.stars} />
                            </span>
                        </div>
                        <div className='right-description'>
                            <h3 className='mobile-h3'>Description</h3>
                            <p className='pop-p'>{data.description}</p>
                        </div>
                        <div className='right-employment'>
                            <h3 className='mobile-h3'>Artisan Employment</h3>
                            <p className='pop-p'>{data.employment}</p>
                        </div>
                        <div className='right-partnership'>
                            <h3 className='mobile-h3'>Partnership</h3>
                            <p className='pop-p'>{data.partnership}</p>
                        </div>
                        <div className='right-collab'>
                            <h3 className='mobile-h3'>In Collab</h3>
                            <p className='pop-p'>{data.collab}</p>
                        </div>
                        <div className='right-size'>
                            <p className='p1'>SIZE</p>
                            <div>
                                <span className='size-buttons'>
                                    {sizeButton.map(item => {
                                        return (
                                            <button onClick={() => handleSizeDiscription(item - 1)}>{item}</button>
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
                                    <button className='adjust-button' onClick={() => { handleQuantity('-') }}>-</button>
                                    <button className='q-button'>{quantity}</button>
                                    <button className='adjust-button' onClick={() => { handleQuantity('+') }}>+</button>
                                </span>
                                <button className='add-to-cart' onClick={() => handleNumOfBags()}>Add to cart</button>
                                <span className='wishlist-span'>
                                    <BsQuestionSquare />
                                    <button className='add-to-wishlist' onClick={() => handleNumOfFavs()}>Add to wishlist</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='view-button'>View full product details</button>
                <div className='alert-div'>
                    {alertFavs ? <Alert severity="success" variant="outlined" className='alert-pop-up'>Added 1 item to 'WishList' Successfully !</Alert> : <></>}
                    {alertBags ? <Alert severity="success" variant="outlined" className='alert-pop-up'>Added {getQuantity()} items to 'Card List' Successfully !</Alert> : <></>}
                </div>
            </div>
            : <></>
    );
}

export default PopOut;