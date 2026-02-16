import { useRef } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import carousel from '../../../images/carousel.jpg'
import header1 from '../../../images/header1.jpg'
import header2 from '../../../images/header2.jpg'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";


import './index.css'

const CaruselImages = () => {
    const ref = useRef(null);

    const prevFunction = () => {
        ref.current.prev()
    };
    const nextFunction = () => {
        ref.current.next()
    };



    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${carousel})` }}
        >
            <div className="hero-overlay" />

            <Container className="hero-content">
                <Row className="align-items-center">

                    {/* LEFT */}
                    <Col lg={6} className="text-white">
                        <h6 className="text-danger fw-bold">
                            WELCOME TO OUR FITNESS CENTER
                        </h6>

                        <h1 className="fw-bold display-4">
                            Stay healthy by exercising
                            <br />
                            at the best gym center
                        </h1>

                        <p className="opacity-75">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <Button className="watchVideo"><span>Watch Video</span></Button>
                            <Button className="learnMore"><span>Learn More</span></Button>
                        </div>
                    </Col>

                    {/* RIGHT */}
                    <Col lg={6} className="slider-wrapper">

                        <Carousel
                            fade
                            controls={false}
                            indicators={false}
                            ref={ref}
                        >
                            <Carousel.Item>
                                <img src={header1} className="slider-img" alt="" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={header2} className="slider-img" alt="" />
                            </Carousel.Item>
                        </Carousel>

                        {/* ARROWS */}
                        <div className="arrows">
                            <button className="arrowColor" onClick={prevFunction}><BsArrowRight /></button>
                            <button className="arrowColor" onClick={nextFunction}><BsArrowLeft /></button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>

    );
};


export default CaruselImages;