import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './index.css'
import feature1 from '../../../images/feature1.jpg';
import feature2 from '../../../images/feature2.jpg'
import feature3 from '../../../images/feature3.jpg'
import feature4 from '../../../images/feature4.jpg'

const items = [
    {
        img: feature1,
        title: "Work Your Butt Off",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: feature2,
        title: "Get In The Groove",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: feature3,
        title: "It’s More Than A Game",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: feature4,
        title: "It’s More Than A Game",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

];

export default function HighlightSection() {
    const [startIndex, setStartIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    // 👉 ndryshon sipas ekranit
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setCardsPerView(1);
            } else if (window.innerWidth < 992) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);  //dëgjon ndryshimin e madhësisë së ekranit


        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        if (startIndex < items.length - cardsPerView) {  //kontrollon që mos të dalë jashtë array
            setStartIndex(startIndex + 1); //pastaj lëviz një kartë përpara
        }
    };

    //  PREV
    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1); //lëviz një kartë mbrapa
        }
    };

    const visibleItems = items.slice(startIndex, startIndex + cardsPerView);

    return (
        <section className="highlights-section  position-relative pt-5">
            <div className="pt-5">
                <Container className="position-relative z-2">

                    <div className="text-center mb-5">
                        <h3 className="chooseUs">Why choose us?</h3>
                        <h2 className="fw-bold ourHighlits">Our Highlights Below</h2>
                        <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere,
                            numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
                    </div>

                    <div className="cards-wrapper">

                        <Row className="g-4 ">
                            {visibleItems.map((item, i) => (
                                <Col key={i}>
                                    <Card className="border-0 shadow text-center h-100 cardBody">
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title className="fw-bold cardTitle">{item.title}</Card.Title>
                                            <Card.Text className="text-muted text-start">{item.text}</Card.Text>
                                            <Button variant="" className="readMore"><span>Read More</span></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </div>

                </Container>

                {/* SHAPE */}
                <div className="feature-shape">

                    <button className="arrow left" onClick={prev}>
                        <FaChevronLeft />
                    </button>

                    <button className="arrow right" onClick={next}>
                        <FaChevronRight />
                    </button>

                </div>
            </div>

        </section>
    );
}