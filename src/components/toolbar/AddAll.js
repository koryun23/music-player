import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function AddAll(props) {
    return (
        <div className="add-all-button btn-group" role="group">
            <button className="button-description btn btn-light">
                <FontAwesomeIcon icon={faAdd} size="lg" className="add-icon"/>
                <b>Add All</b>
            </button>
            <button className="options btn btn-light">
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
    );
}