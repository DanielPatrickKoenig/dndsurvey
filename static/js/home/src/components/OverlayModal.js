import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

//--- import stylesheets
import '../../src/App.scss';

const OverlayModal = () => {

    const [modalOpen, setModalOpen] = useState('false');

    const clickHandler = () => {
        setModalOpen(!modalOpen);
    }


    return (
        <div className={modalOpen ? "overlay-modal_main-container": "notActive"}>
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