import React, { useState } from 'react';
import Card from '../Shared/Card';
import SectionTitle from '../Shared/SectionTitle';
import './style.css'
import './1.png';
import './2.png';
import './3.png';
import './4.png';
//{require('./1.png')}

function NewArrivals(props) {
    const arrivals = [
        {
          id: '1',
          image : '1.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active'
        },
        {
          id: '2',
          image : '2.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active'
        },
        {
          id: '3',
          image : '3.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active'
        },
        {
          id: '4',
          image : '4.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: ''
        },
        {
          id: '5',
          image : '5.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active'
        },
        {
          id: '6',
          image : '6.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: ''
        },
        {
          id: '7',
          image : '7.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: 'active'
        },
        {
          id: '8',
          image : '8.png',
          description: 'Pueraria Mirifica And Study Phyto Estrogens',
          price: '$600.00',
          newTag: ''
        }
      ];

    
    const imgsPath = ['./1.png','./2.png','./3.png','./4.png']; 
    const img1 = (index)=>{
      return(
        <img src={require('./'+index+'.png')} alt={'img'+index} />
      )
    };
    const [mainImage, setMainImage] = useState(img1(1));
    const handleMainImage = (index)=>{
      setMainImage(img1(index));
    };    
    const imgs = imgsPath.map((item,i)=>{
      return(
        <img src={require('./'+(i+1)+'.png')} alt={'img'+(i+1)} onClick={()=>handleMainImage(i+1)} />
      )
    });
    

    const test = [
      {
        id: 1,
        title: 'The Sideswept Dhoti',
        sideImgs: imgs,
        mainImg: mainImage,
        data: {
            title: 'The Sideswept Dhoti + Bottom Line Grey (Silk)',
            price: 139.90,
            stars: 4.8,
            description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… ',
            employment: '54 jobs',
            partnership: 'Randall Armstrong',
            collab: 'Augusta Mendoza'
        }
    }
    ];
    return (
        <div className='container'>
            <SectionTitle title='Featured' />
            <div className='grid-container'>
                {arrivals.map(item => {
                    return (
                        <Card cardData={item} popupData={test[0]} />
                    )
                })}
            </div>
        </div>
    );
}

export default NewArrivals;