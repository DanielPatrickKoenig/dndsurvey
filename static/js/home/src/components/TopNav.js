import React from 'react';

import LogoSVG from './LogoSVG';

import '../../src/App.scss';


const TopNav = () => {
    return(
        <div className='top-nav-container'>
            <LogoSVG />
            <ul>
                <li>Home</li>
                <li>Instructions</li>
            </ul>
        </div>
    );
}

export default TopNav;