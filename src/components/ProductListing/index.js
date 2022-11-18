import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';
import Sidebar from './dropdown';
import {items,products,options} from "./data"

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
          <div style={{ display: "flex", justifyContent: "space-around", borderBottomWidth: "1px", paddingBottom: "5%" }}>
            <p>FILTERS</p>
            <p>RESET</p>
          </div>
          <div>
              <Sidebar items={items}/>
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
          <button className={styles.loading} onClick={() => { }}><AiOutlineReload /> loading</button>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;