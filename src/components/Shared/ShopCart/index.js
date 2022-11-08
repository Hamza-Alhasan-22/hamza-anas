import React from 'react';
import './style.css'
import './1.png'
import './2.png'
import './3.png'
import './4.png'

function ShopCart(props) {
    const {id, image, description} = props;
    return (
        <div className='cart'>
            <img className='cart-img' src={require('./'+image)} alt={'image '+id}/>
            <button className='cart-button'>Shop Now</button>
            <p className='cart-p'>{description}</p>
        </div>
    );
}

export default ShopCart;