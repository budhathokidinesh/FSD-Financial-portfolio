import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark p-5">
      <Row className="text-center">
        <Col>
          &copy; Copy right all reserved. || Made by
          <a href="https://www.dineshbudhathoki.com/"> Dinesh Budhathoki</a>
        </Col>
      </Row>
    </Container>
  );
};