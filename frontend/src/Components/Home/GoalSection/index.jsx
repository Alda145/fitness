import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import goalBackgroundImg from "../../../images/goalBackgroundImg.jpg";
import fitnessGoalBanner from "../../../images/fitnessGoalBanner.png";
import icon1 from "../../../images/icon1.png";
import icon6 from "../../../images/icon6.png";
import './index.css'

const GoalSection = () => {
    return (
        <div className="goal py-5">
            <Container>
                <Row className="align-items-center g-5">

                    {/* LEFT CONTENT */}
                    <Col lg={6} >
                        <span className="text-danger fw-semibold text-uppercase">
                            Fitness Goal
                        </span>

                        <h2 className="fw-bold display-h2 my-3">
                            Complete your possibilities,
                            <br />
                            Achieve Your Fitness Goals.
                        </h2>

                        {/* CARD 1 */}
                        <div className="d-flex bg-white bg-opacity-10 p-5 rounded mb-4 backdrop-blur">
                            <div className="me-3 iconFitness ">
                                <img
                                    src={icon1}
                                    alt="fitness"
                                    className="img-fluid p-2 "
                                />
                            </div>
                            <div>
                                <h5 className="fw-semibold mb-1 fitnessSmallText">Free Fitness Training</h5>
                                <p className="mb-0  text-white">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Tempore est harum
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="d-flex bg-white bg-opacity-10 p-5 rounded mb-4 backdrop-blur">
                            <div className="me-3 iconFitness">
                                <img
                                    src={icon6}
                                    alt="fitness"
                                    className="img-fluid p-2 "
                                />
                            </div>
                            <div>
                                <h5 className="fw-semibold mb-1 fitnessSmallText">Cardio and Strength</h5>
                                <p className="mb-0  text-white">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Tempore est harum
                                </p>
                            </div>
                        </div>

                        <Button variant="" className="readDetails py-3 px-5 fw-bold">
                            <span>Read Details</span>
                        </Button>
                    </Col>

                    {/* RIGHT IMAGE */}
                    <Col lg={6} className="text-center">
                        <img
                            src={fitnessGoalBanner}
                            alt="fitness"
                            className="img-fluid position-relative z-1 image-position"
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default GoalSection;