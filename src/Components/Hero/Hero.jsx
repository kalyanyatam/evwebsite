import React from 'react';
import arrow_button from '../../assets/arrow_button .png';
import './Hero.css'

const Hero = ({ heroData, setHeroCount, heroCount }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <h1>{heroData[heroCount].text1}</h1>
                <h2>{heroData[heroCount].text2}</h2>
            </div>
           
            <div className="hero-buttons">
                <button  className='imagearrow' onClick={() => setHeroCount((prevCount) => (prevCount + 1) % heroData.length)}>
                <div className="container">
                <p className="text">Explore the Features</p>
                <img className='imagearrow' src={arrow_button} alt="Next" />
                </div>
                </button>
            </div>
            </div>
            
       
    );
};

export default Hero;
