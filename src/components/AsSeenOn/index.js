import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import './style.css'
import './bitmap.png'
function AsSeenOn(props) {
    return (
        <div className='AsSeenOn-Container'>
            <SectionTitle title='As Seen On' />
            <div className='bitmap-img'>
                <img className='' src={require('./bitmap.png')} alt={'bitmap'} />
            </div>
        </div>
    );
}

export default AsSeenOn;