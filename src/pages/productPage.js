import React, {createContext, useContext} from 'react';
import styles from '../App.module.css';
import Global from '../components/Nav/01-Global';
import Footer from '../components/Footer';
import HeaderImg from '../components/HeaderImg';
import TopInfo from '../components/Nav/02-Top Info';
import headerImg from '../images/8402c0f4f134ac3da6567d064219651be69fb559.png';
import ProductListing from '../components/ProductListing';

function ProductPage(props) {
    const headerImgData = {
        title: 'Apparels',
        description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
        img: headerImg
      };
    return (
        <>
            <div className={styles.headerContainer}>
                <TopInfo />
                <Global />
            </div>
            <HeaderImg title={headerImgData.title} description={headerImgData.description} img={headerImgData.img} />
            <div className={styles.mainContainer}>
                <ProductListing />
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    );
}

export default ProductPage;