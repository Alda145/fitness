import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import './index.css';
import icon1 from '../../../images/icon1.png'
import icon2 from '../../../images/icon2.png'
import icon3 from '../../../images/icon3.png'
import icon4 from '../../../images/icon4.png'
import icon5 from '../../../images/icon5.png'
import icon6 from '../../../images/icon6.png'
import testimonial3 from '../../../images/testimonial3.jpg'
import servicesImg from '../../../images/servicesImg.jpg'

const coursesData = [
    {
        id: 1,
        title: "Gym Fitness Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon1,
        trainerImg: testimonial3,
    },
    {
        id: 2,
        title: "Power Lifting Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon2,
        trainerImg: testimonial3,
    },
    {
        id: 3,
        title: "Body Building Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon3,
        trainerImg: testimonial3,
    },
    {
        id: 4,
        title: "Aerobics & Skipping Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon4,
        trainerImg: testimonial3,
    },
    {
        id: 5,
        title: "Boxing Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon5,
        trainerImg: testimonial3,
    },
    {
        id: 6,
        title: "Cardio Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        trainer: "Paul Flavius",
        time: "06:00 - 07:00",
        icon: icon6,
        trainerImg: testimonial3,
    },
];

export default function CoursesSection() {
    return (
        <div className="courses py-5">
            <Container fluid>
                <Container>

                    {/* TITULLI */}
                    <div className="text-center text-white mb-5">
                        <h6 className="text-danger fw-bold">Our Courses</h6>
                        <h2 className="fw-bold">Check Our Highlights Below</h2>
                        <p className="mx-auto" style={{ maxWidth: 600 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* CARDS */}
                    <Row className="g-4">
                        {coursesData.map((course) => (
                            <Col key={course.id} lg={4} md={6} sm={12} className="d-flex">
                                <Card className="w-100 border-0 shadow bg-white bg-opacity-50 border-0 text-white ">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-3 ">
                                            {/* ICON */}
                                            <div className="mb-3 imageIcon classSkew">
                                                <Image
                                                    src={course.icon}
                                                    alt={course.title}
                                                    width={60}
                                                    height={60}
                                                    className="imageStyle"
                                                />
                                            </div>

                                            {/* TRAINER */}
                                            <div className="d-flex align-items-center mb-2 small text-muted">
                                                <Image
                                                    src={course.trainerImg}

                                                    width={40}
                                                    height={40}
                                                    className="me-2"
                                                />
                                                <div>
                                                    <strong className="text-white classSkew">{course.trainer}</strong>
                                                    <div className="text-white classSkew">Saturday • {course.time}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <Card.Title className="fw-bold titleColor classSkew">
                                            {course.title}
                                        </Card.Title>

                                        <Card.Text className="flex-grow-1 classSkew">
                                            {course.desc}
                                        </Card.Text>

                                        <Button variant="" className="align-self-start readMore ">
                                            <span>Read More</span>
                                        </Button>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <Button className="moreCoursesBtn px-4 py-2">
                            <span>  More Courses</span>
                        </Button>
                    </div>

                </Container>
            </Container>
        </div>
    );
}