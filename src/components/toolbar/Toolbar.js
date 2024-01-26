import React from "react";
import "../../css/toolbar/Toolbar.css";
import PlayAll from "./PlayAll";
import AddAll from "./AddAll";
import Filter from "./Filter";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar(props) {
    return (
        <div className="container-fluid">
            <div className="toolbar row">
                <div className="col-md-2 col-sm-4 col-xs-12 custom-column">
                    <PlayAll onPlayAll={props.onPlayAll}/>
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