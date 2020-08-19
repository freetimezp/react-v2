import React from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";

class Blog extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Row>
                            <Card className="m-2" style={{width: 260}}>
                                <img
                                    className="mr-3 rounded"
                                    src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                    alt="media"
                                />
                                <Card.Body>
                                    <h5>Media title</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                        adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                        error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                    </p>
                                </Card.Body>
                            </Card>
                            <Card className="m-2" style={{width: 260}}>
                                <Card.Body>
                                    <h5>Media title</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                        adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                        error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                    </p>
                                </Card.Body>
                                <img
                                    className="mr-3 rounded"
                                    src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                    alt="media"
                                />
                            </Card>
                            <Card className="m-2" style={{width: 260}}>
                                <img
                                    className="mr-3 rounded"
                                    src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                    alt="media"
                                />
                                <Card.Body>
                                    <h5>Media title</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                        adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                        error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                    </p>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col md="3">
                        <h5 className="m-2 text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Youtube</ListGroup.Item>
                                <ListGroup.Item>Instagram</ListGroup.Item>
                                <ListGroup.Item>Twitter</ListGroup.Item>
                                <ListGroup.Item>Viber</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi aspernatur debitis inventore mollitia vero.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

//
// <div className="card" style="width: 18rem;">
//     <img className="card-img-top" src="..." alt="Card image cap">
//         <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                 card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
// </div>

export default Blog;