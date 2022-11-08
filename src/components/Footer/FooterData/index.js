import React from 'react';
import './style.css'

function FooterData(props) {
    return (
        <div className='footer-data'>
            <h2>{props.title}</h2>
            {
                props.options.map(item =>{
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </div>
    );
}

export default FooterData;