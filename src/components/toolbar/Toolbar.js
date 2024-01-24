import React from "react";
import "../../css/toolbar/Toolbar.css";
import PlayAll from "./PlayAll";
import AddAll from "./AddAll";
import TrackNumber from "./TrackNumber";
import Filter from "./Filter";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Col, Row } from "react-bootstrap";

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

export default function Toolbar(props) {
    
    return (
        <Navbar variant="light" bg="light" expand="lg" >
            <Container fluid="lg">
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                        {/* <Col md={2} sm={1}>
                            <PlayAll onPlayAll={(event, mode) => props.onPlayAll(event, mode)}/>
                        </Col>
                        <Col md={2} sm={1}>
                            <AddAll onAddAll={(event, mode) => props.onAddAll(event, mode)}/>
                        </Col>
                        <Col md={6} sm={3}></Col>
                        <Col md={3} sm={1.5}>
                            <Filter/>
                        </Col> */}
                        <PlayAll onPlayAll={(event, mode) => props.onPlayAll(event, mode)} />
                        <AddAll onAddAll={(event, mode) => props.onAddAll(event, mode)}/>
                        <Filter onFilter={(inputWord) => props.onFilter(inputWord)}/>

                        

                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className="toolbar">
        //     <PlayAll onPlayAll={props.onPlayAll} dropdownOpen={props.playAllDropdownIsOpen}/>
        //     <AddAll />
        //     <TrackNumber />
        //     <Filter />
        // </div>
    );
}