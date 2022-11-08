import React, { useState } from 'react';
import styles from './style.module.css'
import Card from '../Shared/Card';
import { AiOutlineReload } from 'react-icons/ai';

import img1 from '../../images/6f71ebde15b4b78689bec4348e3fe778f2012c19.png'
import img2 from '../../images/41cbb726189f4fbf43bff96c8ec52dba193f45ee.png'
import img3 from '../../images/53f89d0d982a9979caf057f322b2751f7c81f661.png'
import img4 from '../../images/74eddefbf8804508dc61eaff6a9f65257fdf4fa9.png'
import img5 from '../../images/57b25a954dd33a3587278bc87740a355f0c5bf8e.png'
import img6 from '../../images/87fe02beb67abf5c4fda69d148562a5b053f66a1.png'
import img7 from '../../images/84ec461917ea0fdf00951ad822c7b8077132ae73.png'
import img8 from '../../images/c3d74b651e3f521439ae7e68750fa01c13171c98.png'
import img9 from '../../images/a2e693fe23793c9f533e32a42546e0a2a7cfbd03.png'
import img10 from '../../images/d0c128476e213f6a00712195b3c50afce11743eb.png'
import img11 from '../../images/e7f01adacb21c7ff8202323857b9f33998d4d934.png'
import img12 from '../../images/ca429081169db5164e3ba000450d2d87d05b95d6.png'

function priceToNum(priceText) {
  priceText = priceText.replace('$', '');
  return (Number(priceText));
}

function sortCards(arrayProducts) {
  //var e = document.getElementById("sort");
  //var value = e.value;
  //var text = e.options[e.selectedIndex].text;
  var value = 'price';
  var text = 'Price';
  const sortedProducts = [];
  let maxItem = arrayProducts[0];

  if (value == 'price') {
    for (let i = 0; i < arrayProducts.length; i++) {
      maxItem = arrayProducts[i];
      for (let j = i+1; j < arrayProducts.length; j++) {
        if (priceToNum(arrayProducts[j].price) > priceToNum(maxItem.price)) {
          maxItem = arrayProducts[j];
        }
      }
      sortedProducts.push(maxItem);
    }
  }
  else if (value == 'name') {

  }
  console.log(sortedProducts);
  
  return(sortedProducts);
}

function ProductListing(props) {
  const products = [
    {
      id: '1',
      image: img1,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$750.00',
      newTag: 'active'
    },
    {
      id: '2',
      image: img2,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$600.00',
      newTag: 'active'
    },
    {
      id: '3',
      image: img3,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$650.00',
      newTag: 'active'
    },
    {
      id: '4',
      image: img4,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$900.00',
      newTag: ''
    },
    {
      id: '5',
      image: img5,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$950.00',
      newTag: 'active'
    },
    {
      id: '6',
      image: img6,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$450.00',
      newTag: ''
    },
    {
      id: '7',
      image: img7,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$600.00',
      newTag: 'active'
    },
    {
      id: '8',
      image: img8,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$800.00',
      newTag: ''
    },
    {
      id: '9',
      image: img9,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$850.00',
      newTag: ''
    },
    {
      id: '10',
      image: img10,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$1000.00',
      newTag: ''
    },
    {
      id: '11',
      image: img11,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$400.00',
      newTag: ''
    },
    {
      id: '12',
      image: img12,
      description: 'Pueraria Mirifica And Study Phyto Estrogens',
      price: '$450.00',
      newTag: ''
    }
  ];
  const [products1, setProducts1] = useState(products);
  const handleProducts = () =>{
    setProducts1(sortCards(products1));
  };

  return (
    <div>
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
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Anas Your Tern is Here</p>
        </div>
        <div className={styles.right}>
          <div className={styles.gridContainer}>
            {products1.map(item => {
              return (
                <Card cardData={item} popupData={null} />
              )
            })}
          </div>
          <button className={styles.loading} onClick={()=>handleProducts()}><AiOutlineReload /> loading</button>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;