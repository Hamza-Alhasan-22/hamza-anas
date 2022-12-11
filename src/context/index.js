import React, { useState } from 'react';
//This File is not used

function Context(props) {
    const [cardsArry, setCardsArry] = useState([]);
    const [favArryProducts, setFavArryProducts] = useState([]);
    const [close, setClose] = useState(false);
    const context = {
        cards: [cardsArry, setCardsArry],
        closeState: [close, setClose],
        favList: [favArryProducts, setFavArryProducts]
    };
    return (context);
}

export default Context;