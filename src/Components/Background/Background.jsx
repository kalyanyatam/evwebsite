import React from 'react';
import './Background.css';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';

const Background = ({ heroCount }) => {
    if (heroCount === 0) {
        return <img src={car1} className='background' alt="Car 1" />;
    } else if (heroCount === 1) {
        return <img src={car2} className='background' alt="Car 2" />;
    } else if (heroCount === 2) {
        return <img src={car3} className='background' alt="Car 3" />;
    } else {
        return null; 
    }
};

export default Background;
