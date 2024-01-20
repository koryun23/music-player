import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function TrackNumber(props) {
    return (
        <button className="track-number-button">
            <FontAwesomeIcon icon={faArrowUp} size="lg" className="up-arrow-icon" />
            <FontAwesomeIcon icon={faArrowDown} size="lg" className="down-arrow-icon" />
            <p className="button-description">Track Number</p>
            <button className="options">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </button>
    );
}