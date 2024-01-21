import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function TrackNumber(props) {
    return (
        <div className="track-number-button btn-group" role="group">
            <button className="button-description btn btn-light">
                <FontAwesomeIcon icon={faArrowUp} size="lg" className="up-arrow-icon" />
                <FontAwesomeIcon icon={faArrowDown} size="lg" className="down-arrow-icon" />
                <b>Track Number</b>
            </button>
            <button className="options btn btn-light">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
    );
}