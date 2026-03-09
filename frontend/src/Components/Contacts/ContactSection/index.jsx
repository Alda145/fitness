import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaFirefoxBrowser,
    FaChevronCircleRight,
    FaPlayCircle,
} from "react-icons/fa";

import contactBanner from "../../../images/contactBanner.png";
import "./index.css";

export default function ContactSection() {
    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="g-5 align-items-stretch ">

                    {/* LEFT SIDE */}
                    <Col lg={6} className="d-flex">
                        <div className="w-100">
                            <span className="text-danger fw-bold">Contact Us</span>

                            <h1 className="fw-bold mt-2 mb-3">
                                Contact With Team Of <br /> Experts
                            </h1>

                            <p className="text-muted">
                                The contact form is currently inactive. Get a functional and
                                working contact form with Ajax & PHP in a few minutes.
                                <span className="text-danger fw-bold"> Download Now.</span>
                            </p>

                            {/* INFO */}
                            <Row className="mt-4 g-4">

                                <Col md={6} className="d-flex align-items-start gap-3">
                                    <FaMapMarkerAlt size={22} className="text-danger mt-1" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Address</h6>
                                        <p className="text-muted small mb-0">123 street New York</p>
                                    </div>
                                </Col>

                                <Col md={6} className="d-flex align-items-start gap-3">
                                    <FaEnvelope size={22} className="text-danger mt-1" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Mail Us</h6>
                                        <p className="text-muted small mb-0">info@example.com</p>
                                    </div>
                                </Col>

                                <Col md={6} className="d-flex align-items-start gap-3">
                                    <FaPhoneAlt size={22} className="text-danger mt-1" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Telephone</h6>
                                        <p className="text-muted small mb-0">(+012) 3456 7890 123</p>
                                    </div>
                                </Col>

                                <Col md={6} className="d-flex align-items-start gap-3">
                                    <FaFirefoxBrowser size={22} className="text-danger mt-1" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Yoursite@ex.com</h6>
                                        <p className="text-muted small mb-0">(+012) 3456 7890</p>
                                    </div>
                                </Col>
                            </Row>

                            {/* SOCIAL */}
                            <div className="d-flex gap-3 mt-4">
                                <div className="social-btn">
                                    facebook <FaChevronCircleRight />
                                </div>

                                <div className="social-btn">
                                    twitter <FaChevronCircleRight />
                                </div>

                                <div className="social-btn">
                                    instagram <FaChevronCircleRight />
                                </div>
                            </div>

                            {/* JOIN TEAM CARD */}
                            <div className="join-card mt-5 p-4 border position-relative overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(rgba(255,245,225,0.2), rgba(12,24,68,0.1), rgba(200,0,54,0.3))",
                                }}
                            >

                                <div style={{ maxWidth: "60%" }}>
                                    <h2 className="fw-bold">
                                        Want To Join Our <br /> Talented Team
                                    </h2>

                                    <p className="fw-semibold">
                                        visit our website <FaPlayCircle className="text-danger ms-2" />
                                    </p>
                                </div>

                                <Image src={contactBanner} className="girl-img" />
                            </div>
                        </div>
                    </Col>

                    {/* RIGHT SIDE FORM */}
                    <Col lg={6} className="d-flex">
                        <div className="w-100">
                            <div className="contact-form p-5">

                                <h2 className="text-white fw-bold mb-4">
                                    Get In touch
                                </h2>

                                <Form>

                                    <Row className="g-3">

                                        <Col md={6}>
                                            <Form.Control
                                                placeholder="Your Name"
                                                className="form-skew"
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Control
                                                placeholder="Your Email"
                                                className="form-skew"
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Control
                                                placeholder="Your Phone"
                                                className="form-skew"
                                            />
                                        </Col>

                                        <Col md={6}>
                                            <Form.Control
                                                placeholder="Your Project"
                                                className="form-skew"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Control
                                                placeholder="Subject"
                                                className="form-skew"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Message"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Check
                                                type="checkbox"
                                                label="I agree with the site privacy policy"
                                                className="text-white"
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Button
                                                className="w-100 py-3 fw-bold send-btn"
                                            >
                                                Send Message
                                            </Button>
                                        </Col>

                                    </Row>

                                </Form>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}