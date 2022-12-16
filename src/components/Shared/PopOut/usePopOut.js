import React, { useState, useContext } from 'react';
import { NavBar } from '../../../App.js'

const usePopOut = ({props}) => {
    const { cards, closeState, favList } = useContext(NavBar);
    const [cardsArry, setCardsArry] = cards;
    const [close, setClose] = closeState;
    const [favArryProducts, setFavArryProducts] = favList;
    const [alertBags, setAlertBags] = useState(false);
    const [alertFavs, setAlertFavs] = useState(false);
    const handleNumOfBags = () => {
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
            quantity: quantity,
        });
        setCardsArry(ary);
        setClose(false);
    }
    const handleNumOfFavs = () => {
        setAlertFavs(true);
        setTimeout(() => {
            setAlertFavs(false)
        }, 3000);
        setC(quantity);
        setClose(false);
        const ary3 = [...favArryProducts];
        ary3.push({
            id: props.id,
            title: props.title,
            price: props.data.price,
            image: props.sideImgs,
        });
        setFavArryProducts(ary3);
    }

    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (check) => {
        check == '+' ? setQuantity(quantity + 1) :
            quantity == 1 && check == '-' ? setQuantity(1) :
                setQuantity(quantity - 1);
    };

    const [c, setC] = useState(quantity);
    const getQuantity = () => {
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
    const [sizeDiscription, setSizeDiscription] = useState(sizeGuidelines[0])
    const handleSizeDiscription = (index) => {
        setSizeDiscription(sizeGuidelines[index]);
    }
    const [clicked, setClicked] = useState(true);
    const handleClicked = () => {
        setClicked(!clicked);
    };
    console.log({cardsArry});
    return {
        handleClicked,
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
        alertBags
    }
}
export default usePopOut;