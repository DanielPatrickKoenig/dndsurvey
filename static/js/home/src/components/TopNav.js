//--- import React related features
import React, { useState } from 'react';

//--- import Hamburger Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//--- import assets
import LogoSVG from './LogoSVG';

//--- import stylesheets
import '../../src/App.scss';


const TopNav = () => {

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const hamburgerMenuToggleHandler = () => setHamburgerMenuOpen(!hamburgerMenuOpen);

    return (
        <div>
            <div className='top-nav-container'>
                <LogoSVG />
                <ul>
                    <li>Home</li>
                    <li>Instructions</li>
                </ul>
                <div className='hamburger-icon-container' onClick={hamburgerMenuToggleHandler}>             
                    { hamburgerMenuOpen ? <FontAwesomeIcon icon={faXmark} className='icon-dark'></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} className='icon'></FontAwesomeIcon> }
                </div>
            </div>
            <div className={hamburgerMenuOpen ? 'hamburger-menu-container active' : 'hamburger-menu-container inactive' } >
            {/* <div className='hamburger-menu-container' > */}
                {/* <LogoSVG /> */}
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Instructions</a></li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;