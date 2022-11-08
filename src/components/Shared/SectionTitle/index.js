import React from 'react';
import './style.css'
function SectionTitle({ title = '' }) {
    return (
        <h1 className='section-title'>{title}</h1>
    );
}

export default SectionTitle;