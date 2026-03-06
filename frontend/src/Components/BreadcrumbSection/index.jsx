import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const BreadcrumbSection = ({ title, current }) => {
    return (
        <div className="bg-breadcrumb text-white">
            <Container className="text-center">

                <h1 className="fw-bold display-4 mb-3">{title}</h1>

                <div className="d-flex justify-content-center">
                    <Breadcrumb className="custom-breadcrumb mb-0">

                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                            Home
                        </Breadcrumb.Item>

                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/pages" }}>
                            Pages
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active className="text-danger">
                            {current}
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </div>

            </Container>
        </div>
    );
};

export default BreadcrumbSection;