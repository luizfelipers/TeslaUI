import React from 'react';
import './style.css';
import TeslaLogo from '../../assets/images/teslaLogoSmall.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={TeslaLogo} alt='TeslaLogo'></img>

            </div>
            <div className='header_center'>
                <p>Model S</p>
                <p>Model S</p>
                <p>Model S</p>
                <p>Model S</p>
                <p>Model S</p>
                <p>Model S</p>
            </div>
        </div>
    )
}

export default Header
