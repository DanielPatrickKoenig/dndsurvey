//--- import React related features ---//
import React from 'react';
import HamburgerIcon from './HamburgerIcon';

//--- import assets created by us ---//
import LogoSVG from './LogoSVG';

//--- import stylesheets ---//
import '../../src/App.scss';


const TopNav = () => {
    return (
        <div className='top-nav-container'>
            <LogoSVG />
            <ul>
                <li>Home</li>
                <li>Instructions</li>
            </ul>
            <div className='hamburger-icon-component'>
                <HamburgerIcon />
            </div>
        </div>
    );
}

export default TopNav;