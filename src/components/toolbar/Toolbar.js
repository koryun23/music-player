import React from "react";
import "../../css/toolbar/Toolbar.css";
import PlayAll from "./PlayAll";
import AddAll from "./AddAll";
import TrackNumber from "./TrackNumber";
import Filter from "./Filter";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const playAllStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    position: "relative",
}

const addAllStyle = {
    border: "1px solid black",
    borderRadius: "10px"
}

const trackNumberStyle = {
    border: "1px solid black",
    borderRadius: "10px"
}

const navbarStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto"
}

export default function Toolbar(props) {
    return (
        <div className="container-fluid">
            <div className="toolbar row">
                <div className="col-md-2 col-sm-4 col-xs-12 custom-column">
                    <PlayAll onPlayAll={props.onPlayAll} dropdownOpen={props.playAllDropdownIsOpen}/>
                </div>
                <div className="col-md-2 col-sm-4 col-xs-12 custom-column">
                    <AddAll onAddAll={props.onAddAll}/>
                </div>
                <div className="col-md-6 col-sm-1 custom-column"></div>
                <div className="col-md-2 col-sm-3 col-xs-12 custom-column">
                    <Filter onFilter={props.onFilter}/>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>

    );
}