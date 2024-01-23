import React, { useState } from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function AddAll(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const clickDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <div className="add-all-button dropdown dropdown-div" onClick={clickDropdown}>
            <button className="button-description btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                <FontAwesomeIcon icon={faAdd} size="lg" className="add-icon"/>
                <b>Add All</b>
            </button>
            <div className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
                <a href="#" className="dropdown-item">Option 1</a>
                <a href="#" className="dropdown-item">Option 1</a>
                <a href="#" className="dropdown-item">Option 1</a>

            </div>
        </div>
    );
}