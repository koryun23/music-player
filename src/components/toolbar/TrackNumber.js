import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function TrackNumber(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const clickDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="track-number-button dropdown dropdown-div" onClick={clickDropdown}>
            <button className="button-description btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuItem"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true">
                <FontAwesomeIcon icon={faArrowUp} size="lg" className="up-arrow-icon" />
                <FontAwesomeIcon icon={faArrowDown} size="lg" className="down-arrow-icon" />
                <b>Track Number</b>
            </button>
            <div className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
                <a href="#" className="dropdown-item">Action 1</a>
                <a href="#" className="dropdown-item">Action 2</a>

            </div>
        </div>
    );
}