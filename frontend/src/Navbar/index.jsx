import { useState } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import {
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaSearch,
    FaBars,
    FaHandRock
} from "react-icons/fa";
import "./index.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/*  TOPBAR */}
            <div className="topbar">
                <Container className="d-flex justify-content-between align-items-center flex-wrap py-1">

                    <div className="d-flex gap-3 align-items-center top-left">
                        <span><FaEnvelope /> example@gmail.com</span>
                        <span><FaClock /> Mon - Sat: 8.00 am-7.00 pm</span>
                    </div>

                    <div className="d-flex gap-3 align-items-center top-right">
                        <span>Login</span>
                        <span className="divider">\</span>
                        <span>Register</span>

                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>

                </Container>
            </div>

            {/* MAIN NAV */}
            <div className="nav-bg position-relative">
                <Container className="d-flex align-items-center">

                    {/* LOGO */}
                    <div className="logo d-flex align-items-center">
                        <FaHandRock className="me-2" />
                        Fitness
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="menu-shape d-none d-md-block">
                        <Nav className="menu-links">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Courses</Nav.Link>
                            <Nav.Link>Blogs</Nav.Link>
                            <Nav.Link>Pages</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </div>

                    {/* ACTIONS */}
                    <div className="ms-auto d-flex align-items-center gap-2">

                        <div className="search-box d-none d-md-block">
                            <span><FaSearch /></span>
                        </div>

                        <Button className="quote-btn d-none d-md-block">
                            <span>Get Quote</span>
                        </Button>

                        {/* MOBILE BUTTON */}
                        <button
                            className="mobile-toggle d-md-none"
                            onClick={() => setOpen(!open)}
                        >
                            <FaBars />
                        </button>
                    </div>
                </Container>

                {/* MOBILE MENU */}
                <div className={`mobile-menu ${open ? "show" : ""}`}>
                    <Nav className="flex-column menu-mobile-links">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Courses</Nav.Link>
                        <Nav.Link>Blogs</Nav.Link>
                        <Nav.Link>Pages</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>

                    <div className="mobile-search">
                        <FaSearch />
                    </div>

                    <Button className="quote-btn w-100 mt-3">
                        Get Quote
                    </Button>
                </div>
            </div>
        </>
    );
}