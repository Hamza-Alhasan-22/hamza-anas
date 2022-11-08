import React from 'react';
import styles from './style.module.css'

function SortSection(props) {
    return (
        <div className={styles.sortSection}>
          <span><p>Women</p></span>
          <span className={styles.sortSpan}>
            <p>Sort By</p>
            <select id="sort">
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </span>
        </div>
    );
}

export default SortSection;