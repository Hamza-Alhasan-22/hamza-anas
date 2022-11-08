import React, { useState } from 'react';
import './style.css'
import './slider1.png'
import './slider2.png'

const Slider = () => {
    const [isActive, setIsActive] = useState([true, false]);

    const handleIsActive = () => {
        setIsActive(isActive.map((item) => (!item)));
    };

    const mystyle1 = {
        paddingTop: '126px',
        backgroundImage: `url(${require("./slider1.png")})`,
        // backgroundSize: '100%',
        backgroundSize: 'cover',
        transition: '1s'
    };

    const mystyle2 = {
        paddingTop: '126px',
        backgroundImage: `url(${require("./slider2.png")})`,
        backgroundSize: '100%',
        backgroundSize: 'cover',
        transition: '1s'
        
    };
    return (
        <div className='slider' style={isActive[0]? mystyle1 : mystyle2}>
            <div className="SlidesContainer">
                <div className="LeftArrow arrowHover" onClick={()=>handleIsActive()}>
                    <div className="arrow left">
                    </div>
                </div>

                <div className="RightArrow arrowHover" onClick={()=>handleIsActive()}>
                    <div className="arrow right">
                    </div>
                </div>

                <div className="content">
                    <span className="MySpan">Perfume Tips <br></br>Tricks</span>
                    <button className="MyButton">shop now</button>
                </div>
            </div>
        </div>
    );
};
export default Slider;