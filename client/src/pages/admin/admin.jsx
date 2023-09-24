import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Admin() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-3"
      style={{gap: "10px"}}
    >
      <Button variant="primary">Add Type</Button>
      <Button variant="primary">Add Brand</Button>
      <Button variant="primary">Add Device</Button>
    </Container>
  )
}

export default Admin;
