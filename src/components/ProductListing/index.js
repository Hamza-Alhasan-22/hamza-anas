import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";
import Sidebar from './dropdown';
import { items, products, options } from "./data"

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
  const [selected, setSelected] = useState(selected)
  const [itemBoxex, setItemBoxex] = useState([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }])
  const [selectedBox, setSelectedBox] = useState(false)
  const [products1, setProducts1] = useState(products);
  const handleChanges = (arrayOfProducts, valueSelected) => {
    setProducts1(sortCards(arrayOfProducts, valueSelected))
  }
  return (
    <div>
      <div className={styles.sortSection}>
        <span><p>Women</p></span>
        <span className={styles.sortSpan}>
          <p>Sort By</p>
          <select id="sort" value={selected} onChange={(e) => { setSelected(e.target.value); handleChanges(products1, e.target.value) }}>
            <option value="" disabled selected>-- Select --</option>

            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottomWidth: "1px", borderBottomStyle: "solid", height: "26px", paddingBottom: "5%" }}>
            <p onClick={()=>{}} className={styles.filter}>FILTERS</p>
            <p className={styles.reset}>RESET</p>
          </div>
          <div>
            <Sidebar items={items} />
            <div className={styles.thetopwidth}><p className={styles.sizes}>- SIZES</p></div>
            <div className={styles.foursizes}>
              {itemBoxex.map((item,index) =>
                <div key={item.num} onClick={() => { setSelectedBox(!selectedBox)}}  className={selectedBox?styles.thesizes1:styles.thesizes}>{item.num}</div>
              )}
            </div>
            <p className={styles.guides}>see our Sizing Guide</p>
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
        </div>
      </div>
    </div>
  );
}

export default ProductListing;