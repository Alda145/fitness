import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import team1 from '../../../images/team1.jpg'
import team2 from '../../../images/team2.jpg'
import team3 from '../../../images/team3.jpg'
import team4 from '../../../images/team4.jpg'
import "./index.css";
const trainers = [
    {
        id: 1,
        name: "Trainer Name",
        role: "Profession",
        image: team1,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        id: 2,
        name: "Trainer Name",
        role: "Profession",
        image: team2,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        id: 3,
        name: "Trainer Name",
        role: "Profession",
        image: team3,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        id: 4,
        name: "Trainer Name",
        role: "Profession",
        image: team4,
        socials: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
];

export default function TeamSection() {
    return (
        <section className="py-5 bg-light">
            <Container>
                {/* HEADER */}
                <div className="text-center mb-5">
                    <p className="ourTrainer fw-semibold mb-2 fw-bold fs-3">Our Trainer</p>
                    <h2 className="fw-bold display-6 ourTeam fs-1">Meet Our Amazing Team</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                        adipisci facilis cupiditate recusandae aperiam temporibus.
                    </p>
                </div>

                {/* CARDS */}
                <Row className="g-4">
                    {trainers.map((trainer) => (
                        <Col key={trainer.id} xs={12} sm={6} lg={3}>
                            <Card className="border-0 shadow-sm team-card h-100">

                                {/* IMAGE WRAPPER */}
                                <div className="position-relative overflow-hidden team-img">
                                    <Card.Img variant="top" src={trainer.image} />

                                    {/* SOCIAL ICONS */}
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                                        <a href={trainer.socials.facebook} className="social-icon">
                                            <FaFacebookF />
                                        </a>
                                        <a href={trainer.socials.twitter} className="social-icon">
                                            <FaTwitter />
                                        </a>
                                        <a href={trainer.socials.instagram} className="social-icon">
                                            <FaInstagram />
                                        </a>
                                        <a href={trainer.socials.linkedin} className="social-icon">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>

                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold trainerName">{trainer.name}</Card.Title>
                                    <Card.Text className="text-muted">{trainer.role}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}