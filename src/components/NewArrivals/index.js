import React, { useState } from 'react';
import Card from '../Shared/Card';
import SectionTitle from '../Shared/SectionTitle';
import './style.css'
import './1.png';
import './2.png';
import './3.png';
import './4.png';
//{require('./1.png')}
import arrivals from './data';
function NewArrivals(props) {


    
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