import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

const About = (props) => {
    return (
        <div>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item className="bg-dark">
                                    <Nav.Link className="text-white" eventKey="first">Music</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="bg-dark">
                                    <Nav.Link className="text-white" eventKey="second">Video</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="bg-dark">
                                    <Nav.Link className="text-white" eventKey="third">Photo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="bg-dark">
                                    <Nav.Link className="text-white" eventKey="fourth">Words for your heart</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="bg-dark">
                                    <Nav.Link className="text-white" eventKey="fifth">Fun</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-2">
                                <Tab.Pane eventKey="first">
                                    <img
                                        src="https://news.liga.net/images/general/2019/09/11/thumbnail-sld-20190911154809-5288.jpg?v=1568211325"
                                        alt="tabs"
                                        className="w-100"
                                        height={500}
                                    />
                                    <p className="mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                        lorem ipsum lorem ipsum lorem!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="https://www.rosphoto.com/images/u/articles/1510/7_5.jpg"
                                        alt="tabs"
                                        className="w-100"
                                        height={500}
                                    />
                                    <p className="mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                        lorem ipsum lorem ipsum lorem!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src="https://www.biletik.aero/upload/resize_cache/medialibrary/b99/compressed/b99478b0e501cbe3e1015675af50a1a0.jpg"
                                        alt="tabs"
                                        className="w-100"
                                        height={500}
                                    />
                                    <p className="mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                        lorem ipsum lorem ipsum lorem!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        src="https://avatars.mds.yandex.net/get-pdb/1779763/8c99d239-f12b-4e71-a947-4168092fbf4f/s1200"
                                        alt="tabs"
                                        className="w-100"
                                        height={500}
                                    />
                                    <p className="mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                        lorem ipsum lorem ipsum lorem!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img
                                        src="https://news.liga.net/images/general/2019/09/11/20190911155054-8415.jpg?v=1568211490"
                                        alt="tabs"
                                        className="w-100"
                                        height={500}
                                    />
                                    <p className="mt-2">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                        lorem ipsum lorem ipsum lorem!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default About;