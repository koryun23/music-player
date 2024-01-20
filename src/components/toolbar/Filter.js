import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Filter(props) {
    return (
        <input type="text" className="filter-input-field" placeholder="Filter"/>

    );
}