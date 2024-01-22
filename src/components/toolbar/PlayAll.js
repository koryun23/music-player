import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayAll(props) {

    return (
        <div className="play-all-button btn-group" role="group">
            <button className="button-description btn btn-light">
                <FontAwesomeIcon icon={faPlay} size="lg" className="play-icon"/>
                <b>Play All</b>
            </button>
            <button className="options btn btn-light">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
    );
}