import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function AddAll(props) {
    return (
        <button className="add-all-button">
            <FontAwesomeIcon icon={faAdd} size="lg" className="add-icon"/>
            <p className="button-description">Add All</p>
            <button className="options">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </button>
    );
}