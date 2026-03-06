import { useState } from "react";
import { Container, Nav, Button, NavDropdown } from "react-bootstrap";
import {
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaBars,

} from "react-icons/fa6";
import { FaHandRock, FaSearch } from "react-icons/fa";
import "./index.css";
import { NavLink } from "react-router-dom";

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
                            <Nav.Link as={NavLink} to="/" end className="nav-item-link" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item-link">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/courses" className="nav-item-link">Courses</Nav.Link>
                            <Nav.Link as={NavLink} to="/blogs" className="nav-item-link">Blogs</Nav.Link>
                            <NavDropdown title="Pages" id="pages-dropdown">

                                <NavDropdown.Item as={NavLink} to="/features" className="nav-item-link">
                                    Our Features
                                </NavDropdown.Item>

                                <NavDropdown.Item as={NavLink} to="/testimonial" className="nav-item-link">
                                    Testimonial
                                </NavDropdown.Item>

                                <NavDropdown.Item as={NavLink} to="/team" className="nav-item-link">
                                    Our Team
                                </NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact" className="nav-item-link">Contact</Nav.Link>
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
                        <Nav.Link as={NavLink} to="/" className="nav-item-link">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-item-link">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/courses" className="nav-item-link">Courses</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs" className="nav-item-link">Blogs</Nav.Link>
                        <NavDropdown title="Pages" id="pages-dropdown"  className="dropdown-menu">

                            <NavDropdown.Item as={NavLink} to="/features" className="nav-item-link">
                                Our Features
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/testimonial" className="nav-item-link">
                                Testimonial
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/team" className="nav-item-link">
                                Our Team
                            </NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/contact" className="nav-item-link">Contact</Nav.Link>
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