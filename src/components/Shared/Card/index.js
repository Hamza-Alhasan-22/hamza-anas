import React, { useState } from 'react';
import NewTag from '../NewTag';
import './style.css'
import './imgCards/1.png'
import './imgCards/2.png'
import './imgCards/3.png'
import './imgCards/4.png'
import './imgCards/5.png'
import './imgCards/6.png'
import './imgCards/7.png'
import './imgCards/8.png'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }


function Card(props) {
    const {cardData, popupData} = props;
    // const images = importAll(require.context('./components/NewArrivals/imgCards', false, /\.(png|jpe?g|svg)$/));
    // <img src={images['doggy.png']} />
    const tag = (check) => {
        let x;
        check === 'True' ? x = <NewTag /> : x = <></>
        console.log(x)
        return (
            x 
        )
    };

    const [isHover, setIsHover] = useState(0)
    const Modal = (stuf) => ( 
        <Popup 
        trigger={isHover ? <button className='card-button'>QUICK VIEW</button>: null} modal>
            {stuf}
        </Popup>
    );


    return (
        <div className='card' onMouseEnter={(e) => {setIsHover(true)}}
        onMouseLeave={(e) => {setIsHover(false)}}>
            <img src={require('./imgCards/'+cardData.image)} alt={'img ' + cardData.id} className='card-img' />
            {
                cardData.newTag === 'active' ? tag('True') : tag('False')
            }
            <p className='card-description'>
                {cardData.description}
            </p>
            <p className='card-price'>
                {cardData.price}
            </p>
            {Modal(<PopOut {...popupData} />)}
        </div>
    );
}

export default Card;