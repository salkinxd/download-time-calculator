import React from "react";

//? Import Style
import "../styles/Form.scss";

//! Import Bootstrap
import { Form, Row, Col, Jumbotron, Dropdown, DropdownButton } from "react-bootstrap";

const FormComponent = ({ inputSpeed, setInputSpeed, inputType, setInputType, fileSize, setFileSize, fileType, setFileType, time, speedTypes, fileTypes }) => {
    function changeSpeedScroll(e) {
        if (e.deltaY < 0) {
            setInputSpeed(parseInt(e.target.value) + 1);
        } else {
            setInputSpeed(parseInt(e.target.value) - 1);
        }
    }
    function changeSizeScroll(e) {
        if (e.deltaY < 0) {
            setFileSize(parseInt(e.target.value) + 1);
        } else {
            setFileSize(parseInt(e.target.value) - 1);
        }
    }

    const dropDownSpeedItems = speedTypes.map((i, index) => (
        <Dropdown.Item key={index} onClick={() => setInputType(i)}>
            {i}
        </Dropdown.Item>
    ));
    const dropDownFileItems = fileTypes.map((i, index) => (
        <Dropdown.Item key={index} onClick={() => setFileType(i)}>
            {i}
        </Dropdown.Item>
    ));
    return (
        <Jumbotron className="bg-light">
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Download Speed</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            type="number"
                            onChange={(e) => {
                                setInputSpeed(e.target.value);
                            }}
                            max="1000"
                            value={inputSpeed}
                            onWheel={changeSpeedScroll}
                        />
                    </Col>
                    <Col>
                        <DropdownButton id="dropdown-basic-button" title={inputType}>
                            {dropDownSpeedItems}
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    {/*                     <Col>
                        <Form.Check type="radio" id="default-radio" value="KB/s" label="KB/s" onChange={inputT} name="inputType" />
                        <Form.Check type="radio" id="default-radio" value="MB/s" label="MB/s" onChange={inputT} name="inputType" />
                        <Form.Check type="radio" id="default-radio" value="GB/s" label="GB/s" onChange={inputT} name="inputType" />
                    </Col>
                    <Col>
                        <Form.Check type="radio" id="default-radio" value="KBit/s" label="KBit/s" onChange={inputT} name="inputType" />
                        <Form.Check type="radio" id="default-radio" value="MBit/s" label="MBit/s" onChange={inputT} name="inputType" defaultChecked />
                        <Form.Check type="radio" id="default-radio" value="GBit/s" label="GBit/s" onChange={inputT} name="inputType" />
                    </Col> */}
                </Row>
            </Form>
            <hr />
            <Form>
                <Row>
                    <Col>
                        <Form.Label>File Size</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            type="number"
                            onChange={(e) => {
                                setFileSize(e.target.value);
                            }}
                            max="1000"
                            value={fileSize}
                            onWheel={changeSizeScroll}
                        />
                    </Col>
                    <Col>
                        <DropdownButton id="dropdown-basic-button" title={fileType}>
                            {dropDownFileItems}
                        </DropdownButton>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h3>{time !== "0" ? time : ""}</h3>
                    </Col>
                </Row>
            </Form>
        </Jumbotron>
    );
};

export default FormComponent;
