import React from "react";
import "../../css/toolbar/Toolbar.css";
import PlayAll from "./PlayAll";
import AddAll from "./AddAll";
import TrackNumber from "./TrackNumber";
import Filter from "./Filter";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Col } from "react-bootstrap";
import { faP, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Col>
                        <Nav style={playAllStyle}>
                            <NavDropdown id="play-all"
                                        title="Play All"
                                        menuVariant="light"
                                        key="Play All"
                                        style={{width: "100%"}}>
                                <NavDropdown.Item key="repeat"
                                                href="/">
                                    Repeat Queue When Over

                                </NavDropdown.Item>
                                <NavDropdown.Item key="once"
                                                href="/">
                                    Play Queue Only Once
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav style={addAllStyle}>
                            <NavDropdown id="add-all"
                                        title="Add All"
                                        menuVariant="light"
                                        key="Add All"
                                        style={{width: "100%"}}>
                                <NavDropdown.Item key="sequential"
                                                href="/">
                                    Add To Queue Sequentially
                                </NavDropdown.Item>
                                <NavDropdown.Item key="shuffle"
                                                href="/">
                                    Add To Queue Shuffled
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Nav style={trackNumberStyle}>
                            <NavDropdown id="track-number"
                                        title="Track Number"
                                        menuVariant="light"
                                        key="track-number"
                                        style={{width: "100%"}}>
                                
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Filter" />

                                </Form.Group>
                            </Form>
                        </Nav>
                    </Col>
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