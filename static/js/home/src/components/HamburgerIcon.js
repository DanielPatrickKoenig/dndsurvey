import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import '../../src/App.scss';

function HamburgerIcon() {

    return (
            <FontAwesomeIcon icon={faBars} />
    )

}

export default HamburgerIcon;