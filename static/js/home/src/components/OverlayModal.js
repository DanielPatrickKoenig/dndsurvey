import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

//--- import stylesheets
import '../../src/App.scss';

const OverlayModal = (props) => {


    const clickHandler = () => {
        props.showInstructions(false);
    }



    return (
        <div className="overlay-modal_main-container">
            <div className="overlay-modal_content-container">
                <button onClick={clickHandler}><FontAwesomeIcon icon={faXmarkCircle} className='icon-dark'></FontAwesomeIcon></button>
                <div className="overlay-modal_content">
                    <h3>Headline</h3>
                    <p>overlay modal text</p>
                </div>
            </div>

        </div>
    )
}

export default OverlayModal;