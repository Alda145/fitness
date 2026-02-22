import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import aboutSection from '../../../images/aboutSection.png'
import { FaRocket } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";



const AboutSection = () => {
    return (
        <section className="about-section position-relative overflow-hidden  text-white py-5">
            <Container>
                <Row className="align-items-center g-5">
                    {/* TEXT */}
                    <Col xl={6} lg={6} className="mb-5 mb-lg-0">
                        <small className="text-color-about  fw-bold">About Fitness Center</small>

                        <h1 className="fw-bold display-5 my-3">
                            We are the best at fulfilling your potential and achieving your goals.
                        </h1>

                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In impedit
                            accusantium autem quaerat natus nesciunt veritatis fugiat dolor eaque fuga.
                        </p>

                        <div className="d-flex gap-2 my-4">
                            <Button className="ourMission" variant="" ><span>Our Mission</span></Button>
                            <Button className="ourVision" variant=""><span>Our Vision</span></Button>
                            <Button className="ourGoal" variant=""><span>Our Goal</span></Button>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="d-flex align-items-center gap-app mt-2">
                            <FaRocket className="rocket" />
                            <div>
                                <div className="text-secondary ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has
                                </div>

                            </div>
                        </div>
                        <div className="border-bottom"></div>

                        <div className="d-flex align-items-center gap-app mt-4">
                            <Button variant="" size="lg" className="makeAppointment">
                                <span>Make Appointment</span>
                            </Button>
                            <div className="d-flex align-items-center gap-call">
                                <div className="phone">
                                    <span><FaPhoneAlt className="fs-2"/></span> 
                                    <span> <FaComment className="fs-4"  /></span> 
                                </div>
                                <div>
                                    <div className="text-secondary small">Call to Our Experts</div>
                                    <div className="fw-bold">Free: + 0123 456 7890</div>
                                </div>
                            </div>

                        </div>
                    </Col>

                    {/* IMAGE */}
                    <Col xl={6} lg={6} className="text-center imageCouple d-flex">
                        <img
                            src={aboutSection}
                            alt="about"
                            className="img-fluid position-relative z-1 about-image"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;