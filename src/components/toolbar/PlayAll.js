import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayAll(props) {
    return (
        <button className="play-all-button">
            <FontAwesomeIcon icon={faPlay} size="lg" className="play-icon"/>
            <p className="button-description">Play All</p>
            <button className="options">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </button>
    );
}