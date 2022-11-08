import React from 'react';
import './App.css';

import TopInfo from './components/Nav/02-Top Info';
// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';
import Videos from './components/Videos';
import AsSeenOn from './components/AsSeenOn';
import Global from './components/Nav/01-Global';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Explore from './components/Explore';
import HeaderImg from './components/HeaderImg';
//////////////////////

import headerImg from '../src/images/8402c0f4f134ac3da6567d064219651be69fb559.png'
import SortSection from './components/SortSection';
import ProductListing from './components/ProductListing';


function App() {
  const headerImgData = {
    title: 'Apparels',
    description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
    img: headerImg
  };
  return (
    <>
      {/* Page 1: 
      <div className='header-container'>
        <TopInfo />
        <Global />
      </div>
        <Slider />
      <div className='main-container'>
        <NewArrivals />
        <About />
        <Explore />
        <Shop />
        <Videos />
        <AsSeenOn />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
      */}
      <div className='header-container'>
        <TopInfo />
        <Global />
      </div>
      <HeaderImg title={headerImgData.title} description={headerImgData.description} img={headerImgData.img} />
      <div className='main-container'>
        <SortSection />
        <NewArrivals />
        {/* <ProductListing /> */}
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  );
}

export default App;
