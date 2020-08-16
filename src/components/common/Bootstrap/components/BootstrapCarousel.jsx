import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import imgA from '../images/imgA.jpg';
import imgB from '../images/imgB.jpg';
import imgC from '../images/imgC.jpg';
import imgD from '../images/imgD.jpg';

class BootstrapCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgA}
                            alt="carousel"
                            height={912}
                        />
                        <Carousel.Caption>
                            <h3>Have a nice day!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgB}
                            alt="carousel"
                            height={912}
                        />
                        <Carousel.Caption>
                            <h3>Have a nice day!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgC}
                            alt="carousel"
                            height={912}
                        />
                        <Carousel.Caption>
                            <h3>Have a nice day!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imgD}
                            alt="carousel"
                            height={912}
                        />
                        <Carousel.Caption>
                            <h3>Have a nice day!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default BootstrapCarousel;