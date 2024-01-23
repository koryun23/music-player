import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function PlayAll(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const clickDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="dropdown dropdown-div play-all-button" onClick={clickDropdown}>
            <button className="button-description btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faPlay} size="lg" className="play-icon"/>
                <b>Play All</b>
            </button>
            <div className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                <a href="#" className="dropdown-item">Play Sequentially</a>
                <a href="#" className="dropdown-item">Play Shuffled</a>
            </div>
        </div>
    );
}