import React, { useState, useEffect } from 'react';
import './style.css'
import News from '../Shared/News';
import SectionTitle from '../Shared/SectionTitle';
import './1.png'
import './2.png'
import './3.png'

function Explore(props) {
    const news = [
        {
            id: 2,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Kérastase: A Collaboration',
            hasImage: true,
            hasData: false,
            image: '2.png',
            data: ''
        },
        {
            id: 3,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Jaclynn Seah',
            hasImage: false,
            hasData: true,
            image: '',
            data: 'Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.'
        },
        {
            id: 4,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'Remarkable Resilience: Grace Kim',
            hasImage: false,
            hasData: true,
            image: '',
            data: 'A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.'
        },
        {
            id: 5,
            date: 'FIELDTESTED JANUARY 19, 2017',
            title: 'How To Wear The Lounge Lunghi',
            hasImage: true,
            hasData: false,
            image: '3.png',
            data: ''
        }
    ];

    const newsComponent = news.map(item => {
        return (
            <News date={item.date} title={item.title}>
                <div className='news-body'>
                    {item.hasData ? <p>{item.data}</p> : <></>}
                    {item.hasImage ? <img src={require('./' + item.image)} alt={'news ' + item.id} /> : <></>}
                </div>
            </News>
        )
    });

    newsComponent.unshift(
        <News date='FIELDTESTED JANUARY 19, 2017' title='Connected Clothing: Raye Padit'>
            <div className='news-body'>
                <p>As a voice for conscious fashion, Raye Padit is
                    motivated by the belief that one person’s actions,
                    no matter how small, holds great impact. This core
                    ideal has driven him to start his three passion projects:
                    Connected Threads Asia, PeyaR, and Swagalls. </p>
                <img src={require('./1.png')} alt='news 1' />
            </div>
        </News>);

    const [isShown, setIsShown] = useState([true, false, false, false, false]);
    //newsComponent.map(i=>{return(false)})
    const handleIsShown = (index) => {
        setIsShown(
            isShown.map((item, i) => {
                return (
                    i == index ? item = true : item = false
                )
            })
        )
    };

    /////////////
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    /////////////
    const itemIndex = (i) =>{
        let x;
        let len = isShown.length;
        i>=0 ? x=i%len : x=(len-(Math.abs(i)%len))%len ;
        console.log(x);
        return x
    };
    const [ind,setInd] = useState(0);
    const handleInd = (check) => {
        check ? setInd(ind+1) : setInd(ind-1)
    };

    return (
        <div className='explore-container'>

            <SectionTitle title='Explore' />

            <div className='explore-body'>
                <div className="LeftArrow arrowHover mobile-mode" onClick={() => {handleInd(false);handleIsShown(itemIndex(ind))}}>
                    <div className="arrow left">
                    </div>
                </div>

                <div className="RightArrow arrowHover mobile-mode" onClick={() => {handleInd(true);handleIsShown(itemIndex(ind))}}>
                    <div className="arrow right">
                    </div>
                </div>

                <div className='explore-left'>
                    {
                        windowSize.innerWidth > 1000 ? newsComponent[0] :
                            isShown[0] ? newsComponent[0] : <></>
                    }
                </div>

                <div className='explore-right'>
                    {
                        newsComponent.map((item, i) => {
                            return (
                                windowSize.innerWidth > 1000 && i != 0 ? item :
                                    i == 0 || !isShown[i] ? <></> : item
                            )
                        })
                    }

                </div>
            </div>
            <button>see the jounal</button>
        </div>
    );
}

export default Explore;