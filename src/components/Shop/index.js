import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import ShopCart from '../Shared/ShopCart';
import './style.css'

function Shop(props) {
    const products = [
        {
            id: '1',
            image: '1.png',
            description: 'Pants'
        },
        {
            id: '2',
            image: '2.png',
            description: 'Jumpsuits'
        },
        {
            id: '3',
            image: '3.png',
            description: 'Tops'
        },
        {
            id: '4',
            image: '4.png',
            description: 'Accessories'
        }
    ];
    return (
        <div className='shop-container'>
            <SectionTitle title='Shop'/>
            <div className='shop-carts'>
                 {
                    products.map(item=>{
                        return(
                            <ShopCart {...item}/>
                        )
                    })
                 }
            </div>
        </div>
    );
}

export default Shop;