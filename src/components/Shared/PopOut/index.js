import React, { useState } from 'react';
import './style.css'
import { FaTimes } from 'react-icons/fa';
import { BsQuestionSquare } from 'react-icons/bs'
import Stars from '../Stars';

function PopOut(props) {
    // const popOuts = [
    //     {
    //         id: 1,
    //         title: '',
    //         sideImgs: [],
    //         data: {
    //             title: '',
    //             price: 0,
    //             stars: 4.8,
    //             description: '',
    //             employment: '',
    //             partnership: '',
    //             collab: ''
    //         }
    //     }
    // ];
    //sideImgs [array], mainImg(real img as component -not just path-)

    const [ quantity, setQuantity ] = useState(1);
    const handleQuantity = (check) => {
        //check = '+' or '-'
        check == '+' ? setQuantity(quantity + 1) :
            quantity == 1 && check == '-' ? setQuantity(1) : 
            setQuantity(quantity - 1);
    };

    // const [mainImg, setMainImg] = useState(props.sideImgs[0])
    // const handleMainImg = (image) =>{
    //     setMainImg(image);
    // };
    
    const sizeButton = [1, 2, 3, 4];

    // const {sizeClicked, setSizeClicked} = useState([true,false,false,false]);
    // const handleSizeClicked = (index) => {
    //     let arry = sizeClicked.map((item,i)=>{
    //         i==index? item=true: item=false;
    //     })
    //     setSizeClicked(arry);
    // }

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
                        props.sideImgs.map(item => {
                            return (item)
                        })
                    //onClick={()=>handleMainImg(item)}
                    }
                </div>
                <div className='pop-out-img'>
                    {props.mainImg}
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
                            <button className='add-to-cart'>Add to cart</button>
                            <span className='wishlist-span'>
                                <BsQuestionSquare />
                                <button className='add-to-wishlist'>Add to wishlist</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='view-button'>View full product details</button>
        </div>
    :<></>
    );
}

export default PopOut;