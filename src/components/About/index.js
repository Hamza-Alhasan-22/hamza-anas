import React from 'react';
import './style.css'
import './about.png'
import SectionTitle from '../Shared/SectionTitle';

function About(props) {
    const info = [
        {
            title: 'Artisan Employment Days Created',
            data: ['123456']
        },
        {
            title: 'Countries Involved To Date',
            data: ['India', 'China', 'Sri Lanka']
        },
        {
            title: '#MatterTribe',
            data: ['12 designers', '12 Factories']
        }
    ];
    return (
        <div className='container'>
            <div className='up'>
                <SectionTitle title='About Matter' />
            </div>
            <div className='down'>
                <div className='down-left'>
                    <img src='./about.png' alt='about' />
                </div>
                <div className='down-right'>
                    <p className='down-right-about'>
                        Our mission is threefold - to foster designer-artisan collaborations,
                        inspire consumers to value provenance and process, and pioneer industry
                        change and sustainability for rural textile communities.
                    </p>
                    <div className='down-right-data'>
                    {
                        info.map(item => {
                            return (
                                <>
                                    <p className='title-data'>{item.title}</p>
                                    {
                                        item.data.map(i => {
                                            return (
                                                <p className='down-right-p'>{i}</p>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;