import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';
//import { Outlet, Link } from "react-router-dom";
//import Sidebar from './dropdown';
import { products, optionsSort } from "./data"
import NavBar from './navBar.js';

function sortCards(arrayProducts, value) {
  if (value == 1) {
    const myData = [].concat(arrayProducts)
      .sort((a, b) => a.description > b.description ? 1 : -1)
    return myData
  }
  else if (value == 2) {
    const getValue = ({ price }) => +price.slice(1) || 0;
    arrayProducts.sort((a, b) => getValue(a) - getValue(b));
    return arrayProducts
  }
  else if (value == 3) {
    const getValue = ({ price }) => +price.slice(1) || 0;
    arrayProducts.sort((a, b) => getValue(b) - getValue(a));
    return arrayProducts

  }
}

function ProductListing(props) {
  const selectInit = '-- Select --';
  const saveProducts = [...products];
  const [selected, setSelected] = useState(selected)
  //const [itemBoxex, setItemBoxex] = useState([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }])
  //const [selectedBox, setSelectedBox] = useState(false)
  const [products1, setProducts1] = useState(saveProducts);
  const handleChanges = (arrayOfProducts, valueSelected) => {
    setProducts1(sortCards(arrayOfProducts, valueSelected));
  }
  const resetFun = () =>{
    setProducts1(saveProducts);
    setSelected('5');
  }
  const buttonInit = [false,false,false,false];
  const [activeButton, setActiveButton] = useState(buttonInit);
  const handleActiveButton = (index)=>{
    const ary = [...buttonInit];
    ary[index] = true;
    setActiveButton(ary);
  }
  return (
    <div>
      <div className={styles.sortSection}>
        <span><p>Women</p></span>
        <span className={styles.sortSpan}>
          <p>Sort By</p>
          <select id="sort" value={selected} onChange={(e) => { setSelected(e.target.value); handleChanges(products1, e.target.value) }}>
            <option value="5" disabled selected>{selectInit}</option>

            {optionsSort.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.headerNav}>
            <p className={styles.filter}>Filters</p>
            <p className={styles.reset} onClick={()=>resetFun()}>Reset</p>
          </div>
          <NavBar />
          <div className={styles.sizes}>
            <p>- SIZES</p>
            <span>
              <span className={styles.buttons}>
                {
                  activeButton.map((item,ind)=>{
                    return(<button className={item?styles.activeButtonStyle:styles.notActiveButtonStyle} 
                      onClick={()=>handleActiveButton(ind)}>{ind+1}</button>)
                  })
                }
              </span>
              <p>SEE OUR SIZING GUIDE</p>
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.gridContainer}>
            {products1.map((item, key) => {
              return (
                <Card cardData={item} popupData={null} />
              )
            })}
          </div>
          <button className={styles.loading}><AiOutlineReload/> LOADING</button>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;