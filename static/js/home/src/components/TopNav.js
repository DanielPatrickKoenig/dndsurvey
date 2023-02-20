//--- import React related features
import React, { useState } from 'react';

//--- import Hamburger Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleQuestion, faHouseChimney, faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//--- import assets
import LogoSVG from './LogoSVG';

//--- import stylesheets
import '../../src/App.scss';


const TopNav = () => {

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const hamburgerMenuToggleHandler = () => setHamburgerMenuOpen(!hamburgerMenuOpen);

    return (
        <>
            <div className='top-nav-container'>
                <LogoSVG />
                <ul>
                    <li><FontAwesomeIcon icon={faHouseChimney} className='icon-dark'></FontAwesomeIcon>Home</li>
                    <li><FontAwesomeIcon icon={faCircleQuestion} className='icon-dark'></FontAwesomeIcon>Instructions</li>
                </ul>

                {/* top nav only shows up on mobile */}
                <div className='mobile-topnav-icons-container'>
                    <div className='mobile-topnav-icon-set'>
                        <FontAwesomeIcon icon={faHouseChimney} className='icon'></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                    <div className='mobile-topnav-icon-set'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='icon'></FontAwesomeIcon>
                        <p>Instruction</p>
                    </div>
                </div>

                {/* hamburger menu code - if still want to use */}
                {/* <div className='hamburger-icon-container' onClick={hamburgerMenuToggleHandler}>             
                    { hamburgerMenuOpen ? <FontAwesomeIcon icon={faXmark} className='icon-dark'></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} className='icon'></FontAwesomeIcon> }
                </div> */}


            </div>
            <div className={hamburgerMenuOpen ? 'hamburger-menu-container active' : 'hamburger-menu-container inactive' } >
            {/* <div className='hamburger-menu-container' > */}
                {/* <LogoSVG /> */}
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Instructions</a></li>
                </ul>
            </div>
        </>
    );
}

export default TopNav;