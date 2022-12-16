import React, { useState } from 'react';
import NewTag from '../NewTag';
import styles from './style.module.css'
import Popup from 'reactjs-popup';
import PopOut from '../PopOut';

const Modal = ({ childComponent, onClose, onOpen, isOpen }) => (
    <Popup
        modal onClose={onClose} onOpen={onOpen} open={isOpen}>
        {childComponent}
    </Popup>
)


function Card(props) {
    const { cardData, popupData } = props;

    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => {
        setisModalOpen(true);
    }

    const closeModal = () => {
        setisModalOpen(false);
    }


    return (
        <div className={styles.card}>
            <img src={cardData.image} alt={'img card ' + cardData.id} className={styles.cardImg} />
            {
                cardData.newTag === 'active' ? <NewTag /> : null
            }
            <p className={styles.cardDescription}>
                {cardData.description}
            </p>
            <p className={styles.cardPrice}>
                {cardData.price}
            </p>
            <button
                className={styles.cardButton}
                onClick={openModal}
            >QUICK VIEW</button>
            <Modal
                childComponent={<PopOut {...popupData} onClose={closeModal} />}
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
        </div>
    );
}

export default Card;